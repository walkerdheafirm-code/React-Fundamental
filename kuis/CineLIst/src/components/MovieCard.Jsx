// Menerima Props dari MovieList
const MovieCard = ({ title, genre, year, rating, isShowing }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          
          {/* CONDITIONAL RENDERING: Tampilan beda berdasarkan status isShowing */}
          {isShowing ? (
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              🎬 Sedang Tayang
            </span>
          ) : (
            <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              📦 Tidak Tayang
            </span>
          )}
        </div>

        <p className="text-sm font-semibold text-indigo-600 mb-4">{genre}</p>
      </div>

      <div className="flex justify-between items-center text-sm text-slate-500 border-t pt-3 mt-2">
        <span>🗓️ {year}</span>
        <span className="font-bold text-amber-500">⭐ {rating} / 10</span>
      </div>
    </div>
  );
};

export default MovieCard;