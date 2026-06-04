export interface Blog {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  authorInitials: string;
  authorRole?: string;
  authorBio?: string;
  featured?: boolean;
  image: string;
  blogContent: string;
  slug:string;
  metaTitle:string;
  metaDescription:string;
}

export const ALL_BLOGS: Blog[] = [
  {
    id: 1,
    slug: "why-rag-fails-in-insurance-and-what-we-built-instead", 
    metaTitle: "test Why RAG fails in insurance — and what we built instead.",    
    metaDescription: "A deep dive into why RAG pipelines...", 
    category: "Research",
    date: "Apr 14, 2025",
    title: "Why RAG fails in insurance — and what we built instead.",
    excerpt:
      "Retrieval-augmented generation works beautifully for general knowledge. It breaks in subtle, expensive ways when applied to insurance documents — cross-policy reasoning, dated endorsements, and conflicting clauses across a submission stack.",
    author: "Dr. James Okoro",
    authorInitials: "JO",
    authorRole: "Chief Scientist",
    authorBio:
      "NLP researcher from Cambridge. Published work on document reasoning in low-resource domains. Leads all model research inside Sovix.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    blogContent: `
    <div class="flex flex-col blog-content">
    <h2>Why RAG fails in insurance — and what we built instead.</h2>
    <p>
      Retrieval-augmented generation is one of the most useful architectural patterns to emerge from the LLM era. The idea is straightforward: rather than relying solely on a model's parametric knowledge, you retrieve relevant documents at inference time and condition the model's response on them. It works well for customer support, knowledge bases, internal wikis.
    </p> <p>It does not work well for insurance — at least not without significant modification. We learned this the hard way. When we built the first version of Sovix's document intelligence layer in 2022, we started with a standard RAG pipeline. It failed in production within three weeks. Not catastrophically — the outputs looked plausible. That was the problem. Plausible but wrong is worse than obviously broken.
    </p>
    </div> 
    <div class="flex flex-col blog-content">
   <h2>Why RAG fails in insurance — and what we built instead.</h2>
    <p>
      Retrieval-augmented generation is one of the most useful architectural patterns to emerge from the LLM era. The idea is straightforward: rather than relying solely on a model's parametric knowledge, you retrieve relevant documents at inference time and condition the model's response on them. It works well for customer support, knowledge bases, internal wikis.
    </p> <p>It does not work well for insurance — at least not without significant modification. We learned this the hard way. When we built the first version of Sovix's document intelligence layer in 2022, we started with a standard RAG pipeline. It failed in production within three weeks. Not catastrophically — the outputs looked plausible. That was the problem. Plausible but wrong is worse than obviously broken.
    </p>
    </div> 
        `,
  },
  {
    id: 2,
    slug: "how-we-built-a-zero-trust-inference-pipeline-for-workloads",
    metaTitle: "Why RAG Fails in Insurance | Sovix Labs",    
    metaDescription: "A deep dive into why RAG pipelines...", 
    category: "Engineering",
    date: "Apr 10, 2025",
    title: "How we built a zero-trust inference pipeline for HIPAA workloads.",
    excerpt:
      "Deploying LLMs in regulated environments requires rethinking every assumption about logging, data residency, and model access patterns. Here's our architecture.",
    author: "Priya Nair",
    authorInitials: "PN",
    authorRole: "Senior Engineer",
    authorBio:
      "Infrastructure engineer specialising in secure cloud deployments. Previously at AWS and Cloudflare.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    blogContent: "",
  },
 
];
export function getBlogById(id: number): Blog | undefined {
  return ALL_BLOGS.find((b) => b.id === id);
}

// Add this 👇
export function getBlogBySlug(slug: string): Blog | undefined {
  return ALL_BLOGS.find((b) => b.slug === slug);
}

export function getRelatedBlogs(currentId: number, limit = 3): Blog[] {
  const current = getBlogById(currentId);
  if (!current) return ALL_BLOGS.slice(0, limit);

  const sameCategory = ALL_BLOGS.filter(
    (b) => b.id !== currentId && b.category === current.category,
  );

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = ALL_BLOGS.filter(
    (b) => b.id !== currentId && b.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
