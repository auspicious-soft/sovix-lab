"use client";

import Link from "next/link";
import { use, useEffect, useRef, useState, useMemo } from "react";
import { getBlogById, getRelatedBlogs } from "@/data/blogData";
import JournalText from "@/assets/images/journal-text.svg";
import Image from "next/image";

interface BlogSection {
  id: string;
  title: string;
  content: string;
}

function hasSections(blog: unknown): blog is { sections: BlogSection[] } {
  return (
    typeof blog === "object" &&
    blog !== null &&
    "sections" in blog &&
    Array.isArray((blog as Record<string, unknown>).sections)
  );
}

const categoryColors: Record<string, string> = {
  Research: "bg-[#0C2E30] text-[#30CC94] border border-[#30CC94]",
  Engineering: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  Compliance: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  Product: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  Industry: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
};

function CategoryBadge({ category }: { category: string }) {
  const color =
    categoryColors[category] ??
    "bg-slate-500/20 text-slate-400 border border-slate-500/30";
  return (
    <span
      className={`inline-block rounded-sm uppercase tracking-widest text-[11px] px-2.5 py-1 font-jetbrainsmono ${color}`}
    >
      {category}
    </span>
  );
}

interface Props {
  params: Promise<{ id: string }>;
}

export default function SingleBlogPage({ params }: Props) {
  const { id } = use(params);
  const blogId = Number(id);

  // ── Data from shared source ──────────────────────────────────────────────
  const blog = getBlogById(blogId);
  const relatedArticles = getRelatedBlogs(blogId, 3);

  // ── Derive sections list from blog data (for TOC) ────────────────────────
  const sections = useMemo<BlogSection[]>(
    () => (blog && hasSections(blog) ? blog.sections : []),
    [blog],
  );

  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [readProgress, setReadProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sections.length === 0) return;

    const isActiveIdValid = sections.some((section) => section.id === activeId);
    if (!isActiveIdValid) {
      setActiveId(sections[0].id);
    }
  }, [activeId, sections]);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setReadProgress(total > 0 ? Math.round((scrolled / total) * 100) : 0);

      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 120) current = section.id;
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // ── 404 fallback ──────────────────────────────────────────────────────────
  if (!blog) {
    return (
      <div className="min-h-screen  text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4 text-white/20">∅</p>
          <p className="text-white/50 uppercase tracking-widest text-sm font-jetbrainsmono mb-6">
            Article not found
          </p>
          <Link
            href="/blog"
            className="text-green text-xs font-jetbrainsmono uppercase tracking-widest hover:underline"
          >
            ← Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Top nav ── */}
      <div className="sticky top-0 z-50 bg-[#020617] shadow-[0px_4px_30px_0px_rgba(0,229,160,0.20)] py-2 lg:py-3.5">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-wrap gap-4">
          <div className="flex items-center gap-3 text-xs lg:text-sm">
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-xs px-3.5 py-1.5 bg-[#0c2e30] rounded-sm text-green transition-colors font-jetbrainsmono tracking-[1px]"
            >
              ← BLOGS
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-white/50">Sovix Labs</span>
            <span className="text-white/20">/</span>
            <span className="text-white/50">Blogs</span>
            <span className="text-white/20">/</span>
            <span className="text-white/80">{blog.category}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-xs font-jetbrainsmono">
              {readProgress}%
            </span>
            <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-green rounded-full transition-all duration-150"
                style={{ width: `${readProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-[100px] flex flex-col w-full relative z-[1] border-b border-[#30CC94]/20">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-1 gap-10 lg:px-14">
            <div className="flex flex-col gap-4 md:gap-6 justify-start items-center lg:items-start  max-w-2xl w-full">
              <div className="flex flex-col gap-4 md:gap-6 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="self-stretch justify-center text-slate-50 text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  {blog.title}
                </h1>
                <p className="text-white/80 text-sm md:text-base font-normal leading-[26px] w-full">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-slate-800 lg:mt-4 w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0C2E30] border border-[#30CC94] flex items-center justify-center text-sm font-bold font-jetbrainsmono text-[#30CC94] tracking-[1px]">
                      {blog.authorInitials}
                    </div>
                    <span className="text-[11px] uppercase tracking-[1px] text-[#30CC94] font-jetbrainsmono">
                      {blog.author}
                    </span>
                  </div>
                  <span className="text-white/40 text-[11px] font-jetbrainsmono uppercase tracking-[1px]">
                    {blog.date}
                  </span>
                </div>
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

      <div className="max-w-[1300px] mx-auto px-4 lg:px-14 py-10 md:py-16 flex gap-12 xl:gap-16 items-start">
        {/* LEFT: Article content — rendered entirely from blog.sections */}
        <article ref={contentRef} className="flex-1 min-w-0">
          {blog.date}
        </article>

        {/* RIGHT: Sticky sidebar */}
        <aside className="hidden lg:flex flex-col gap-5 w-[220px] xl:w-[240px] shrink-0 sticky top-20">
          {/* TOC — built from blog.sections */}
          {sections.length > 0 && (
            <div className="bg-[#051610]/60 rounded-lg outline outline-1 outline-[#00e5a0]/20 backdrop-blur-[3px] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#1E293B]">
                <span className="text-[10px] font-jetbrainsmono uppercase tracking-[2px] text-white/40">
                  In This Article
                </span>
              </div>
              <nav className="flex flex-col">
                {sections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left px-4 py-2.5 text-[12px] leading-[1.5] transition-colors cursor-pointer border-l-2 ${
                        isActive
                          ? "bg-[#0C2E30] text-[#30CC94] border-[#30CC94]"
                          : "text-white/50 border-transparent hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Written by */}
          <div className="bg-[#051610]/60 rounded-lg  outline outline-1 outline-[#00e5a0]/20 backdrop-blur-[3px] overflow-hidden">
            <div className="px-4 py-3 border-b border-green/20">
              <span className="text-[10px] font-jetbrainsmono uppercase tracking-[1px] text-white/40">
                Written By
              </span>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0C2E30] border border-green flex items-center justify-center text-[11px] font-bold font-jetbrainsmono text-[#30CC94] tracking-[1px] shrink-0">
                  {blog.authorInitials}
                </div>
                <div>
                  <p className="text-xs font-jetbrainsmono uppercase tracking-[1px] text-white leading-none mb-1">
                    {blog.author}
                  </p>
                  <p className="text-xs text-green">
                    {blog.authorRole ?? "Author"}
                  </p>
                </div>
              </div>
              {blog.authorBio && (
                <p className="text-[#d9dbe0] text-sm font-normal">
                  {blog.authorBio}
                </p>
              )}
            </div>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="bg-[#051610]/60 rounded-lg outline outline-1 outline-[#00e5a0]/20 backdrop-blur-[3px] overflow-hidden">
              <div className="px-4 py-3 border-b border-green/20">
                <span className="text-[10px] font-jetbrainsmono uppercase tracking-[1px] text-white/40">
                  Related Articles
                </span>
              </div>
              <div className="flex flex-col divide-y divide-[#1E293B]">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.id}`}
                    className="p-4 flex flex-col gap-2 hover:bg-white/5 transition-colors group items-start"
                  >
                    <CategoryBadge category={article.category} />
                    <p className="text-white/50 text-sm font-normal group-hover:text-white transition-colors leading-5">
                      {article.title}
                    </p>
                    <p className="text-white/50 text-[10px] font-jetbrainsmono uppercase tracking-[1px]">
                      {article.author}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
