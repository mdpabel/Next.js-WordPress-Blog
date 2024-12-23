import { cache } from 'react';
import { WP_REST_API_Categories } from 'wp-types';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const fetchCategories = cache(
  async (): Promise<WP_REST_API_Categories> => {
    try {
      const response = await fetch(`${API_URL}/wp-json/wp/v2/categories`, {
        cache: 'force-cache',
        next: {
          tags: ['categories'],
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const categories: WP_REST_API_Categories = await response.json();
      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },
);

// Caching category fetch
export const getCategoryBySlug = cache(
  async (slug: string): Promise<number | null> => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const response = await fetch(
        `${API_URL}/wp-json/wp/v2/categories?slug=${slug}`,
        {
          cache: 'force-cache',
          next: {
            tags: ['categories'],
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }

      const categories: WP_REST_API_Categories = await response.json();
      if (categories.length === 0) {
        return null; // No category found
      }

      return categories[0].id; // Return the first match
    } catch (error) {
      console.error(error);
      return null;
    }
  },
);
