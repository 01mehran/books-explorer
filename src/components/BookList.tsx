// Type
import type { TBookListProps } from "../types/types";

// Components;
import BookCard from "./BookCard";
import EmptyStateMessage from "./EmptyStateMessage";

export default function BookList({
  bookList,
  setIsModalOpen,
  setSelectedBook,
  isModalOpen,
  input,
  selectedLanguage,
}: TBookListProps) {
  return (
    <>
      <section
        id="books-grid"
        className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {bookList.length > 0 &&
          bookList.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              setIsModalOpen={setIsModalOpen}
              setSelectedBook={setSelectedBook}
              isModalOpen={isModalOpen}
            />
          ))}
      </section>

      <EmptyStateMessage
        input={input}
        selectedLanguage={selectedLanguage}
        bookListLength={bookList.length}
      />
    </>
  );
}
