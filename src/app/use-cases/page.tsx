
import UseCasesPage from "@/components/UseCases/UseCasesPage";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Use Cases for Insurance: Underwriting, Claims & Compliance",
  description: "See how Sovix Labs automates insurance inspection reports, underwriting triage, claims review & compliance queries. All running inside your environment.",
 alternates: {
    canonical: "https://sovixlabs.com/use-cases",
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
      "name": "Use Cases",
      "item": "https://sovixlabs.com/use-cases",
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
    <UseCasesPage />
    </>
  );
};

export default Page;
