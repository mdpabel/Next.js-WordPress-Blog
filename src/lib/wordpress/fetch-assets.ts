// Define types for the logo and favicon (site icon)
interface SiteSettings {
  site_logo?: string;
  site_icon?: string;
}

// Create a utility to fetch the logo and favicon
export const fetchLogoAndFavicon = async (): Promise<SiteSettings> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Get API URL from environment variable

  if (!apiUrl) {
    console.error('API URL is not defined in the environment');
    return {
      site_logo: '',
      site_icon: '',
    };
  }

  try {
    // Fetch site settings (logo and favicon)
    const response = await fetch(`${apiUrl}/wp-json/wp/v2/settings`);
    const settings: SiteSettings = await response.json();

    const logo = settings.site_logo ?? ''; // Default to empty string if no logo found
    const favicon = settings.site_icon ?? ''; // Default to empty string if no favicon found

    // Return the logo and favicon in a type-safe manner
    return {
      site_logo: logo,
      site_icon: favicon,
    };
  } catch (error) {
    console.error('Error fetching logo and favicon:', error);
    return {
      site_logo: '',
      site_icon: '',
    };
  }
};
