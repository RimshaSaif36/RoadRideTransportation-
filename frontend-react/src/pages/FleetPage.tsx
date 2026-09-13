import { Briefcase, Snowflake, Users, Wifi } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { fleet } from "@/data/fleet";
import { Seo } from "@/components/Seo";

export default function FleetPage() {
  return (
    <>
      <Seo
        title="Our Fleet"
        description="Browse RoadRide Transportation's fleet — Economy, SUV, Hiace, GMC, Luxury Sedan, Coaster and Bus options for every group size."
        path="/fleet"
      />

      <PageHero
        kicker="Our Fleet"
        title="A Vehicle for Every Group"
        description="Every vehicle in our fleet is clean, air-conditioned, and regularly inspected — choose the one that fits your group and comfort level."
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {fleet.map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={(i % 3) * 0.05}>
                <Card className="flex h-full flex-col">
                  <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-80">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="absolute inset-0 h-full w-full object-contain py-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute left-2 top-2 bg-ink/80 text-xs sm:left-4 sm:top-4">
                      {vehicle.category}
                    </Badge>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h2 className="font-display text-lg font-semibold text-white">
                      {vehicle.name}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">
                      {vehicle.description}
                    </p>
                    <div className="text-muted flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-xs">
                      <span className="flex items-center gap-1.5">
                        <Users size={15} className="text-gold" />
                        {vehicle.passengers} Passengers
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={15} className="text-gold" />
                        {vehicle.luggage} Bags
                      </span>
                      {vehicle.ac && (
                        <span className="flex items-center gap-1.5">
                          <Snowflake size={15} className="text-gold" />
                          A/C
                        </span>
                      )}
                      {vehicle.wifi && (
                        <span className="flex items-center gap-1.5">
                          <Wifi size={15} className="text-gold" />
                          WiFi
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
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
