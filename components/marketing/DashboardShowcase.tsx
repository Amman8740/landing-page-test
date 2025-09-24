import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Props = {
  imageSrc: string;
  imageAlt?: string;
};

export function DashboardShowcase({ imageSrc, imageAlt = "Product dashboard" }: Props) {
  return (
    <div className="pb-16">
      <Container>
        <div className="text-center">
          <h2 className="text-[30px] sm:text-[36px] md:text-[44px] leading-[1.15] font-semibold tracking-tight">
            <span className="text-zinc-300">Lorem</span>{" "}
            <span className="text-white">ipsum dolor sit amet</span>
            <br />
            <span className="text-white">consectetur.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] text-zinc-300/85">
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
          </p>
        </div>
        <div className="relative mx-auto mt-8 w-full max-w-5xl">
          <div className="rounded-2xl border-none p-px shadow-[0_40px_120px_-20px_rgba(0,0,0,0.55)">
            <div className="overflow-hidden rounded-xl bg-zinc-900">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1240}
                height={760}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
