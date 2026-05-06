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

  return (
    <>
      {/* ---- Header ---- */}
      <Header />
      {/* ---- Main Content ---- */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* ---- Controls Bar ---- */}
        <ControlsBar />

        {/* ---- Books Grid ---- */}
        <section
          id="books-grid"
          className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {data.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
