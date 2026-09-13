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
      <Hero />
      <HowItWorks />
      <ServicesPreview />
      <FleetPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqPreview />
      <ContactCta />
    </>
  );
}
