"use client";

import { useId, useRef } from "react";
import { cn } from "@/lib/utils";

export interface CurvedTextLoopProps {
  text: string;
  className?: string;
  height?: number;
  fontSize?: number;
  color?: string;
  ribbonColor?: string;
  duration?: number;
  pauseOnHover?: boolean;
  repeat?: number;
}

export function CurvedTextLoop({
  text,
  className,
  height = 92,
  fontSize = 26,
  color = "#0d0d0c",
  ribbonColor = "#f5d000",
  duration = 32,
  pauseOnHover = true,
  repeat = 6,
}: CurvedTextLoopProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");
  const pathId = `curved-path-${uid}`;
  const content = Array(repeat).fill(text).join("   ◆   ");

  const pause = () => svgRef.current?.pauseAnimations();
  const resume = () => svgRef.current?.unpauseAnimations();

  const ribbon =
    "M-120,34 C200,6 520,78 720,44 S920,10 1240,34 1560,34 L1560,58 C1240,82 920,48 720,58 S520,86 200,58 -120,58 Z";
  const textPath = "M-120,46 C200,46 520,46 720,46 S920,46 1240,46 1560,46";

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height }}
      aria-hidden
      onPointerEnter={pauseOnHover ? pause : undefined}
      onPointerLeave={pauseOnHover ? resume : undefined}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1440 92"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d={ribbon} fill={ribbonColor} />
        <defs>
          <path id={pathId} d={textPath} fill="none" />
        </defs>
        <text
          fill={color}
          fontSize={fontSize}
          fontStyle="italic"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="500"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {content}
            <animate
              attributeName="startOffset"
              from="0%"
              to="-50%"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </div>
  );
}
