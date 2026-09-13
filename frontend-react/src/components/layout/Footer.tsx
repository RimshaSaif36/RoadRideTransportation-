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
  { label: "Airport Transfer", href: "/services" },
  { label: "VIP Transport", href: "/services" },
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
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
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
            {serviceLinks.map((link) => (
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

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3 text-muted">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              {siteConfig.address}
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
          <div className="flex items-center gap-6">
            <Link to="/faq" className="transition-colors hover:text-gold">
              FAQ
            </Link>
            <Link to="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
