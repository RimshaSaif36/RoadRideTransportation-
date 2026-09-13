import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-ink/95 py-3 backdrop-blur-md"
            : "border-transparent bg-transparent py-5",
        )}
      >
        <Container className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-nav.png"
              alt="RoadRide Transportation"
              width={1113}
              height={274}
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/login" variant="ghost" size="sm">
              Sign In
            </Button>
            <Button href="/booking" variant="solid" size="sm">
              Book Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
