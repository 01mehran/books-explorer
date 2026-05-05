// Components;
import Book from "./components/Book";
import ControlsBar from "./components/ControlsBar";
import Header from "./components/Header";

function App() {
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
          <Book />
        </section>
      </main>
    </>
  );
}

export default App;
