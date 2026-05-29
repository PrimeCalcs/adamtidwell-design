import { tokens } from "@/lib/typography";

type PhoneReelProps = {
  /** Top-left corner label (project name). */
  label: string;
  /** Center screen label. */
  reelLabel: string;
};

/**
 * Phone mockup with a white screen and prototype-reel chrome.
 * Neutral placeholder until real reels land.
 */
export default function PhoneReel({ label, reelLabel }: PhoneReelProps) {
  return (
    <div className="w-[200px] rounded-phone bg-ink p-1.5 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.18)]">
      <div className="relative flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-[23px] bg-surface">
        <span
          aria-hidden
          className="absolute left-1/2 top-2 h-[18px] w-16 -translate-x-1/2 rounded-full bg-ink"
        />
        <span className={`absolute left-[14px] top-[38px] ${tokens.phoneCorner}`}>
          {label}
        </span>
        <span className={`absolute right-[14px] top-[38px] ${tokens.phoneCorner}`}>
          00:42
        </span>
        <span className={`px-4 text-center ${tokens.phoneLabel}`}>
          {reelLabel}
        </span>
        <span className={`absolute bottom-[14px] left-[14px] ${tokens.phoneCorner}`}>
          iOS
        </span>
        <span className={`absolute bottom-[14px] right-[14px] ${tokens.phoneCorner}`}>
          ▶
        </span>
      </div>
    </div>
  );
}
