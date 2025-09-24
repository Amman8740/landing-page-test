import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Feature = {
  icon: string;  
  label: string;
};

const features: Feature[] = [
  { icon: "/icons/Vector.png",   label: "Lorem Ipsum Dollar" }, 
  { icon: "/icons/cctv.png",     label: "Lorem Ipsum Dollar" }, 
  { icon: "/icons/fprint.png",   label: "Lorem Ipsum Dollar" }, 
  { icon: "/icons/verified.png", label: "Lorem Ipsum Dollar" }, 
  { icon: "/icons/lock.png",     label: "Lorem Ipsum Dollar" }, 
  { icon: "/icons/wall.png",     label: "Lorem Ipsum Dollar" }, 
];

export function SecurityFeatures() {
  return (
    <section className="relative isolate py-16 md:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
            {/* left text + lock */}
          <div className="relative max-w-lg">
            {/* spotlight */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute -z-10
                left-1/3 top-[56%] h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2
                [background:radial-gradient(60%_60%_at_50%_60%,rgba(255,255,255,0.22),rgba(255,255,255,0.10)_45%,transparent_80%)]
                blur-[24px]
              "
            />

            <h2 className="text-[40px] leading-[1.1] font-semibold">
              <span className="text-zinc-300">Lorem</span>{" "}
              <span className="text-white">Ipsum</span>
              <br />
              <span className="text-white">Dollar</span>
            </h2>

            <p className="mt-5 max-w-md text-zinc-300/85">
              Consequat netus consequat tortor vitae cursus.
              <br />
              Tristique leo consequat
                <br />
                Consequat netus consequat tortor vitae cursus.
            </p>

            <div className="relative mt-12 h-56 w-48 sm:h-60 sm:w-52">
              <Image
                src="/images/lock_front.png"
                alt="Security Lock"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* right side icons */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 md:auto-rows-[150px]">
            {/* row 1 */}
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />

            {/* row 2 */}
            <FeatureCard
              feature={features[2]}
              className="lg:col-span-2 lg:row-span-1"
            />
            <FeatureCard
              feature={features[3]}
              className="lg:col-span-1 lg:row-span-2 min-h-[320px]"
            />

            {/* row 3 */}
            <FeatureCard feature={features[4]} />
            <FeatureCard feature={features[5]} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({
  feature,
  className = "",
}: {
  feature: Feature;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-white/12 ring-1 ring-white/10",
        "bg-black/20 backdrop-blur-[2px]",
        "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]",
        "flex flex-col items-center justify-center text-center px-6 min-h-[150px]",
        className,
      ].join(" ")}
    >
      <Image
        src={feature.icon}
        alt={feature.label}
        width={40}
        height={40}
        className="mb-3 h-10 w-10"
      />
      <div className="text-sm font-medium text-white leading-tight">
        {feature.label}
      </div>
    </div>
  );
}
