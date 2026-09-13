import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Seo } from "@/components/Seo";

export default function NotFoundPage() {
  return (
    <section className="bg-ink py-32">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="font-display text-4xl font-semibold text-white">404</h1>
        <p className="text-muted max-w-md text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button href="/">Back to Home</Button>
      </Container>
    </section>
  );
}
