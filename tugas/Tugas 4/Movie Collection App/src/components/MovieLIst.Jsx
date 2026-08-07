import MovieCard from './MovieCard';

const MovieList = ({ movies, onToggleFavorite }) => {
  if (movies.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-slate-400 font-medium">
        Tidak ada film yang ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            duration={movie.duration}
            rating={movie.rating}
            showing={movie.showing}
            favorite={movie.favorite}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;