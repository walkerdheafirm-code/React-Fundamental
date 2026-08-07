const MovieStats = ({ total, showing, favorite }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center">
          <p className="text-sm font-medium text-slate-500">Total Film</p>
          <p className="text-2xl font-bold text-slate-800">{total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center">
          <p className="text-sm font-medium text-slate-500">Sedang Tayang</p>
          <p className="text-2xl font-bold text-emerald-600">{showing}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center">
          <p className="text-sm font-medium text-slate-500">Favorite</p>
          <p className="text-2xl font-bold text-rose-500">{favorite}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieStats;