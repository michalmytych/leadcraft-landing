"use client";

import {useEffect, useRef, useState} from "react";
import type {CSSProperties, ElementType} from "react";

type BodyLine = {
  text: string;
  emphasized?: boolean;
};

type CircularTextBadgeProps = {
  titleLines: string[];
  bodyLines?: BodyLine[];
  titleAs?: ElementType;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
};

export default function CircularTextBadge({
  titleLines,
  bodyLines = [],
  titleAs: Title = "h2",
  className = "",
  titleClassName = "",
  bodyClassName = "",
}: CircularTextBadgeProps) {
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      if (!badgeRef.current) {
        return;
      }

      const rect = badgeRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const nextProgress = Math.min(1, Math.max(0, rawProgress));

      setProgress(nextProgress);
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, {passive: true});
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const easedProgress = 1 - Math.pow(1 - progress, 3);
  const badgeStyle = {
    transform: `translate3d(0, ${(1 - easedProgress) * 72}px, 0) scale(${0.9 + easedProgress * 0.1})`,
    "--content-translate-y": `${(1 - easedProgress) * -22}px`,
  } as CSSProperties;

  return (
    <div
      ref={badgeRef}
      style={badgeStyle}
      className={[
        "relative grid size-[min(90vw,560px)] shrink-0 place-items-center overflow-visible rounded-full",
        "border border-white/10 bg-[radial-gradient(circle_at_48%_28%,rgba(58,59,88,0.74)_0%,rgba(48,49,73,0.68)_55%,rgba(86,84,106,0.62)_100%)]",
        "text-white shadow-[0_34px_90px_rgba(0,0,0,0.24)] backdrop-blur-md",
        "transition-transform duration-100 ease-out will-change-transform",
        className,
      ].join(" ")}
    >
      <div className="w-[100%] translate-x-[3%] translate-y-[var(--content-translate-y)] px-[12%] text-left will-change-transform">
        <Title
          className={[
            "font-heading text-[clamp(40px,5.8vw,78px)] font-light leading-[0.98]",
            titleClassName,
          ].join(" ")}
        >
          {titleLines.map((line, index) => (
            <span key={`${line}-${index}`} className="block">
              {line}
            </span>
          ))}
        </Title>

        {bodyLines.length > 0 ? (
          <p
            className={[
              "mt-5 font-heading text-[clamp(24px,3.6vw,44px)] font-light leading-[1]",
              bodyClassName,
            ].join(" ")}
          >
            {bodyLines.map((line, index) =>
              line.emphasized ? (
                <strong key={`${line.text}-${index}`} className="block font-bold">
                  {line.text}
                </strong>
              ) : (
                <span key={`${line.text}-${index}`} className="block">
                  {line.text}
                </span>
              ),
            )}
          </p>
        ) : null}
      </div>
    </div>
  );
}
