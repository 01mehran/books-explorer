// Type
import type { TBookListProps } from "../types/types";

// Components;
import BookCard from "./BookCard";

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

      {!bookList.length && input && selectedLanguage !== "all" && (
        <p className="text-sepia-600 text-center">
          Ooops, no books found for{" "}
          <span className="font-medium">"{input}"</span> in{" "}
          <span className="font-medium">
            "{selectedLanguage.toUpperCase()}"
          </span>{" "}
          language
        </p>
      )}

      {!bookList.length && input && selectedLanguage === "all" && (
        <p className="text-sepia-600 text-center">
          Ooops, no title or author found for{" "}
          <span className="font-medium">"{input}"</span>
        </p>
      )}

      {!bookList.length && !input && selectedLanguage !== "all" && (
        <p className="text-sepia-600 text-center">
          Ooops, no books found for{" "}
          <span className="font-medium">
            "{selectedLanguage.toUpperCase()}"
          </span>{" "}
          language
        </p>
      )}
    </>
  );
}
