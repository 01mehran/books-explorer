// Hooks:
import { useEffect, useState } from "react";

// Components;
import BookCard from "./components/BookCard";
import ControlsBar from "./components/ControlsBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Types;
import type { TBooks } from "./types/types";

// Libraries;
import axios from "axios";

function App() {
  const [books, setBooks] = useState<TBooks[]>([]);
  const [input, setInput] = useState("");
  const [sortOption, setSortOption] = useState("");

  async function getUser() {
    try {
      const res = await axios.get<TBooks[]>("http://localhost:8000/results");

      setBooks(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  //Initializing;
  useEffect(() => {
    getUser();
  }, []);

  const searchedBook = books.filter((book) => {
    const inputValue = input.toLowerCase();

    const bookTitle = book.title.toLowerCase().includes(inputValue);

    const bookAuthor = book.authors.some((auth) =>
      auth.name.toLowerCase().includes(inputValue),
    );

    return bookTitle || bookAuthor;
  });

  const sortedBooks = [...searchedBook].sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    }

    if (sortOption === "downloads") {
      return b.download_count - a.download_count;
    }

    return 0;
  });

  return (
    <div className="">
      {/* ---- Header ---- */}
      <Header />
      {/* ---- Main Content ---- */}
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-8">
        {/* ---- Controls Bar ---- */}
        <ControlsBar
          value={input}
          onChange={setInput}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* ---- Books Grid ---- */}
        <section
          id="books-grid"
          className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {sortedBooks.length > 0 ? (
            sortedBooks.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p className="text-nowrap text-gray-600 italic">
              &quot; Ooops, no title or author found for{" "}
              <span className="font-medium italic underline">{input}</span>!
              &quot;
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
