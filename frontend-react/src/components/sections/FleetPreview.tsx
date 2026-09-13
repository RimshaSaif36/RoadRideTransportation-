import { Users, Briefcase, Snowflake, Wifi } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { fleet } from "@/data/fleet";

export function FleetPreview() {
  const preview = fleet;

  return (
    <section className="bg-charcoal py-12 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Our Fleet"
          title="A Vehicle for Every Group Size"
          description="From an economy sedan for solo travel to full-size buses for large Hajj groups — every vehicle is clean, air-conditioned and well maintained."
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {preview.map((vehicle, i) => (
            <Reveal key={vehicle.slug} delay={i * 0.05}>
              <Card className="flex h-full flex-col bg-ink">
                <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-72">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="absolute inset-0 h-full w-full object-contain py-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-base font-semibold text-white">
                    {vehicle.name}
                  </h3>
                  <div className="text-muted flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-gold" /> {vehicle.passengers}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} className="text-gold" /> {vehicle.luggage}
                    </span>
                    {vehicle.ac && (
                      <span className="flex items-center gap-1">
                        <Snowflake size={14} className="text-gold" /> AC
                      </span>
                    )}
                    {vehicle.wifi && (
                      <span className="flex items-center gap-1">
                        <Wifi size={14} className="text-gold" /> WiFi
                      </span>
                    )}
                  </div>
                  <Button
                    href={`/fleet/${vehicle.slug}`}
                    variant="outline"
                    size="sm"
                    className="mt-auto"
                  >
                    View Pricing
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/fleet" variant="ghost">
            Explore Full Fleet
          </Button>
        </div>
      </Container>
    </section>
  );
}
