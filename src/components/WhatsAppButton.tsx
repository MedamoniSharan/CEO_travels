import Image from "next/image";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`${site.whatsappHref}?text=${encodeURIComponent(
        "Hello CEO Travels, I would like to enquire about your services.",
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl shadow-black/25 hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp-logo.svg"
        alt=""
        width={56}
        height={56}
        className="h-14 w-14"
        priority
      />
    </a>
  );
}
