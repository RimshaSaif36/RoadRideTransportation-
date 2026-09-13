import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

export function ContactCta() {
  return (
    <section className="bg-ink py-12 sm:py-24">
      <Container>
        <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-sm border border-gold/20 px-4 py-12 text-center sm:gap-6 sm:px-8 sm:py-16">
          <img
            src="/bg.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/55" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-display max-w-2xl text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              Ready to Book Your <span className="text-gold">Journey?</span>
            </h2>
            <p className="text-muted max-w-xl text-sm leading-relaxed sm:text-base">
              Reach out now for a fast quote, or book directly online in under two
              minutes. Our team responds around the clock.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:mt-4 sm:gap-4">
              <Button href="/booking" size="md" className="sm:size-lg md:size-lg">
                Book Now
              </Button>
              <Button href={siteConfig.whatsappHref} variant="outline" size="md" className="sm:size-lg md:size-lg">
                <WhatsAppIcon size={18} />
                WhatsApp Us
              </Button>
              <Button href="tel:+966530832361" variant="ghost" size="md" className="sm:size-lg md:size-lg">
                <Phone size={18} />
                +966 53 083 2361
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
