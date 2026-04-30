import { MessageCircle } from "lucide-react";

import { defaultWhatsappMessage, whatsappUrl } from "@/lib/site-data";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl(defaultWhatsappMessage)}
      className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 sm:inset-x-auto sm:right-6 sm:w-auto"
      aria-label="Hubungi admin PPDB melalui WhatsApp"
    >
      <MessageCircle className="size-5" />
      Tanya PPDB
    </a>
  );
}
