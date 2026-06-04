import BlogDetail from '@/components/blog/BlogDetail';
import { getBlogBySlug } from '@/data/blogData';
import type { Metadata } from 'next';
import React from 'react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Sovix Labs",
      description: "This article could not be found.",
    };
  }

  return {
    title: blog.metaTitle ?? `${blog.title} | Sovix Labs`,
    description: blog.metaDescription ?? blog.excerpt,
  };
}

const Page = ({ params }: Props) => {
  return (
    <>
      <BlogDetail params={params} />
    </>
  );
}

export default Page;