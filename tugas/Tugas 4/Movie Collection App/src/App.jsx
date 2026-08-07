import { useState } from 'react';
import Header from './components/Header';
import MovieStats from './components/MovieStats';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

function App() {
  // 12 Data Film Sesuai Ketentuan
  const [movies, setMovies] = useState([
    { id: 1, title: "Interstellar", genre: "Sci-Fi / Adventure", year: 2014, duration: "169 Menit", rating: 8.9, showing: true, favorite: false },
    { id: 2, title: "Avatar: The Way of Water", genre: "Sci-Fi / Action", year: 2022, duration: "192 Menit", rating: 7.6, showing: true, favorite: true },
    { id: 3, title: "Inception", genre: "Action / Sci-Fi", year: 2010, duration: "148 Menit", rating: 8.8, showing: false, favorite: true },
    { id: 4, title: "Spider-Man: Across the Spider-Verse", genre: "Animation / Action", year: 2023, duration: "140 Menit", rating: 8.7, showing: true, favorite: false },
    { id: 5, title: "Oppenheimer", genre: "Biography / Drama", year: 2023, duration: "180 Menit", rating: 8.9, showing: true, favorite: true },
    { id: 6, title: "The Dark Knight", genre: "Action / Crime", year: 2008, duration: "152 Menit", rating: 9.0, showing: false, favorite: true },
    { id: 7, title: "Dune: Part Two", genre: "Sci-Fi / Adventure", year: 2024, duration: "166 Menit", rating: 8.6, showing: true, favorite: true },
    { id: 8, title: "Parasite", genre: "Drama / Thriller", year: 2019, duration: "132 Menit", rating: 8.5, showing: false, favorite: false },
    { id: 9, title: "Avengers: Endgame", genre: "Action / Sci-Fi", year: 2019, duration: "181 Menit", rating: 8.4, showing: true, favorite: false },
    { id: 10, title: "Joker", genre: "Crime / Drama", year: 2019, duration: "122 Menit", rating: 8.4, showing: false, favorite: false },
    { id: 11, title: "Top Gun: Maverick", genre: "Action / Drama", year: 2022, duration: "130 Menit", rating: 8.3, showing: true, favorite: false },
    { id: 12, title: "Spider-Man: No Way Home", genre: "Action / Adventure", year: 2021, duration: "148 Menit", rating: 8.2, showing: true, favorite: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Event Handling Toggle Favorite
  const handleToggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  // Logic Pencarian (Filter)
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Perhitungan Statistik Otomatis
  const totalMovies = movies.length;
  const showingMovies = movies.filter((movie) => movie.showing).length;
  const favoriteMovies = movies.filter((movie) => movie.favorite).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <MovieStats
        total={totalMovies}
        showing={showingMovies}
        favorite={favoriteMovies}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MovieList movies={filteredMovies} onToggleFavorite={handleToggleFavorite} />
      <Footer />
    </div>
  );
}

export default App;