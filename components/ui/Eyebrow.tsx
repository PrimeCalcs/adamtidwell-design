type EyebrowProps = {
  children: React.ReactNode;
  as?: "p" | "span" | "h2";
  className?: string;
};

/** Wide-tracked monospace micro-label used as a section eyebrow. */
export default function Eyebrow({
  children,
  as: Tag = "p",
  className = "",
}: EyebrowProps) {
  return <Tag className={`eyebrow ${className}`}>{children}</Tag>;
}
