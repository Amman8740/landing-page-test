"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export type Feature = {
  id: string | number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Props = {
  heading?: string;
  features: Feature[];
  defaultImageSrc: string;
  defaultImageAlt?: string;
  className?: string;
};

export function FeatureBulletsShowcase({
  heading = "Lorem ipsum dolor",
  features,
  defaultImageSrc,
  defaultImageAlt = "Product screenshot",
  className = "",
}: Props) {
  const [active, setActive] = useState(features[0]?.id ?? 0);
  const activeFeature = features.find(f => f.id === active) ?? features[0];

  return (
    <section className={`relative isolate py-12 sm:py-16 ${className}`}>
      <Container>
        <h2 className="text-center text-[32px] sm:text-[40px] font-semibold tracking-tight text-white">
          {heading}
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* eft feature list */}
          <div className="mx-auto w-full max-w-xl">
            <ul className="flex flex-col gap-4">
              {features.map((f, idx) => {
                const isActive = f.id === active;
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      onClick={() => setActive(f.id)}
                      className={[
                        "group w-full rounded-xl border px-4 py-4 text-left transition",
                        "bg-zinc-900/50 backdrop-blur-sm shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)]",
                        isActive
                          ? "border-fuchsia-500/40 ring-1 ring-fuchsia-400/30 shadow-[0_0_0_1px_rgba(217,70,239,0.25),0_10px_40px_-10px_rgba(217,70,239,0.25)]"
                          : "border-white/10 hover:border-white/20",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="text-[14px] font-semibold text-white">
                        {f.title || `Feature ${idx + 1}`}
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-zinc-300/85">
                        {f.description}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* right screenshot */}
          <div className="mx-auto w-full max-w-2xl">
            <div className="rounded-2xl border border-white/12 bg-zinc-900/60 p-2 ring-1 ring-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.55)]">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-zinc-800">
                <Image
                  src={activeFeature?.imageSrc ?? defaultImageSrc}
                  alt={activeFeature?.imageAlt ?? defaultImageAlt}
                  fill
                  priority
                  className="object-fill object-center"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_50%,rgba(0,0,0,0.35))]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
