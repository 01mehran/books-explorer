// Types;
import type { TEmptyStateMessageProps } from "../types/types";

export default function EmptyStateMessage({
  input,
  bookListLength,
  selectedLanguage,
}: TEmptyStateMessageProps) {
  if (bookListLength > 0) return null;

  let message = "";

  if (input && selectedLanguage !== "all") {
    message = `Ooops, no books found for "${input}" in "${selectedLanguage.toUpperCase()}" language`;
  } else if (input && selectedLanguage === "all") {
    message = `Ooops, no title or author found for "${input}"`;
  } else if (!input && selectedLanguage !== "all") {
    message = `Ooops, no books found for "${selectedLanguage.toUpperCase()}" language`;
  }

  return <p className="text-sepia-600 text-center">{message}</p>;
}
