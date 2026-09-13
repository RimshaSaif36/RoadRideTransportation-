import { Compass, Target, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCta } from "@/components/sections/ContactCta";
import { Seo } from "@/components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about RoadRide Transportation — a licensed, professional taxi and transport company serving Umrah and Hajj pilgrims across Saudi Arabia."
        path="/about"
      />

      <PageHero
        kicker="About Us"
        title="Serving Pilgrims With Care Since Day One"
        description="RoadRide Transportation was founded to solve a simple problem: pilgrims deserve transport they can trust, at a price they can trust."
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-6 sm:gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-48 w-full overflow-hidden rounded-sm sm:h-64 md:h-80 lg:h-[420px]">
              <img
                src="/service4.jpg"
                alt="RoadRide Transportation driver and vehicle"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              kicker="Our Story"
              title="Built by People Who Know the Journey"
              align="left"
            />
            <p className="text-muted mt-6 text-base leading-relaxed">
              RoadRide Transportation started with drivers who had spent years
              shuttling pilgrims between Jeddah, Makkah and Madinah and saw the
              same problems again and again — unclear pricing, unreliable pickup
              times, and vehicles that weren&apos;t maintained for long hot
              journeys.
            </p>
            <p className="text-muted mt-4 text-base leading-relaxed">
              Today we operate a licensed fleet with trained drivers, fixed
              transparent pricing, and 24/7 WhatsApp support — built specifically
              around the needs of Umrah and Hajj travellers, not adapted from a
              generic taxi service.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-charcoal py-24">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-sm border border-white/10 bg-ink p-8">
              <Compass className="text-gold" size={28} />
              <h3 className="font-display text-xl font-semibold text-white">
                Our Mission
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                To make every pilgrim&apos;s journey through Saudi Arabia safer,
                more comfortable and more predictable — one trip at a time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4 rounded-sm border border-white/10 bg-ink p-8">
              <Target className="text-gold" size={28} />
              <h3 className="font-display text-xl font-semibold text-white">
                Our Vision
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                To become the most trusted name in pilgrim transportation across
                the Kingdom, known for reliability as much as for luxury.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col gap-4 rounded-sm border border-white/10 bg-ink p-8">
              <Heart className="text-gold" size={28} />
              <h3 className="font-display text-xl font-semibold text-white">
                Our Values
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Respect, punctuality and honesty — with every pilgrim treated as
                a guest, not just a passenger.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <WhyChooseUs />
      <ContactCta />
    </>
  );
}
