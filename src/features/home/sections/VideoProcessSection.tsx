"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import {useTranslations} from "next-intl";
import CircularTextBadge from "@/src/features/home/components/CircularTextBadge";

export default function VideoProcessSection() {
  const t = useTranslations("Home.videoProcess");
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);
  const hqVideoRef = useRef<HTMLVideoElement | null>(null);
  const hqReadyRef = useRef(false);
  const [hqReady, setHqReady] = useState(false);

  const revealHqVideo = useCallback(() => {
    const previewVideo = previewVideoRef.current;
    const hqVideo = hqVideoRef.current;

    if (!previewVideo || !hqVideo || hqReadyRef.current || hqVideo.readyState < 2) {
      return;
    }

    try {
      if (Number.isFinite(previewVideo.currentTime)) {
        hqVideo.currentTime = previewVideo.currentTime;
      }
    } catch {
      // Some browsers can reject seeking before the video is fully ready.
    }

    hqReadyRef.current = true;
    setHqReady(true);

    hqVideo.play().catch(() => {
      // Autoplay can be denied in edge cases; the visible first frame still replaces the preview.
    });
  }, []);

  useEffect(() => {
    const hqVideo = hqVideoRef.current;

    if (!hqVideo) {
      return;
    }

    const frame = requestAnimationFrame(revealHqVideo);

    hqVideo.addEventListener("loadeddata", revealHqVideo);
    hqVideo.addEventListener("canplay", revealHqVideo);

    return () => {
      cancelAnimationFrame(frame);
      hqVideo.removeEventListener("loadeddata", revealHqVideo);
      hqVideo.removeEventListener("canplay", revealHqVideo);
    };
  }, [revealHqVideo]);

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-black text-white md:min-h-[820px]">
      <video
        ref={previewVideoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/home.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <video
        ref={hqVideoRef}
        className={[
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          hqReady ? "opacity-100" : "opacity-0",
        ].join(" ")}
        src="/videos/home_hq.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedData={revealHqVideo}
        onCanPlay={revealHqVideo}
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-[720px] max-w-7xl items-center px-4 py-20 md:min-h-[820px] md:px-8 lg:px-12">
        <CircularTextBadge
          titleLines={t.raw("headingLines") as string[]}
          bodyLines={[
            {text: t("bodyPrefix")},
            {text: t("bodyHighlight"), emphasized: true},
            ...(t.raw("bodySuffixLines") as string[]).map((text) => ({text})),
          ]}
          className="size-[min(90vw,540px)] md:size-[min(46vw,580px)]"
        />
      </div>
    </section>
  );
}
