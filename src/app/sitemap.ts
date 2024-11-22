import { fetchCategories } from '@/lib/wordpress/fetch-category';
import { getPosts } from '@/lib/wordpress/fetch-posts';
import { fetchTags } from '@/lib/wordpress/fetch-tags';
import type { MetadataRoute } from 'next';
import { WP_REST_API_Post, WP_REST_API_Posts } from 'wp-types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_PATH || 'https://acme.com'; // Replace with your actual base URL if not using env

  // Fetch dynamic content
  const blogs = await getPosts();
  const tags = await fetchTags();
  const categories = await fetchCategories();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const posts = blogs.posts as WP_REST_API_Posts;

  // Generate blog post URLs
  const blogUrls: MetadataRoute.Sitemap = posts.map(
    (post: WP_REST_API_Post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.modified ? new Date(post.modified) : new Date(), // Use `modified` if available
      changeFrequency: 'weekly',
      priority: 0.7,
    }),
  );

  // Generate tag URLs
  const tagUrls: MetadataRoute.Sitemap = tags.map((tag: { slug: string }) => ({
    url: `${baseUrl}/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.4,
  }));

  // Generate category URLs
  const categoryUrls: MetadataRoute.Sitemap = categories.map(
    (category: { slug: string }) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
  );

  // Return the complete sitemap
  return [...staticPages, ...blogUrls, ...tagUrls, ...categoryUrls];
}
