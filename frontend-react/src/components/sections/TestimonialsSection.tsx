import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { Skeleton } from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(testimonials.length / PAGE_SIZE);

const averageRating =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

function ratingLabel(avg: number) {
  if (avg >= 4.5) return "Excellent";
  if (avg >= 4) return "Great";
  if (avg >= 3) return "Good";
  return "Fair";
}

export function TestimonialsSection() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % PAGE_COUNT);
    }, 6000);
    return () => clearInterval(interval);
  }, [loading]);

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="bg-ink py-12 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Testimonials"
          title="What Our Pilgrims Say"
          description="Real feedback from travellers we've served across Umrah and Hajj seasons."
        />

        <div className="mx-auto mt-10 flex flex-col items-center gap-2">
          <span className="font-display text-lg font-semibold uppercase tracking-widest text-gold">
            {ratingLabel(averageRating)}
          </span>
          <StarRating rating={Math.round(averageRating)} />
          <p className="text-muted text-sm">
            {averageRating.toFixed(1)} average &middot; Based on {testimonials.length} happy
            pilgrims
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-sm border border-white/10 bg-charcoal p-6"
                >
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {visible.map((t) => {
                    const isExpanded = !!expanded[t.id];
                    return (
                      <div
                        key={t.id}
                        className="flex flex-col gap-4 rounded-sm border border-white/10 bg-charcoal p-6 transition-colors hover:border-gold/40"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-semibold text-white">{t.name}</p>
                            <BadgeCheck size={14} className="text-gold" />
                          </div>
                          <span className="text-muted text-xs">{t.postedAt}</span>
                        </div>

                        <StarRating rating={t.rating} />

                        <div className="relative">
                          <p
                            className={cn(
                              "text-muted text-sm leading-relaxed",
                              !isExpanded && "line-clamp-4",
                            )}
                          >
                            {t.quote}
                          </p>
                          {t.quote.length > 140 && (
                            <button
                              type="button"
                              onClick={() =>
                                setExpanded((prev) => ({ ...prev, [t.id]: !isExpanded }))
                              }
                              className="mt-1 text-xs font-semibold text-gold hover:underline"
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </button>
                          )}
                        </div>

                        <p className="text-muted mt-auto text-xs">{t.service}</p>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {PAGE_COUNT > 1 && (
                <div className="mt-10 flex items-center justify-center gap-6">
                  <button
                    type="button"
                    aria-label="Previous testimonials"
                    onClick={() => setPage((p) => (p - 1 + PAGE_COUNT) % PAGE_COUNT)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-gold hover:text-gold"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: PAGE_COUNT }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to page ${i + 1}`}
                        onClick={() => setPage(i)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          i === page ? "w-6 bg-gold" : "w-1.5 bg-white/20",
                        )}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label="Next testimonials"
                    onClick={() => setPage((p) => (p + 1) % PAGE_COUNT)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-gold hover:text-gold"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
