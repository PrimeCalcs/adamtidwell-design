import { proofStats } from "@/lib/content";
import { tokens } from "@/lib/typography";

export default function Proof() {
  return (
    <ul className="my-8 grid max-w-prose grid-cols-3 gap-6 border-y border-line py-7">
      {proofStats.map((stat) => (
        <li key={stat.value}>
          <div className={tokens.proofNum}>{stat.value}</div>
          <div className={`mt-1.5 ${tokens.proofLabel}`}>{stat.label}</div>
        </li>
      ))}
    </ul>
  );
}
