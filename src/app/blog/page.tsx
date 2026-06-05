import BlogCard from "@/components/blog/BlogCard";
import React from "react";
import { Metadata } from "next";
import Script from "next/script"; 

export const metadata: Metadata = {
  title: "Our Blog | Private AI Insights for Insurance Teams ",
  description: "Engineering deep-dives, compliance guides & research from Sovix Labs — on private AI, insurance underwriting, HIPAA deployment & LLM infrastructure.",
 alternates: {
    canonical: "https://sovixlabs.com/blog",
  },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sovixlabs.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://sovixlabs.com/blog",
    },
  ],
};

const Page = () => {
  return (
    <>
          <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
  <BlogCard />
  </>
  );
};

export default Page;
