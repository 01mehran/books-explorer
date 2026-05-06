// Hooks:
import { useEffect, useState } from "react";

// Components;
import Book from "./components/Book";
import ControlsBar from "./components/ControlsBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Types;
import type { TBook } from "./types/types";

// Libraries;
import axios from "axios";

function App() {
  const [data, seteData] = useState<TBook[]>([]);
  const [input, setInput] = useState("");

  async function getUser() {
    try {
      const response = await axios.get<TBook[]>(
        "http://localhost:8000/results",
      );

      seteData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //Initializing;
  useEffect(() => {
    getUser();
  }, []);

  const filteredBooks = data.filter((book) => {
    const serach = input.toLowerCase();

    const titleMatch = book.title.toLowerCase().includes(serach);

    const authorMatch = book.authors.some((auth) =>
      auth.name.toLowerCase().includes(serach),
    );

    return titleMatch || authorMatch;
  });

  return (
    <div className="">
      {/* ---- Header ---- */}
      <Header />
      {/* ---- Main Content ---- */}
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-8">
        {/* ---- Controls Bar ---- */}
        <ControlsBar value={input} onChange={setInput} />

        {/* ---- Books Grid ---- */}
        <section
          id="books-grid"
          className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <Book key={book.id} book={book} />)
          ) : (
            <span className="text-gray-600 italic">
              "Ooops, no title or author found!"
            </span>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
