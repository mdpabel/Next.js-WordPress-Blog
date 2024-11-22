'use client';

import ReactDOM from 'react-dom';

export default function PreloadResources() {
  const basePath = process.env.BASE_PATH!;
  ReactDOM.preload(`${basePath}/blog`, {
    as: 'document',
    fetchPriority: 'high',
  });

  return null;
}
