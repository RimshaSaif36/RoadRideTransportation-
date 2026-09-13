import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <section className="bg-ink py-12 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Our Services"
          title="Transportation Built Around Your Journey"
          description="From airport pickup to full Hajj and Umrah packages, holy site transfers and ziyarat tours, every service is designed around pilgrim comfort, safety and punctuality."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Card className="flex h-full flex-col">
                <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-72">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-3">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="mt-auto flex items-center justify-end pt-4">
                    <Button
                      href={`/booking?service=${service.slug}`}
                      variant="ghost"
                      size="sm"
                      className="!px-0"
                    >
                      Book
                      <ArrowUpRight size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
