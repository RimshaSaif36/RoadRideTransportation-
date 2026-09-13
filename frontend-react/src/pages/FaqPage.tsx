import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { faqCategories, faqs } from "@/data/faqs";
import { Seo } from "@/components/Seo";

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Frequently asked questions about booking, cancellation, payment, drivers, airport pickup and safety with RoadRide Transportation."
        path="/faq"
      />

      <PageHero
        kicker="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before booking your ride. Can't find your answer? Message us on WhatsApp."
      />

      <section className="bg-ink py-12 sm:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-8 sm:gap-16">
            {faqCategories.map((category, i) => {
              const items = faqs.filter((f) => f.category === category);
              return (
                <Reveal key={category} delay={i * 0.05}>
                  <h2 className="font-display mb-4 text-2xl font-semibold text-gold">
                    {category}
                  </h2>
                  <Accordion items={items} />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
