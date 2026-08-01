import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  // Data 6 Film sesuai ketentuan kuis
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Sci-Fi / Adventure",
      year: 2014,
      rating: 8.7,
      isShowing: false
    },
    {
      id: 2,
      title: "Avatar: The Way of Water",
      genre: "Sci-Fi / Action",
      year: 2022,
      rating: 7.6,
      isShowing: true
    },
    {
      id: 3,
      title: "Inception",
      genre: "Action / Sci-Fi",
      year: 2010,
      rating: 8.8,
      isShowing: false
    },
    {
      id: 4,
      title: "Spider-Man: Across the Spider-Verse",
      genre: "Animation / Action",
      year: 2023,
      rating: 8.7,
      isShowing: true
    },
    {
      id: 5,
      title: "Oppenheimer",
      genre: "Biography / Drama",
      year: 2023,
      rating: 8.9,
      isShowing: true
    },
    {
      id: 6,
      title: "The Dark Knight",
      genre: "Action / Crime",
      year: 2008,
      rating: 9.0,
      isShowing: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Header />
      <MovieList moviesData={movies} />
    </div>
  );
}

export default App;