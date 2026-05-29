/** Join the last two words so the final line never holds a lone word. */
export function preventWidows(text: string): string {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => {
      const words = sentence.trim().split(/\s+/);
      if (words.length < 3) return sentence.trim();

      const last = words.pop()!;
      const secondLast = words.pop()!;
      return [...words, `${secondLast}\u00A0${last}`].join(" ");
    })
    .join(" ");
}
