"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import JournalText from "@/assets/images/journal-text.svg";
import Image from "next/image";
import { ALL_BLOGS } from "@/data/blogData";

const CATEGORIES = [
  "All",
  "Engineering",
  "Research",
  "Product",
  "Compliance",
  "Industry",
];

const ITEMS_PER_PAGE = 6;

const categoryColors: Record<string, string> = {
  Research: "bg-[#0C2E30] text-green border-green border ",
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
    categoryColors[category] ||
    "bg-slate-500/20 text-slate-400 border border-slate-500/30 ";
  return (
    <span
      className={`inline-block rounded-sm uppercase tracking-widest ${small ? "text-[12px] px-2.5 py-1 font-jetbrainsmono " : "text-[12px] px-2.5 py-1 font-jetbrainsmono "} ${color}`}
    >
      {category}
    </span>
  );
}

function AuthorChip({ initials, name }: { initials: string; name: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#0C2E30] text-green border-green border flex items-center tracking-[1px] justify-center text-sm font-bold  shrink-0 font-jetbrainsmono ">
        {initials}
      </div>
      <span className="text-[12px] uppercase tracking-[1px] text-green font-jetbrainsmono  ">
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
      <section className="py-12 md:py-[100px] flex flex-col w-full relative z-[1] grid-border">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-10 lg:px-14">
            <div className="flex flex-col gap-4 md:gap-6 justify-start items-center lg:items-start ">
              <div className="inline-flex justify-start items-center gap-3">
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono  uppercase tracking-[1px]">
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
                <span className="text-green text-xs font-normal font-jetbrainsmono  uppercase tracking-[1px]">
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
                  className={` text-xs lg:text-base px-4 py-4 whitespace-nowrap transition-colors border-b border-b-2 cursor-pointer hover:text-white  ${
                    activeCategory === cat
                      ? "text-white border-green"
                      : " text-white/50 border-transparent"
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-2.5 text-xs rounded-sm rounded px-2  border  ${
                      activeCategory === cat
                        ? "bg-[#0C2E30] text-green border-green"
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
          <section className="pt-[40px] md:pt-[60px] ">
            <div className="max-w-326.5 mx-auto px-4">
              <div className="flex gap-2 items-center text-green text-xs font-normal font-jetbrainsmono  uppercase tracking-[1px] mb-4">
                Featured Article
                <div className="flex-1 h-[1px] bg-green/20"></div>
              </div>
              <div className="featured-card bg-[#0F172A]/60 border border-[#1E293B] p-4 md:p-5 rounded-xl overflow-hidden items-center gap-4 grid md:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full aspect-[1/0.7] object-cover rounded-xl"
                  />
                </div>
                <div className="lg:p-8 flex flex-col">
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      <CategoryBadge category={featured.category} />
                      <span className="text-white/40 text-[12px] tracking-[1px] font-normal font-jetbrainsmono  uppercase">
                        {featured.date}
                      </span>
                      <span className="text-white/40 text-[12px] tracking-[1px] font-normal font-jetbrainsmono  uppercase ml-auto">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-[#FFFFFF]/80 text-sm md:text-base font-normal leading-[26px] w-full line-clamp-5 flex-1">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <AuthorChip
                      initials={featured.authorInitials}
                      name={featured.author}
                    />
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="read-link flex items-center gap-1.5 text-[12px] text-green"
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
      <section className="py-10">
        <div className="max-w-326.5 mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center text-green text-xs font-normal font-jetbrainsmono  uppercase tracking-[1px] mb-4 w-full">
              {search ? `Search Results` : `Latest Articles`}
              <div className="flex-1 h-[1px] bg-green/20"></div>
            </div>
          </div>

          {paginated.length === 0 ? (
            <div className="text-center py-20 text-white/50">
              <p className="text-4xl mb-4">∅</p>
              <p className=" text-base uppercase tracking-widest">
                No articles found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {paginated.map((blog) => (
                <article
                  key={blog.id}
                  className="blog-card p-0 flex flex-col group bg-[#0F172A]/60 border border-[#1E293B] rounded-xl overflow-hidden"
                >
                  <div className="overflow-hidden h-60 relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 lg:mt-4">
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <CategoryBadge category={blog.category} small />
                      <span className="text-white/40 text-[12px] tracking-[1px] font-normal font-jetbrainsmono  uppercase">
                        {blog.date}
                      </span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-white leading-snug mb-4 tracking-[-1px]">
                      {blog.title}
                    </h3>
                    <p className="text-[#FFFFFF]/80 text-sm font-normal leading-[26px] w-full line-clamp-3 flex-1 pt">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-6">
                      <AuthorChip
                        initials={blog.authorInitials}
                        name={blog.author}
                      />
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="read-link flex items-center gap-1.5 text-[12px] text-green"
                      >
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 md:gap2 mt-10 mb-5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="page-btn w-10 h-10 flex items-center justify-center rounded-full bg-[#0C2E30]/50 border border-[#30CC94]/50  text-[#34D399]/50 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed  font-jetbrainsmono  text-xs md:base"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`page-btn w-10 h-10 flex items-center justify-center rounded-full bg-[#0C2E30]/50 border border-[#30CC94]/50  font-jetbrainsmono  text-xs md:base text-[#34D399]/50 cursor-pointer ${currentPage === page ? "page-active bg-[#0C2E30] text-green border-green" : ""}`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="page-btn w-10 h-10 flex items-center justify-center rounded-full bg-[#0C2E30]/50 border border-[#30CC94]/50  text-[#34D399]/50 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed font-jetbrainsmono  text-xs md:base"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
