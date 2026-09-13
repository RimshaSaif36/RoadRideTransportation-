import { Container } from "@/components/ui/Container";

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-charcoal py-12 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {kicker}
        </span>
        <h1 className="font-display text-2xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-muted max-w-2xl text-sm leading-relaxed sm:text-base">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
