import BlogCard from "@/components/blog/BlogCard";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog | Private AI Insights for Insurance Teams ",
  description: "Engineering deep-dives, compliance guides & research from Sovix Labs — on private AI, insurance underwriting, HIPAA deployment & LLM infrastructure.",
};

const Page = () => {
  return <BlogCard />;
};

export default Page;
