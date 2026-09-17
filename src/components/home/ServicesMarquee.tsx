import { CurvedTextLoop } from "@/components/ui/curved-text-loop";
import { services, site } from "@/lib/site";

export default function ServicesMarquee() {
  const line = services.map((s) => s.title).join("   •   ");

  return (
    <section
      className="relative bg-navy"
      aria-label="CEO Travels services"
    >
      <CurvedTextLoop
        text={`${site.tagline} — ${line}`}
        ribbonColor="#f5d000"
        color="#0d0d0c"
        fontSize={24}
        height={92}
        duration={36}
        pauseOnHover
      />
    </section>
  );
}
