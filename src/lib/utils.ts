import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string, showTime?: boolean) => {
  const timeOption: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    ...(showTime ? timeOption : {}),
  });
};

export const generateTitleFromSlug = (slug: string) => {
  // Split the slug by hyphens and join by spaces
  const title = slug.split('-').join(' ');

  // Capitalize the first letter of the title and make the rest lowercase
  return title.charAt(0).toUpperCase() + title.slice(1);
};
