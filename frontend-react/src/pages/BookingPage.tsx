import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/booking/BookingForm";
import { Seo } from "@/components/Seo";

export default function BookingPage() {
  return (
    <>
      <Seo
        title="Book Your Ride"
        description="Book your Umrah or Hajj transport with RoadRide Transportation — fixed pricing, professional drivers, and confirmation on WhatsApp."
        path="/booking"
      />

      <PageHero
        kicker="Booking"
        title="Reserve Your Ride"
        description="Fill in the details below and our team will confirm your booking on WhatsApp within minutes."
      />

      <section className="bg-ink py-24">
        <Container className="max-w-3xl">
          <BookingForm />
        </Container>
      </section>
    </>
  );
}
