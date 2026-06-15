"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { DayEntry, NoteBlock } from "@/lib/worklog/types";
import {
  formatDateLabel,
  loadEntries,
  saveEntries,
  sortEntries,
  sumHours,
  todayIso,
} from "@/lib/worklog/storage";
import { tokens } from "@/lib/typography";

const URL_PATTERN = /^https?:\/\/\S+$/i;

function createId(): string {
  return crypto.randomUUID();
}

function isUrl(text: string): boolean {
  return URL_PATTERN.test(text.trim());
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function emptyNotes(): NoteBlock[] {
  return [{ type: "text", content: "" }];
}

function getTextContent(notes: NoteBlock[]): string {
  return notes
    .filter((block): block is Extract<NoteBlock, { type: "text" }> => block.type === "text")
    .map((block) => block.content)
    .join("\n");
}

function setTextContent(notes: NoteBlock[], content: string): NoteBlock[] {
  const nonText = notes.filter((block) => block.type !== "text");
  const textBlock: NoteBlock = { type: "text", content };
  return content ? [textBlock, ...nonText] : nonText.length ? nonText : [textBlock];
}

function NotePreview({ notes }: { notes: NoteBlock[] }) {
  if (!notes.length) {
    return <p className="text-[14px] italic text-faint">No notes</p>;
  }

  return (
    <div className="space-y-3">
      {notes.map((block, index) => {
        if (block.type === "text") {
          if (!block.content.trim()) return null;
          return (
            <p key={index} className="whitespace-pre-wrap text-[15px] leading-[1.6] text-foreground">
              {block.content}
            </p>
          );
        }

        if (block.type === "link") {
          return (
            <a
              key={index}
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${tokens.link} text-[15px]`}
            >
              {block.label || block.url}
            </a>
          );
        }

        return (
          <img
            key={index}
            src={block.dataUrl}
            alt={block.name}
            className="max-h-64 max-w-full rounded border border-line object-contain"
          />
        );
      })}
    </div>
  );
}

function NotesEditor({
  notes,
  onChange,
}: {
  notes: NoteBlock[];
  onChange: (notes: NoteBlock[]) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const text = getTextContent(notes);
  const attachments = notes.filter((block) => block.type !== "text");

  const updateText = (content: string) => {
    onChange(setTextContent(notes, content));
  };

  const addImage = useCallback(
    async (file: File) => {
      const dataUrl = await fileToDataUrl(file);
      onChange([
        ...notes,
        { type: "image", name: file.name || "pasted-image.png", dataUrl },
      ]);
    },
    [notes, onChange],
  );

  const addLink = useCallback(
    (url: string) => {
      const trimmed = url.trim();
      if (!isUrl(trimmed)) return;
      if (attachments.some((block) => block.type === "link" && block.url === trimmed)) return;
      onChange([...notes, { type: "link", url: trimmed }]);
    },
    [attachments, notes, onChange],
  );

  const removeAttachment = (index: number) => {
    onChange(notes.filter((_, i) => i !== index));
  };

  const handlePaste = async (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const clipboard = event.clipboardData;
    if (!clipboard) return;

    const imageItem = Array.from(clipboard.items).find((item) =>
      item.type.startsWith("image/"),
    );

    if (imageItem) {
      event.preventDefault();
      const file = imageItem.getAsFile();
      if (file) await addImage(file);
      return;
    }

    const pastedText = clipboard.getData("text/plain").trim();
    if (isUrl(pastedText)) {
      event.preventDefault();
      addLink(pastedText);
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files).find((item) =>
      item.type.startsWith("image/"),
    );
    if (file) await addImage(file);
  };

  return (
    <div
      className="rounded-lg border border-line bg-surface shadow-card"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(event) => updateText(event.target.value)}
        onPaste={handlePaste}
        placeholder="Notes for the day… Paste a link or PNG here."
        rows={6}
        className="w-full resize-y border-0 bg-transparent px-4 py-3 text-[15px] leading-[1.6] text-foreground outline-none placeholder:text-faint"
      />

      {attachments.length > 0 && (
        <div className="space-y-3 border-t border-line px-4 py-3">
          {notes.map((block, index) => {
            if (block.type === "text") return null;

            return (
              <div
                key={`${block.type}-${index}`}
                className="flex items-start justify-between gap-3 rounded border border-line-warm bg-background px-3 py-2"
              >
                <div className="min-w-0 flex-1">
                  {block.type === "link" ? (
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${tokens.link} break-all text-[14px]`}
                    >
                      {block.url}
                    </a>
                  ) : (
                    <img
                      src={block.dataUrl}
                      alt={block.name}
                      className="max-h-40 max-w-full rounded object-contain"
                    />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeAttachment(index)}
                  className="shrink-0 font-mono text-[10px] uppercase tracking-label text-faint transition hover:text-foreground"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}

      <p className="border-t border-line px-4 py-2 font-mono text-[10px] uppercase tracking-label text-faint">
        Paste PNGs or URLs · drag images in
      </p>
    </div>
  );
}

export default function WorkLog() {
  const [entries, setEntries] = useState<DayEntry[]>([]);
  const [date, setDate] = useState(todayIso);
  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState<NoteBlock[]>(emptyNotes);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setEntries(sortEntries(loadEntries()));
    setHydrated(true);
  }, []);

  const weekHours = useMemo(() => {
    const now = new Date();
    const start = new Date(now);
    start.setDate(now.getDate() - now.getDay());
    start.setHours(0, 0, 0, 0);

    return sumHours(
      entries.filter((entry) => {
        const [y, m, d] = entry.date.split("-").map(Number);
        const entryDate = new Date(y, m - 1, d);
        return entryDate >= start;
      }),
    );
  }, [entries]);

  const resetForm = useCallback(() => {
    setDate(todayIso());
    setHours("");
    setNotes(emptyNotes());
    setEditingId(null);
  }, []);

  const loadEntry = (entry: DayEntry) => {
    setEditingId(entry.id);
    setDate(entry.date);
    setHours(String(entry.hours));
    setNotes(entry.notes.length ? entry.notes : emptyNotes());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSave = () => {
    const parsedHours = Number(hours);
    if (!date || Number.isNaN(parsedHours) || parsedHours < 0) return;

    const cleanedNotes = notes.filter(
      (block) =>
        block.type !== "text" || block.content.trim().length > 0,
    );

    const payload: DayEntry = {
      id: editingId ?? createId(),
      date,
      hours: parsedHours,
      notes: cleanedNotes,
      updatedAt: new Date().toISOString(),
    };

    const withoutDuplicate = entries.filter(
      (entry) => entry.id !== payload.id && entry.date !== payload.date,
    );
    const next = sortEntries([payload, ...withoutDuplicate]);
    setEntries(next);
    saveEntries(next);
    resetForm();
  };

  const handleDelete = (id: string) => {
    const next = entries.filter((entry) => entry.id !== id);
    setEntries(next);
    saveEntries(next);
    if (editingId === id) resetForm();
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `work-log-${todayIso()}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-content px-6 py-24">
        <p className={tokens.eyebrow}>Loading…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-content px-6 py-16 md:py-24">
      <header className="mb-10 border-b border-line pb-8">
        <p className={tokens.eyebrow}>Private</p>
        <h1 className="mt-2 text-[28px] font-medium tracking-[-0.02em] text-foreground">
          Work log
        </h1>
        <p className="mt-2 text-[15px] text-muted">
          Hours and notes by day. Saved in this browser only.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-label text-label">
            This week: <span className="text-accent">{weekHours.toFixed(1)}h</span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-label text-label">
            Total entries: <span className="text-foreground">{entries.length}</span>
          </span>
          {entries.length > 0 && (
            <button
              type="button"
              onClick={handleExport}
              className="font-mono text-[10px] uppercase tracking-label text-faint transition hover:text-accent"
            >
              Export JSON
            </button>
          )}
        </div>
      </header>

      <section className="mb-14">
        <h2 className={`${tokens.eyebrow} mb-4`}>
          {editingId ? "Edit entry" : "Log a day"}
        </h2>

        <div className="grid gap-4 md:grid-cols-[1fr_140px]">
          <label className="block">
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-label text-label">
              Date
            </span>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-[15px] text-foreground shadow-card outline-none focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-label text-label">
              Hours
            </span>
            <input
              type="number"
              min="0"
              step="0.25"
              value={hours}
              onChange={(event) => setHours(event.target.value)}
              placeholder="8"
              className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-[15px] text-foreground shadow-card outline-none focus:border-accent"
            />
          </label>
        </div>

        <div className="mt-4">
          <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-label text-label">
            Notes
          </span>
          <NotesEditor notes={notes} onChange={setNotes} />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={!hours}
            className="rounded-lg bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-label text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {editingId ? "Update entry" : "Save entry"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-line bg-surface px-4 py-2.5 font-mono text-[11px] uppercase tracking-label text-muted transition hover:border-accent hover:text-accent"
            >
              Cancel
            </button>
          )}
        </div>
      </section>

      <section>
        <h2 className={`${tokens.eyebrow} mb-4`}>History</h2>

        {entries.length === 0 ? (
          <p className="text-[15px] text-muted">No entries yet.</p>
        ) : (
          <ul className="space-y-4">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="rounded-lg border border-line bg-surface p-4 shadow-card"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[16px] font-medium text-foreground">
                      {formatDateLabel(entry.date)}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-label text-accent">
                      {entry.hours}h
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => loadEntry(entry)}
                      className="font-mono text-[10px] uppercase tracking-label text-faint transition hover:text-accent"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(entry.id)}
                      className="font-mono text-[10px] uppercase tracking-label text-faint transition hover:text-foreground"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-4 border-t border-line pt-4">
                  <NotePreview notes={entry.notes} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
