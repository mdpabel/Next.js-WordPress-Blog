export const getSiteIcon = async () => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL!;
    const response = await fetch(`${API_URL}/wp-json`);

    if (!response.ok) {
      throw new Error('Failed to fetch site icon');
    }

    const data = await response.json();
    console.log(data);
    return data.site_icon_url || null; // Returns the site icon URL or null
  } catch (error) {
    console.error(error);
    return null;
  }
};
