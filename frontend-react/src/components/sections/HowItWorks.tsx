import { CarFront, MapPin, PlaneLanding, Route } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Book Online",
    description: "Choose your route, vehicle and pickup time in minutes — online or on WhatsApp.",
  },
  {
    number: "02",
    icon: PlaneLanding,
    title: "Share Flight Details",
    description: "We track your flight and adjust your pickup time automatically, no matter when you land.",
  },
  {
    number: "03",
    icon: CarFront,
    title: "Meet Your Driver",
    description: "Your driver is waiting at arrivals with a name board, ready to help with your luggage.",
  },
  {
    number: "04",
    icon: Route,
    title: "Travel in Comfort",
    description: "Enjoy a private, air-conditioned ride straight to Makkah, Madinah or your hotel door.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-charcoal py-12 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            How It Works
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Book Your Ride in <span className="text-gold">4 Simple Steps</span>
          </h2>
          <p className="text-muted max-w-2xl text-base leading-relaxed">
            From booking to drop-off, we've made getting to your destination as smooth as
            the ride itself.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="font-display text-sm font-semibold tracking-widest text-gold/70">
                  {step.number}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <step.icon size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
