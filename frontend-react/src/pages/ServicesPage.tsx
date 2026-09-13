import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { services } from "@/data/services";
import { Seo } from "@/components/Seo";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore RoadRide Transportation's full range of Umrah and Hajj transport services — airport transfers, city transport, VIP, family, group and corporate options."
        path="/services"
      />

      <PageHero
        kicker="Our Services"
        title="Every Journey, Covered"
        description="Whether you're travelling solo, with family, or coordinating a full Hajj group, we have a service built for it."
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.05}>
                <Card className="flex h-full flex-col">
                  <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72 lg:h-80">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-6">
                    <h2 className="font-display text-lg font-semibold text-white">
                      {service.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-muted flex items-center gap-2 text-xs"
                        >
                          <Check size={14} className="shrink-0 text-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-end border-t border-white/10 pt-4">
                      <Button
                        href={`/booking?service=${service.slug}`}
                        variant="outline"
                        size="sm"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
