import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/site-config";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-6 border-l border-white/10 bg-charcoal px-4 py-6 sm:max-w-sm sm:gap-8 sm:px-8 sm:py-8 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <img
                src="/logo-nav.png"
                alt="RoadRide Transportation"
                width={1113}
                height={274}
                className="h-7 w-auto sm:h-8"
              />
              <button
                type="button"
                onClick={onClose}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className="font-display text-lg text-white transition-colors duration-200 hover:text-gold sm:text-2xl"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-2 sm:gap-3">
              <Button href="/login" variant="outline" size="md" onClick={onClose} className="sm:size-lg md:size-lg">
                Sign In
              </Button>
              <Button href="/booking" variant="solid" size="md" onClick={onClose} className="sm:size-lg md:size-lg">
                Book Now
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
