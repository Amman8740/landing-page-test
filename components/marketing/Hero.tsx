import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0b0c10]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(168,85,247,0.18),rgba(11,12,16,0))]" />

      <Container className="pt-20 pb-24 text-center">
        <h1 className="mx-auto max-w-4xl text-[34px] sm:text-[44px] md:text-[56px] leading-[1.1] font-semibold tracking-tight">
          <span className="text-zinc-300">Lorem</span>{" "}
          <span className="text-white">ipsum dolor sit amet</span>
          <br />
          <span className="text-white">consectetur</span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-6 text-zinc-300/80">
          Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est
          vivamus mauris fames et. Sed lacus purus in tellus.
        </p>

        <div className="mt-6 flex justify-center">
          <button
            className="rounded-full bg-white/90 px-6 py-2 text-[13px] font-medium text-zinc-800 shadow-[0_1px_0_0_rgba(0,0,0,0.15),0_10px_30px_rgba(255,255,255,0.08)] ring-1 ring-black/5 hover:bg-white"
          >
            Book a demo
          </button>
        </div>
      </Container>
      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 -z-[1] h-[420px] w-[900px] -translate-x-1/2 rounded-[999px] bg-fuchsia-700/25 blur-[120px]" />
    </section>
  );
}
