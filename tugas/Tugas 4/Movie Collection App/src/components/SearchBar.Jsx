const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      <input
        type="text"
        placeholder="Cari judul film..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-sm"
      />
    </div>
  );
};

export default SearchBar;