import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { testimonials } from "@/data/testimonials";
import { Seo } from "@/components/Seo";

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Read what pilgrims from around the world say about their journeys with RoadRide Transportation."
        path="/testimonials"
      />

      <PageHero
        kicker="Testimonials"
        title="Trusted by Pilgrims Worldwide"
        description="Real reviews from travellers we've served across Umrah and Hajj seasons."
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 0.05}>
                <Card className="flex h-full flex-col gap-3 p-4 sm:gap-4 sm:p-6">
                  <Quote size={24} className="text-gold" />
                  <p className="text-muted flex-1 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <StarRating rating={t.rating} />
                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40 sm:h-12 sm:w-12">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-muted text-xs">
                        {t.country} &middot; {t.service}
                      </p>
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
