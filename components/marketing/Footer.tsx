"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-6">
      <div className="h-px w-full bg-white/8" />

      <Container className="py-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
          <div className="space-y-3">
            <div className="h-8 w-auto">
              <Image
                src="/Logo.png"
                alt="PentAi Logo"
                width={80}
                height={20}
                priority
                className="object-contain"
              />
            </div>

            <p className="text-[12px] text-zinc-400">
              Realised by <span className="tracking-wide">A NEW WEB ORDER_</span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex items-center gap-4 text-zinc-300">
              <Link
                href="#"
                aria-label="Facebook"
                className="rounded-md p-2 hover:bg-white/5 transition"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="rounded-md p-2 hover:bg-white/5 transition"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter/X"
                className="rounded-md p-2 hover:bg-white/5 transition"
              >
                <Twitter size={16} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="rounded-md p-2 hover:bg-white/5 transition"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="rounded-md p-2 hover:bg-white/5 transition"
              >
                <Github size={16} />
              </Link>
            </div>

            <div className="flex items-center gap-6 text-[12px] text-zinc-400">
              <Link href="#" className="hover:text-zinc-200 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-zinc-200 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
