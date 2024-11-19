import { cache } from 'react';
import { WP_REST_API_Posts, WP_REST_API_Tags } from 'wp-types';
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

export const getPosts = cache(async (options: GetPostsOptions = {}) => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL!;
    const params = new URLSearchParams();

    // Fetch a single post by slug
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

    const posts: WP_REST_API_Posts = await response.json();
    return options.slug ? posts[0] || null : posts; // Return a single post if slug is specified
  } catch (error) {
    console.error(error);
    return options.slug ? null : [];
  }
});

export const getPostsWithTagNames = cache(
  async (options: GetPostsOptions = {}) => {
    try {
      // Fetch posts using getPosts
      const posts = await getPosts(options);

      // If no posts are found, return an empty array or null (for slug)
      if (!posts || (Array.isArray(posts) && posts.length === 0)) {
        return Array.isArray(posts) ? posts : null;
      }

      // Fetch all tags
      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const tagsResponse = await fetch(`${API_URL}/wp-json/wp/v2/tags`);

      if (!tagsResponse.ok) {
        throw new Error('Failed to fetch tags');
      }

      const tags: WP_REST_API_Tags = await tagsResponse.json();

      // Map tag IDs to names
      const tagMap = new Map(tags.map((tag) => [tag.id, tag.name]));

      // Enrich posts with tag names
      if (Array.isArray(posts)) {
        // Multiple posts case
        const enrichedPosts = posts.map((post) => ({
          ...post,
          tagNames: post.tags?.map((tagId) => tagMap.get(tagId)) || [],
        }));
        return enrichedPosts;
      } else {
        // Single post case (slug)
        const enrichedPost = {
          ...posts,
          tagNames: posts.tags?.map((tagId) => tagMap.get(tagId)) || [],
        };
        return enrichedPost;
      }
    } catch (error) {
      console.error(error);
      return Array.isArray(options) ? [] : null;
    }
  },
);
