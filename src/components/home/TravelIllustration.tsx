import { Globe, MapPin, Plane } from "lucide-react";

export interface TravelIllustrationProps {
  className?: string;
}

export default function TravelIllustration({
  className = "",
}: TravelIllustrationProps) {
  return (
    <div
      className={`relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center rounded-[2rem] border border-border-default bg-gradient-to-br from-[#f7f8fa] to-white p-10 shadow-sm ${className}`.trim()}
      aria-hidden
    >
      <Globe className="absolute h-40 w-40 text-primary/15" strokeWidth={1} />
      <Plane className="relative h-16 w-16 -rotate-12 text-accent" strokeWidth={1.5} />
      <MapPin className="absolute bottom-14 right-14 h-10 w-10 text-accent-strong/70" strokeWidth={1.5} />
    </div>
  );
}
