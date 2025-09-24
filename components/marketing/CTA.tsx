"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="relative py-10 sm:py-14">
      <Container>
        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-white/12 bg-zinc-900/50
            ring-1 ring-white/10 backdrop-blur-sm
            shadow-[0_30px_120px_-30px_rgba(0,0,0,0.6)]
          "
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]">
            <Image
              src="/images/Union.png"
              alt=""
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(140%_120%_at_50%_40%,transparent_50%,rgba(0,0,0,0.25))]"
          />

          <div className="mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-14 text-center">
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight">
              <span className="text-zinc-300">Ready</span>{" "}
              <span className="text-white">to get started</span>
              <span className="text-white">?</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-zinc-300/85">
              Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
              netus sollicitudin. In enim tortor sed libero velit lectus. Egestas
              facilisi neque a arcu vitae dignissim. Sit lobortis orci risus
              volutpat eu habitasse.
            </p>

            <div className="mt-6">
              <Link
                href="#"
                className="
                  inline-flex items-center justify-center rounded-full
                  px-5 py-2.5 text-[13px] font-medium text-zinc-100
                  bg-gradient-to-b bg-[#42225a] hover:bg-[#5a2d7a]
                  shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_10px_30px_-10px_rgba(168,85,247,0.45)]
                  ring-1 ring-white/10 hover:brightness-110 transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/50
                "
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
