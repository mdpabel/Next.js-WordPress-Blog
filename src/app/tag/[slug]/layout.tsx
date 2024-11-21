import BlogsLayout from '@/components/blog/blog-layout';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return <BlogsLayout children={children} />;
};

export default layout;
