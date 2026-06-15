export type NoteBlock =
  | { type: "text"; content: string }
  | { type: "image"; name: string; dataUrl: string }
  | { type: "link"; url: string; label?: string };

export type DayEntry = {
  id: string;
  date: string;
  hours: number;
  notes: NoteBlock[];
  updatedAt: string;
};

export const STORAGE_KEY = "at-worklog-entries-v1";
