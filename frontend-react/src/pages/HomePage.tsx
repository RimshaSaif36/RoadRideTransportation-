import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FleetPreview } from "@/components/sections/FleetPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { ContactCta } from "@/components/sections/ContactCta";
import { siteConfig } from "@/lib/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TransportationCompany",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressCountry: "SA",
  },
  areaServed: ["Makkah", "Madinah", "Jeddah"],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{`${siteConfig.name} | ${siteConfig.tagline}`}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.url} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main className="flex flex-col">
        <div className="order-0">
          <Hero />
        </div>
        <div className="order-3 md:order-1">
          <HowItWorks />
        </div>
        <div className="order-2 md:order-2">
          <ServicesPreview />
        </div>
        <div className="order-1 md:order-3">
          <FleetPreview />
        </div>
        <div className="order-4">
          <WhyChooseUs />
        </div>
        <div className="order-5">
          <TestimonialsSection />
        </div>
        <div className="order-6">
          <FaqPreview />
        </div>
        <div className="order-7">
          <ContactCta />
        </div>
      </main>
    </>
  );
}
