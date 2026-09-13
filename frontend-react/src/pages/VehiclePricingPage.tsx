import { Navigate, useParams } from "react-router-dom";
import { Users, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { fleet } from "@/data/fleet";
import { getVehicleRoutes, allRoutes } from "@/data/vehiclePricing";
import { siteConfig } from "@/lib/site-config";
import { Seo } from "@/components/Seo";

export default function VehiclePricingPage() {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = fleet.find((v) => v.slug === slug);

  if (!vehicle) {
    return <Navigate to="/fleet" replace />;
  }

  return (
    <>
      <Seo
        title={`${vehicle.name} Pricing`}
        description={`Route pricing for the ${vehicle.name} — ${vehicle.description}`}
        path={`/fleet/${vehicle.slug}`}
      />

      <PageHero
        kicker="Pricing"
        title={`${vehicle.name} (${vehicle.passengers} Seats & ${vehicle.luggage} Luggage)`}
        description={vehicle.description}
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="flex flex-col gap-6">
              <div className="relative h-56 w-full overflow-hidden rounded-sm border border-white/10 sm:h-64 md:h-80 lg:h-96">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="text-muted flex items-center gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <Users size={18} className="text-gold" />
                  {vehicle.passengers} Passengers
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase size={18} className="text-gold" />
                  {vehicle.luggage} Luggage
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Looking for a reliable {vehicle.name} for your Umrah or Hajj journey?
                RoadRide Transportation offers fixed, transparent pricing on every route
                below — book online or confirm instantly on WhatsApp.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={`/booking?vehicle=${vehicle.slug}`} size="lg">
                  Book This Vehicle
                </Button>
                <Button href={siteConfig.whatsappHref} variant="outline" size="lg">
                  <WhatsAppIcon size={18} />
                  Instant Booking
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm border border-white/10">
              {(() => {
                const vehiclePrices = getVehicleRoutes(vehicle.slug);

                return allRoutes.map((route, i) => {
                  const price = vehiclePrices?.[route.slug] || 0;

                  return (
                    <div
                      key={route.slug}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i % 2 === 0 ? "bg-charcoal" : "bg-ink"
                      }`}
                    >
                      <span className="text-sm font-semibold text-white">
                        {route.name}
                      </span>
                      <span className="text-sm font-semibold text-gold">
                        {price} SAR
                      </span>
                    </div>
                  );
                });
              })()}
              <p className="text-muted bg-charcoal px-6 py-4 text-xs leading-relaxed">
                Prices shown are vehicle-specific fares for Year 1447 (2026) — your driver will confirm the
                exact fare on WhatsApp before your trip begins. <br /><br />
                <strong>Note:</strong> Arrival from Hajj terminal adds 90 SAR parking charges.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
