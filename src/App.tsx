// Hooks:
import { useEffect, useState } from "react";

// Components;
import BookCard from "./components/BookCard";
import ControlsBar from "./components/ControlsBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookDetailModal from "./components/BookDetailModal";

// Types;
import type { TBooks } from "./types/types";

// Libraries;
import axios from "axios";

function App() {
  const [books, setBooks] = useState<TBooks[]>([]);
  const [input, setInput] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<TBooks | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  // Get book list;
  async function getBookList() {
    try {
      const res = await axios.get<TBooks[]>("http://localhost:8000/results");

      setBooks(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  //Initializing;
  useEffect(() => {
    getBookList();
  }, []);

  // Close modal box with Escape button on keyboard;
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setIsModalOpen(false);
  });

  // Find book by searching;
  const searchedBook = books.filter((book) => {
    const inputValue = input.toLowerCase();

    const bookTitle = book.title.toLowerCase().includes(inputValue);

    const bookAuthor = book.authors.some((auth) =>
      auth.name.toLowerCase().includes(inputValue),
    );

    return bookTitle || bookAuthor;
  });

  // Filter by selected language;
  const filteredByLanguage = searchedBook.filter((book) => {
    if (selectedLanguage === "all") return true;

    return book.languages.some(
      (lang) => lang.toLowerCase() === selectedLanguage.toLowerCase(),
    );
  });

  // Sort by Title A-Z or most downloaded;
  const sortedBooks = [...filteredByLanguage].sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    }

    if (sortOption === "downloads") {
      return b.download_count - a.download_count;
    }

    return 0;
  });

  // Handle Clear filter;
  const handleClearFilters = () => {
    setSortOption("downloads");
    setSelectedLanguage("all");
  };

  return (
    <>
      {/* ---- Header ---- */}
      <Header />
      {/* ---- Main Content ---- */}
      <main className="mx-auto min-h-screen max-w-5xl px-4 py-8">
        {/* ---- Controls Bar ---- */}
        <ControlsBar
          value={input}
          onChange={setInput}
          sortOption={sortOption}
          setSortOption={setSortOption}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          handleClearFilters={handleClearFilters}
        />

        {/* ---- Books Grid ---- */}
        <section
          id="books-grid"
          className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {sortedBooks.length > 0 ? (
            sortedBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                setIsModalOpen={setIsModalOpen}
                setSelectedBook={setSelectedBook}
                isModalOpen={isModalOpen}
              />
            ))
          ) : (
            <p className="text-sepia-500 text-nowrap italic">
              &quot; Ooops, no title or author found for{" "}
              <span className="font-medium italic underline">{input}</span>!
              &quot;
            </p>
          )}
        </section>

        {isModalOpen && selectedBook && (
          <BookDetailModal
            isModalOpen={isModalOpen}
            selectedBook={selectedBook}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
