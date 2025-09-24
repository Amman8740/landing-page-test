import { Container } from "@/components/ui/Container";

export function Supporters() {
  return (
    <div className="py-12 sm:py-14">
      <Container>
        <h3 className="text-center text-[16px] font-semibold text-zinc-200">
          Our Supporters
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="text-[14px] text-zinc-300/85">
              Supporter–logo
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
