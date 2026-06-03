"use client";

import { useRef, useState } from "react";
import { tokens } from "@/lib/typography";

type PhoneReelProps = {
  /** Top-left corner label (project name). */
  label: string;
  /** Center screen label. */
  reelLabel: string;
  /** Optional reel video; when set it fills the phone screen instead of the placeholder chrome. */
  video?: string;
};

/**
 * Phone mockup with a white screen. When a reel video is provided it plays on
 * hover (desktop) or via the play/pause button (tap on mobile), so multiple
 * phones never all play at once. Falls back to neutral chrome with no video.
 */
export default function PhoneReel({ label, reelLabel, video }: PhoneReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play().catch(() => {});
  };
  const pause = () => {
    videoRef.current?.pause();
  };
  const toggle = () => {
    if (playing) pause();
    else play();
  };

  return (
    <div className="w-[200px] rounded-phone bg-ink p-1.5 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.18)]">
      <div
        className="group relative flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-[23px] bg-surface"
        onMouseEnter={video ? play : undefined}
        onMouseLeave={video ? pause : undefined}
      >
        {video ? (
          <>
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={`${video}#t=0.001`}
              loop
              muted
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label={`${label} reel`}
            />
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? `Pause ${label} reel` : `Play ${label} reel`}
              className="absolute inset-0 z-20 flex items-center justify-center"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full bg-black/45 pl-0.5 text-[15px] text-white backdrop-blur-sm transition-opacity duration-200 ${
                  playing ? "opacity-0" : "opacity-100"
                }`}
              >
                ▶
              </span>
            </button>
          </>
        ) : (
          <>
            <span
              className={`absolute left-[14px] top-[38px] ${tokens.phoneCorner}`}
            >
              {label}
            </span>
            <span
              className={`absolute right-[14px] top-[38px] ${tokens.phoneCorner}`}
            >
              00:42
            </span>
            <span className={`px-4 text-center ${tokens.phoneLabel}`}>
              {reelLabel}
            </span>
            <span
              className={`absolute bottom-[14px] left-[14px] ${tokens.phoneCorner}`}
            >
              iOS
            </span>
            <span
              className={`absolute bottom-[14px] right-[14px] ${tokens.phoneCorner}`}
            >
              ▶
            </span>
          </>
        )}

        <span
          aria-hidden
          className="absolute left-1/2 top-2 z-30 h-[18px] w-16 -translate-x-1/2 rounded-full bg-ink"
        />
      </div>
    </div>
  );
}
