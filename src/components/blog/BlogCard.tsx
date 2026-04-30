"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import JournalText from "@/assets/images/journal-text.svg";
import Image from "next/image";

const CATEGORIES = [
  "All",
  "Engineering",
  "Research",
  "Product",
  "Compliance",
  "Industry",
];

const ALL_BLOGS = [
  {
    id: 1,
    category: "Research",
    date: "Apr 14, 2025",
    title: "Why RAG fails in insurance — and what we built instead.",
    excerpt:
      "Retrieval-augmented generation works beautifully for general knowledge. It breaks in subtle, expensive ways when applied to insurance documents — cross-policy reasoning, dated endorsements, and conflicting clauses across a submission stack.",
    author: "Dr. James Okoro",
    authorInitials: "JO",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 6;

const categoryColors = {
  Research: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  Engineering: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  Compliance: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  Product: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  Industry: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
};

function CategoryBadge({
  category,
  small = false,
}: {
  category: string;
  small?: boolean;
}) {
  const color =
    categoryColors[category as keyof typeof categoryColors] ||
    "bg-slate-500/20 text-slate-400 border border-slate-500/30";
  return (
    <span
      className={`inline-block rounded-sm font-mono uppercase tracking-widest ${small ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2.5 py-1"} ${color}`}
    >
      {category}
    </span>
  );
}

function AuthorChip({ initials, name }: { initials: string; name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-slate-900 shrink-0">
        {initials}
      </div>
      <span className="text-[11px] uppercase tracking-widest text-slate-400 font-mono">
        {name}
      </span>
    </div>
  );
}

export default function BlogCard() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const featured = ALL_BLOGS.find((b) => b.featured);

  const filtered = ALL_BLOGS.filter((b) => {
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const matchSearch =
      search === "" ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

  return (
    <>
      <section className="py-12 md:py-[100px] flex flex-col w-full relative z-[1] grid-border relative z-1">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-10 lg:px-14">
            <div className="flex flex-col gap-4 md:gap-6 justify-start items-center lg:items-start ">
              <div className="inline-flex justify-start items-center gap-3">
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    Sovix Labs Journal
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-6 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="self-stretch justify-center text-slate-50 text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  Thinking out loud <br></br>on{" "}
                  <span className="text-green">Private AI.</span>
                </h1>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] w-full">
                  Engineering deep-dives, research notes, compliance guides, and
                  hard-won observations from building AI infrastructure for the
                  most regulated corners of the insurance industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex items-center lg:items-end gap-2.5 flex-col ">
                <div className="opacity-20 justify-end text-[#30cc94] font-bold text-[70px] leading-[30px] md:text-[100px] md:leading-[70px]">
                  {ALL_BLOGS.length}
                </div>
                <span className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Articles Published
                </span>
              </div>
              <div className="relative w-full search">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search Article"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={JournalText}
          alt="journal text"
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-none -z-1"
        />
      </section>

      {/* Category Tabs */}
      <div className="border-b border-t border-[#30CC94]/20 px-4">
        <div className="max-w-326.5  mx-auto flex gap-2 lg:gap-5 overflow-x-auto scrollbar-hide lg:px-4">
          {CATEGORIES.map((cat, index) => {
            const count =
              cat === "All"
                ? ALL_BLOGS.length
                : ALL_BLOGS.filter((b) => b.category === cat).length;

            const isLast = index === CATEGORIES.length - 1;

            return (
              <div key={cat} className="flex items-center gap-2 lg:gap-5">
                <button
                  onClick={() => handleCategory(cat)}
                  className={`mono text-xs lg:text-base px-4 py-4 whitespace-nowrap transition-colors border-b border-b-2 cursor-pointer hover:text-white  ${
                    activeCategory === cat 
                      ? "text-white border-green"
                        : " text-white/50 border-transparent"
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-2.5 text-xs rounded-sm rounded px-2  border  ${ 
                      activeCategory === cat
                        ? "bg-emerald-500/20 text-emerald-400 border-green"
                        : "bg-[#1A1D1D] text-white/50 border-[#1A1D1D]"
                    }`}
                  >
                    {count}
                  </span>
                </button>

                {!isLast && <div className="w-[1px] h-4 bg-white/20"></div>}
              </div> 
            );
          })}
        </div>
      </div>
   
      {/* Featured Article */}
      {featured &&
        (activeCategory === "All" || activeCategory === featured.category) &&
        search === "" && (
          <section className="pt-[40px] md:pt-[60px]">
            <div className="max-w-326.5 mx-auto px-4">
            <p className="flex gap-2 items-center text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] mb-4">
              Featured Article
              <div className="flex-1 h-[1px] bg-white/20"></div>
            </p>
            <div className="featured-card border border-[#0f2d32] rounded-sm overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-[42%] h-56 md:h-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
                />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <CategoryBadge category={featured.category} />
                    <span className="mono text-[10px] text-slate-500 uppercase tracking-wider">
                      {featured.date}
                    </span>
                    <span className="mono text-[10px] text-emerald-500/60 uppercase tracking-widest ml-auto">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-100 leading-snug mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#0f2d32]">
                  <AuthorChip
                    initials={featured.authorInitials}
                    name={featured.author}
                  />
                  <Link
                    href={`/blog/${featured.id}`}
                    className="read-link flex items-center gap-1.5 text-xs mono uppercase tracking-widest font-medium"
                  >
                    Read Article <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
            </div> 
          </section>
        )}

      {/* Blog List */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
            {search ? `Search Results` : `Latest Articles`}
          </p>
          <p className="mono text-[10px] text-slate-600">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {paginated.length === 0 ? (
          <div className="text-center py-20 text-slate-600">
            <p className="text-4xl mb-4">∅</p>
            <p className="mono text-xs uppercase tracking-widest">
              No articles found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0a1a1d]">
            {paginated.map((blog) => (
              <article
                key={blog.id}
                className="blog-card p-0 flex flex-col group"
              >
                <div className="overflow-hidden h-44 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1618] via-transparent to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <CategoryBadge category={blog.category} small />
                    <span className="mono text-[9px] text-slate-600 uppercase tracking-wider">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-100 leading-snug mb-3 group-hover:text-emerald-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#0f2428]">
                    <AuthorChip
                      initials={blog.authorInitials}
                      name={blog.author}
                    />
                    <Link
                      href={`/blog/${blog.id}`}
                      className="read-link flex items-center gap-1 text-[10px] mono uppercase tracking-widest font-medium"
                    >
                      Read <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="page-btn w-9 h-9 flex items-center justify-center rounded-sm border border-[#0f2d32] text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed mono text-xs"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`page-btn w-9 h-9 flex items-center justify-center rounded-sm border border-[#0f2d32] mono text-xs text-slate-400 ${currentPage === page ? "page-active border-emerald-500" : ""}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="page-btn w-9 h-9 flex items-center justify-center rounded-sm border border-[#0f2d32] text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed mono text-xs"
            >
              →
            </button>
          </div>
        )}
      </section>
    </>
  );
}
