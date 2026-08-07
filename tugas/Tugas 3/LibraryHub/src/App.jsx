import Header from "./components/Header";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      <BookList />
      <Footer />
    </div>
  );
}