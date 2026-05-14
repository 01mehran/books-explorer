// Types;
import type { TEmptyStateMessageProps } from "../types/types";

const languageContract: Record<string, string> = {
  en: "English",
  fr: "French",
  de: "German",
  es: "Spanish",
  it: "Italian",
  pt: "Portuguese",
};

export default function EmptyStateMessage({
  input,
  bookListLength,
  selectedLanguage,
}: TEmptyStateMessageProps) {
  if (bookListLength > 0) return null;

  let message = "";

  if (input && selectedLanguage !== "all") {
    message = `Ooops, no books found for "${input}" in "${languageContract[selectedLanguage]}" language`;
  } else if (input && selectedLanguage === "all") {
    message = `Ooops, no title or author found for "${input}"`;
  } else if (!input && selectedLanguage !== "all") {
    message = `Ooops, no books found for "${languageContract[selectedLanguage]}" language`;
  }

  return <p className="text-sepia-600 text-center">{message}</p>;
}
