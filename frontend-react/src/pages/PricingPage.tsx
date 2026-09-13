import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { pricingPackages } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { Seo } from "@/components/Seo";

export default function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Tailored transportation packages from RoadRide Transportation — Economy, Business, VIP and Luxury options for every journey."
        path="/pricing"
      />

      <PageHero
        kicker="Pricing"
        title="Packages for Every Journey"
        description="Choose the package that suits your journey and contact us for a tailored quote."
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {pricingPackages.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 0.05}>
                <div
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-sm border p-4 sm:gap-6 sm:p-6 lg:p-8",
                    pkg.highlighted
                      ? "border-gold bg-charcoal shadow-[0_0_40px_-15px_rgba(212,175,55,0.5)]"
                      : "border-white/10 bg-charcoal",
                  )}
                >
                  {pkg.highlighted && (
                    <span className="w-fit rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {pkg.name}
                    </h2>
                    <p className="text-muted mt-1 text-sm">{pkg.tagline}</p>
                  </div>
                  <ul className="flex flex-1 flex-col gap-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-muted flex items-start gap-2 text-sm"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={`/booking?package=${pkg.slug}`}
                    variant={pkg.highlighted ? "solid" : "outline"}
                  >
                    Choose {pkg.name}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
