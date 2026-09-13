import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faqs";

export function FaqPreview() {
  const preview = faqs.slice(0, 5);

  return (
    <section className="bg-charcoal py-12 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          kicker="FAQ"
          title="Common Questions"
          description="Everything you need to know before booking your ride."
        />

        <Accordion items={preview} className="mt-12" />

        <div className="mt-12 flex justify-center">
          <Button href="/faq" variant="outline">
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
