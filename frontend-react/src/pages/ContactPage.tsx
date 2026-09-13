import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { Seo } from "@/components/Seo";

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: siteConfig.whatsappHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.address,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with RoadRide Transportation — call, WhatsApp, email, or visit our office in Jeddah, Saudi Arabia."
        path="/contact"
      />

      <PageHero
        kicker="Contact"
        title="We're Here to Help"
        description="Reach us any way you like — our team responds around the clock."
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Content = (
                <div className="flex h-full flex-col items-center gap-3 rounded-sm border border-white/10 bg-charcoal p-4 text-center transition-colors hover:border-gold/50 sm:p-6">
                  <card.icon size={24} className="text-gold" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    {card.label}
                  </p>
                  <p className="text-sm text-white">{card.value}</p>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {Content}
                </a>
              ) : (
                <div key={card.label}>{Content}</div>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-10">
            <ContactForm />
            <div className="overflow-hidden rounded-sm border border-white/10">
              <iframe
                title="RoadRide Transportation location"
                src={siteConfig.mapsEmbedSrc}
                className="h-full min-h-[420px] w-full grayscale invert-[92%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
