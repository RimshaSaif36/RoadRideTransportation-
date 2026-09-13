import { BadgeCheck, Clock, ShieldCheck, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: UserCheck,
    title: "Professional Drivers",
    description:
      "Licensed, background-checked drivers trained specifically for pilgrim routes and etiquette.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our team is reachable around the clock on WhatsApp for bookings, changes, and emergencies.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Company",
    description:
      "Fully registered and licensed to operate throughout Makkah, Madinah and Jeddah.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Insured, regularly inspected vehicles with a strict safety standard on every trip.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-12 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Why Choose Us"
          title="Trusted by Pilgrims From Around the World"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.05}>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <reason.icon size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
