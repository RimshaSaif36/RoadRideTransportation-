import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site-config";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

const serviceLinks = [
  { label: "Umrah Transport", href: "/services" },
  { label: "Hajj Transport", href: "/services" },
  { label: "Jeddah Airport Transfer", href: "/services" },
  { label: "Makkah Hotel Transfer", href: "/services" },
  { label: "Makkah to Madinah", href: "/services" },
  { label: "Madinah Hotel Transfer", href: "/services" },
  { label: "Madinah to Makkah", href: "/services" },
  { label: "Haram Transport", href: "/services" },
  { label: "Ziyarat of Holy Places", href: "/services" },
  { label: "VIP Transport", href: "/services" },
  { label: "Family Transport", href: "/services" },
  { label: "Group Transport", href: "/services" },
  { label: "Corporate Transport", href: "/services" },
];

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YouTubeIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, Icon: TikTokIcon },
  { label: "WhatsApp Channel", href: siteConfig.social.whatsappChannel, Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
          <Link to="/" className="w-fit">
            <img
              src="/logo-nav.png"
              alt="RoadRide Transportation"
              width={1113}
              height={274}
              className="h-9 w-auto sm:h-11"
            />
          </Link>
          <p className="text-muted text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-gold"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-muted text-sm transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {serviceLinks.slice(0, 6).map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-muted text-sm transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3 text-muted">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              Ibrahim Al Khalil Street, Al Taysir, Makkah 24231, Saudi Arabia
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted transition-colors hover:text-gold"
              >
                <Mail size={18} className="shrink-0 text-gold" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/966530832361"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted transition-colors hover:text-gold"
              >
                <WhatsAppIcon size={18} className="shrink-0 text-gold" />
                Muhammad Bilal — +966 53 083 2361
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/966592591078"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted transition-colors hover:text-gold"
              >
                <WhatsAppIcon size={18} className="shrink-0 text-gold" />
                Mudassar Rafiq — +966 59 259 1078
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end sm:gap-6">
            <Link to="/faq" className="transition-colors hover:text-gold">
              FAQ
            </Link>
            <Link to="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
            <a
              href="https://portfolio-rho-beryl-54.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold/50 bg-gold/10 px-3 py-1.5 font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Designed &amp; Developed by Rimsha Eman · View Portfolio
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
