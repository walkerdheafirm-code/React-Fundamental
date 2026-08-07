import MovieCard from './MovieCard';

const MovieList = ({ moviesData }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* LIST RENDERING MENGGUNAKAN .map() */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moviesData.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            rating={movie.rating}
            isShowing={movie.isShowing}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;