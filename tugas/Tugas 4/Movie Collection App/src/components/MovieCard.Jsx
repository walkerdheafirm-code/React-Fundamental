const MovieCard = ({ id, title, genre, year, duration, rating, showing, favorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          
          {/* Conditional Rendering Status Tayang */}
          {showing ? (
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              🟢 Sedang Tayang
            </span>
          ) : (
            <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              🔴 Tidak Tayang
            </span>
          )}
        </div>

        <p className="text-sm font-semibold text-indigo-600 mb-1">{genre}</p>
        <p className="text-xs text-slate-400 mb-4">⏱️ {duration}</p>
      </div>

      <div className="border-t pt-3 mt-2 flex flex-col gap-3">
        <div className="flex justify-between items-center text-sm text-slate-500">
          <span>🗓️ {year}</span>
          <span className="font-bold text-amber-500">⭐ {rating} / 10</span>
        </div>

        {/* Event Handling Toggle Favorite */}
        <button
          onClick={() => onToggleFavorite(id)}
          className={`w-full py-2 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
            favorite
              ? "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100"
              : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
          }`}
        >
          {favorite ? "❤️ Favorite" : "🤍 Belum Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;