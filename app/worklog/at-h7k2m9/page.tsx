import type { Metadata } from "next";
import WorkLog from "@/components/worklog/WorkLog";

export const metadata: Metadata = {
  title: "Work Log",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WorkLogPage() {
  return <WorkLog />;
}
