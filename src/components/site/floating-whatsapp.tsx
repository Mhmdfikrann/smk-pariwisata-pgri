import { defaultWhatsappMessage, whatsappUrl } from "@/lib/site-data";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl(defaultWhatsappMessage)}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/35 sm:bottom-6 sm:right-6 sm:size-15"
      aria-label="Hubungi sekolah melalui WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="size-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3C8.84 3 3 8.73 3 15.78c0 2.25.6 4.45 1.73 6.38L3 29l7.04-1.83A13.15 13.15 0 0 0 16.02 28C23.2 28 29 22.27 29 15.78S23.2 3 16.02 3Zm0 22.83c-1.92 0-3.8-.5-5.45-1.45l-.4-.23-4.18 1.08 1.11-4.01-.26-.42a10.55 10.55 0 0 1-1.62-5.61c0-5.85 4.84-10.6 10.8-10.6s10.8 4.75 10.8 10.6-4.84 10.64-10.8 10.64Zm5.92-7.95c-.32-.16-1.9-.92-2.2-1.03-.3-.1-.52-.16-.74.16-.22.32-.85 1.03-1.04 1.24-.19.21-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.58-.96-.85-1.6-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.56.16-.18.22-.32.32-.53.11-.21.06-.4-.03-.56-.08-.16-.74-1.76-1.02-2.41-.27-.63-.54-.54-.74-.55h-.63c-.22 0-.56.08-.86.4-.3.32-1.13 1.08-1.13 2.63 0 1.55 1.16 3.06 1.32 3.27.16.21 2.29 3.43 5.54 4.8.78.33 1.38.53 1.85.68.78.24 1.49.21 2.05.13.63-.09 1.9-.76 2.17-1.5.27-.74.27-1.37.19-1.5-.08-.13-.3-.21-.62-.37Z" />
      </svg>
    </a>
  );
}
