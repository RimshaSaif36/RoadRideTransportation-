import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { fleet } from "@/data/fleet";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const heroImages = fleet.map((vehicle) => ({
  src: vehicle.image,
  alt: vehicle.name,
}));

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background Glow — kept on the left, behind the text */}
      <div className="absolute -left-32 top-20 hidden h-130 w-130 rounded-full bg-gold/10 blur-[120px] sm:block" />
      <div className="absolute -left-40 bottom-0 hidden h-[350px] w-[350px] rounded-full bg-gold/5 blur-[100px] sm:block" />

      <Container className="relative z-10 grid min-h-[70vh] items-center gap-6 py-8 sm:gap-10 sm:py-12 lg:min-h-[82vh] lg:grid-cols-[1fr_1.3fr]">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.28em] text-gold">
            <ShieldCheck size={15} />
            Licensed • Trusted • 24/7 Service
          </div>

          <h1 className="mt-6 rounded-sm bg-ink px-3 py-3 font-display text-2xl font-semibold italic leading-[1.15] tracking-wide text-white sm:bg-transparent sm:px-0 sm:py-0 sm:text-4xl lg:mt-8 lg:text-6xl">
            Travel in
            <br />

            <span className="bg-gradient-to-r from-[#F7D25B] via-[#D4AF37] to-[#F9E17B] bg-clip-text text-transparent">
              Comfort & Luxury
            </span>

            <br />

            for Your
            <br />

            <span className="text-gold">
              Umrah & Hajj
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Button href="/booking" size="md" className="sm:size-lg md:size-lg">
              Book Now
            </Button>

            <Button
              href={siteConfig.whatsappHref}
              variant="outline"
              size="md"
              className="sm:size-lg md:size-lg"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Booking
            </Button>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="relative mt-6 flex justify-center sm:mt-8 lg:mt-0 lg:-mt-14"
        >
          <HeroImageSlider />
        </motion.div>

      </Container>
    </section>
  );
}

function HeroImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = heroImages[index];

  return (
    <div className="relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-sm bg-ink sm:max-w-md sm:bg-transparent md:max-w-2xl lg:max-w-4xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={current.src}
            alt={current.alt}
            loading="eager"
            className="h-full w-full object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute -bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {heroImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-gold" : "w-1.5 bg-white/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}
