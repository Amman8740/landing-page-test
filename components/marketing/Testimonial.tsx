"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { Container } from "@/components/ui/Container";

type Testimonial = {
  id: string | number;
  name: string;
  avatar: string;    
  role?: string;
  quote: string;
};

type Props = {
  title?: string;
  items?: Testimonial[];
  className?: string;
};

export function Testimonials({
  title = "Tons of others love using PentAI.",
  items,
  className = "",
}: Props) {
// eslint-disable-next-line react-hooks/exhaustive-deps
const safeItems = items ?? [];

const [rowA, rowB] = useMemo(() => {
  const a: Testimonial[] = [];
  const b: Testimonial[] = [];
  safeItems.forEach((t, i) => (i % 2 === 0 ? a : b).push(t));
  return [a, b];
}, [safeItems]);

  return (
    <section className={`relative isolate py-14 sm:py-18 ${className}`}>
      <Container>
        <h2 className="text-center text-[28px] sm:text-[34px] md:text-[40px] font-semibold tracking-tight">
          {title}
        </h2>

        <div className="mt-8 space-y-8">
          <ScrollRow items={rowA} ariaLabel="Testimonial row A" />
          <ScrollRow items={rowB} ariaLabel="Testimonial row B" reverse />
        </div>
      </Container>
    </section>
  );
}

function ScrollRow({
  items,
  reverse = false,
  ariaLabel,
}: {
  items: Testimonial[];
  reverse?: boolean;
  ariaLabel: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const nudge = (dir: "prev" | "next") => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.min(480, el.clientWidth * 0.6);
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#0b0c10] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#0b0c10] to-transparent z-10" />
        {/* Buttons */}
      <div className="absolute left-2 top-1/2 z-20 -translate-y-1/2 hidden sm:flex gap-2">
        <button
          onClick={() => nudge("prev")}
          className="rounded-full border border-white/10 bg-zinc-900/60 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-800/80"
          aria-label="Scroll previous testimonials"
        >
          ←
        </button>
        <button
          onClick={() => nudge("next")}
          className="rounded-full border border-white/10 bg-zinc-900/60 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-800/80"
          aria-label="Scroll next testimonials"
        >
          →
        </button>
      </div>
      <div
        ref={ref}
        role="region"
        aria-label={ariaLabel}
        className={[
          "flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory",
          "px-4 sm:px-8",
          reverse ? "flex-row-reverse" : "",
        ].join(" ")}
      >
        {items.map((t) => (
          <article
            key={t.id}
            className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-2xl border border-white/10 bg-zinc-900/55 p-4 sm:p-5 backdrop-blur-sm ring-1 ring-white/5 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.7)]"
          >
            <header className="mb-3 flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div className="min-w-0">
                <div className="truncate text-[14px] font-semibold text-white">
                  {t.name}
                </div>
                {t.role && (
                  <div className="truncate text-[12px] text-zinc-400">{t.role}</div>
                )}
              </div>
            </header>

            <p className="text-[13px] leading-relaxed text-zinc-300/90">
              {t.quote}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
