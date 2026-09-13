import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className="animate-pulse-whatsapp fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
