import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";

export function AuthCard({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <section className="bg-ink py-24">
      <Container className="max-w-md">
        <div className="rounded-sm border border-white/10 bg-charcoal p-8 sm:p-10">
          <Link to="/" className="mb-8 flex justify-center">
            <img
              src="/logo-nav.png"
              alt="RoadRide Transportation"
              width={1113}
              height={274}
              className="h-9 w-auto"
            />
          </Link>
          <h1 className="font-display text-center text-2xl font-semibold text-white">
            {title}
          </h1>
          <p className="text-muted mt-2 text-center text-sm">{description}</p>

          <div className="mt-8">{children}</div>

          <div className="text-muted mt-8 text-center text-sm">{footer}</div>
        </div>
      </Container>
    </section>
  );
}
