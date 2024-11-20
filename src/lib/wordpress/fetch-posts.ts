import { cache } from 'react';
import {
  WP_REST_API_Post,
  WP_REST_API_Posts,
  WP_REST_API_Tags,
} from 'wp-types';
import { getCategoryBySlug } from './fetch-category';

interface GetPostsOptions {
  categories?: number[]; // IDs
  categorySlug?: string; // Slug for lookup
  tags?: number[];
  search?: string;
  page?: number;
  perPage?: number;
  slug?: string; // Slug of a specific post
}

export const getPosts = cache(
  async (
    options: GetPostsOptions = {},
  ): Promise<{
    posts: WP_REST_API_Posts | WP_REST_API_Post | null;
    total: number;
  }> => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const params = new URLSearchParams();

      if (options.slug) {
        params.append('slug', options.slug);
      } else {
        if (options.categorySlug) {
          const categoryId = await getCategoryBySlug(options.categorySlug);
          if (categoryId) {
            params.append('categories', categoryId.toString());
          }
        }

        if (options.categories)
          params.append('categories', options.categories.join(','));
        if (options.tags) params.append('tags', options.tags.join(','));
        if (options.search) params.append('search', options.search);
        if (options.page) params.append('page', options.page.toString());
        if (options.perPage)
          params.append('per_page', options.perPage.toString());
      }

      const response = await fetch(
        `${API_URL}/wp-json/wp/v2/posts?${params.toString()}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const totalPosts = parseInt(
        response.headers.get('X-WP-Total') || '0',
        10,
      );
      const posts: WP_REST_API_Posts = await response.json();

      return {
        posts: options.slug ? posts[0] || null : posts,
        total: totalPosts,
      };
    } catch (error) {
      console.error(error);
      return {
        posts: options.slug ? null : [],
        total: 0,
      };
    }
  },
);

export const getPostsWithTagNames = cache(
  async (
    options: GetPostsOptions = {},
  ): Promise<{
    posts: WP_REST_API_Posts | WP_REST_API_Post | null;
    total: number;
  }> => {
    try {
      const { posts, total } = await getPosts(options);

      if (!posts || (Array.isArray(posts) && posts.length === 0)) {
        return { posts: Array.isArray(posts) ? posts : null, total };
      }

      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const tagsResponse = await fetch(`${API_URL}/wp-json/wp/v2/tags`);

      if (!tagsResponse.ok) {
        throw new Error('Failed to fetch tags');
      }

      const tags: WP_REST_API_Tags = await tagsResponse.json();
      const tagMap = new Map(tags.map((tag) => [tag.id, tag.name]));

      if (Array.isArray(posts)) {
        const enrichedPosts = posts.map((post) => ({
          ...post,
          tagNames: post.tags?.map((tagId) => tagMap.get(tagId)) || [],
        }));
        return { posts: enrichedPosts, total };
      } else {
        const enrichedPost = {
          ...posts,
          tagNames: posts.tags?.map((tagId) => tagMap.get(tagId)) || [],
        };
        return { posts: enrichedPost, total };
      }
    } catch (error) {
      console.error(error);
      return { posts: null, total: 0 };
    }
  },
);
