'use client';

import ReactDOM from 'react-dom';

export default function PreloadResources() {
  const basePath = process.env.BASE_PATH!;
  ReactDOM.preload(`${basePath}/blog`, { as: 'image', fetchPriority: 'high' });

  return null;
}
