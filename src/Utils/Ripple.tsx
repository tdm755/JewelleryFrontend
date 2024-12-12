import React, { useMemo } from "react";
import { cn } from "./Utils";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.4,
  numCircles = 8,
  className,
}: RippleProps) {
  // Memoize circle calculations to prevent unnecessary recalculations
  const circleData = useMemo(() => 
    Array.from({ length: numCircles }, (_, i) => ({
      size: mainCircleSize + i * 70,
      opacity: Math.max(0, mainCircleOpacity - i * 0.03),
      animationDelay: `${i * 0.06}s`,
      borderStyle: i === numCircles - 1 ? "dashed" : "solid",
      borderOpacity: Math.min(100, 15 + i * 8)
    })), 
    [mainCircleSize, mainCircleOpacity, numCircles]
  );

  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      aria-hidden="true" // Improve accessibility
    >
      {circleData.map((circle, i) => (
        <div
          key={i}
          className={`absolute flex items-center justify-center animate-ripple rounded-full bg-[#a1bae2]/40 shadow-xl border`}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            opacity: circle.opacity,
            animationDelay: circle.animationDelay,
            borderStyle: circle.borderStyle,
            borderWidth: "1.5px",
            borderColor: `rgba(161, 186, 226, ${circle.borderOpacity / 100})`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            willChange: "transform, opacity", // Hint to browser for optimization
          }}
        />
      ))}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;