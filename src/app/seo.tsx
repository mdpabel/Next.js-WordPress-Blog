import { Metadata } from 'next';
import { siteMetadata } from './data/meta-data';

interface PageSEOProps {
  title?: string;
  description?: string;
  image?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function genPageMetadata({
  title,
  description,
  image,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.siteName,
      images: image ? [image] : `${process.env.BASE_PATH || ''}/logo.png`,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : `${process.env.BASE_PATH || ''}/logo.png`,
    },
    ...rest,
  };
}
