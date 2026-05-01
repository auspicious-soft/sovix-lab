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
}

export const ALL_BLOGS: Blog[] = [
  {
    id: 1,
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
    h2>Why RAG fails in insurance — and what we built instead.</h2>
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
  {
    id: 3,
    category: "Compliance",
    date: "Apr 8, 2025",
    title: "Mapping AI outputs to SOC 2 Type II controls — a practical guide.",
    excerpt:
      "Auditors are asking about AI now. Most compliance frameworks weren't written with generative models in mind. We mapped every output to existing controls and found the gaps.",
    author: "Marcus Webb",
    authorInitials: "MW",
    authorRole: "Compliance Lead",
    authorBio:
      "Former Big-4 auditor. Spends his days translating AI behaviour into language regulators understand.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    blogContent: "",
  },
  {
    id: 4,
    category: "Product",
    date: "Apr 5, 2025",
    title:
      "From prototype to production: lessons from 18 months of AI-assisted underwriting.",
    excerpt:
      "We shipped fast, broke things, and learned what matters. Here's an honest retrospective on the UX and technical decisions that aged well — and those that didn't.",
    author: "Sofia Reyes",
    authorInitials: "SR",
    authorRole: "Product Manager",
    authorBio:
      "Product lead for Sovix's underwriting suite. Obsessed with the gap between what users say and what they do.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    blogContent: "",
  },
  {
    id: 5,
    category: "Industry",
    date: "Apr 2, 2025",
    title: "The quiet standardization of private AI in financial services.",
    excerpt:
      "Without a formal standard, the industry is converging on de-facto patterns for model governance, data handling, and explainability. Here's what we're seeing across the sector.",
    author: "Dr. James Okoro",
    authorInitials: "JO",
    authorRole: "Chief Scientist",
    authorBio:
      "NLP researcher from Cambridge. Published work on document reasoning in low-resource domains. Leads all model research inside Sovix.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    blogContent: "",
  },
  {
    id: 6,
    category: "Research",
    date: "Mar 28, 2025",
    title:
      "Embedding drift in long-tail insurance vocabularies: a six-month study.",
    excerpt:
      "General-purpose embedding models degrade on niche terminology. We tracked cosine drift across six months of real policy language and share our mitigation playbook.",
    author: "Lena Hofmann",
    authorInitials: "LH",
    authorRole: "Research Engineer",
    authorBio:
      "Specialises in embedding models and semantic search. Joined Sovix from a computational linguistics PhD.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    blogContent: "",
  },
  {
    id: 7,
    category: "Engineering",
    date: "Mar 22, 2025",
    title:
      "Prompt caching at scale: infrastructure patterns that actually save money.",
    excerpt:
      "Caching isn't just a performance trick — it's a cost architecture decision. We share the patterns that cut our inference spend by 40% without sacrificing freshness.",
    author: "Tariq Hassan",
    authorInitials: "TH",
    authorRole: "Platform Engineer",
    authorBio:
      "Builds the pipes that LLMs flow through. Passionate about cost-efficient infrastructure at scale.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    blogContent: "",
  },
  {
    id: 8,
    category: "Compliance",
    date: "Mar 18, 2025",
    title:
      "Audit trails for AI decisions: what regulators actually want to see.",
    excerpt:
      "We sat in on three different regulatory reviews and took notes. The documentation expectations are surprisingly specific — and almost nobody is meeting them.",
    author: "Marcus Webb",
    authorInitials: "MW",
    authorRole: "Compliance Lead",
    authorBio:
      "Former Big-4 auditor. Spends his days translating AI behaviour into language regulators understand.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    blogContent: "",
  },
  {
    id: 9,
    category: "Product",
    date: "Mar 14, 2025",
    title: "Designing AI confidence scores that underwriters actually trust.",
    excerpt:
      "Showing a percentage means nothing if users don't understand its basis. We ran eight rounds of user testing to find the language and visual design that changed behavior.",
    author: "Sofia Reyes",
    authorInitials: "SR",
    authorRole: "Product Manager",
    authorBio:
      "Product lead for Sovix's underwriting suite. Obsessed with the gap between what users say and what they do.",
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80",
    blogContent: "",
  },
  {
    id: 10,
    category: "Industry",
    date: "Mar 10, 2025",
    title: "Why the best insurance AI teams are hiring philosophers.",
    excerpt:
      "The hardest problems in regulated AI aren't technical. We've started hiring for reasoning under uncertainty — and it's changing how our whole team thinks.",
    author: "Dr. James Okoro",
    authorInitials: "JO",
    authorRole: "Chief Scientist",
    authorBio:
      "NLP researcher from Cambridge. Published work on document reasoning in low-resource domains. Leads all model research inside Sovix.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    blogContent: "",
  },
  {
    id: 11,
    category: "Research",
    date: "Mar 6, 2025",
    title:
      "Fine-tuning versus retrieval: the real performance numbers on claims data.",
    excerpt:
      "Everyone has opinions. We ran the benchmarks. Fine-tuned models outperform RAG on structured claims but lose on edge-case policy interpretation. The nuances matter.",
    author: "Lena Hofmann",
    authorInitials: "LH",
    authorRole: "Research Engineer",
    authorBio:
      "Specialises in embedding models and semantic search. Joined Sovix from a computational linguistics PhD.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    blogContent: "",
  },
  {
    id: 12,
    category: "Engineering",
    date: "Mar 1, 2025",
    title:
      "Building observable LLM pipelines: what OpenTelemetry doesn't cover.",
    excerpt:
      "Standard observability tooling wasn't built for probabilistic outputs. We extended our stack with custom spans and a token-budget alerting system worth stealing.",
    author: "Tariq Hassan",
    authorInitials: "TH",
    authorRole: "Platform Engineer",
    authorBio:
      "Builds the pipes that LLMs flow through. Passionate about cost-efficient infrastructure at scale.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    blogContent: `
          <div class="flex gap-4 flex-col blog-content">     
            <h2>Why RAG Fails in Insurance</h2>
            <p>
            Retrieval-augmented generation (RAG) works well for general knowledge,
            but insurance documents are far more complex.
            </p>
          </div> 
        `,
  },
];

/**
 * Get a single blog by id
 */
export function getBlogById(id: number): Blog | undefined {
  return ALL_BLOGS.find((b) => b.id === id);
}

/**
 * Get related blogs:
 * 1. Same category (excluding current), up to `limit`
 * 2. If not enough, fill with other blogs
 */
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
