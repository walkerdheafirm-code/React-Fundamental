function SearchBar({ searchTerm, setSearchTerm, filterLocation, setFilterLocation, filterStatus, setFilterStatus, sortBy, setSortBy }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-8 max-w-5xl mx-auto flex flex-wrap gap-4 items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 min-w-[240px]">
        <input
          type="text"
          placeholder="Cari nama pekerjaan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Filter Lokasi */}
      <select
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
      >
        <option value="">Semua Lokasi</option>
        <option value="Jakarta">Jakarta</option>
        <option value="Bandung">Bandung</option>
        <option value="Surabaya">Surabaya</option>
        <option value="Yogyakarta">Yogyakarta</option>
        <option value="Semarang">Semarang</option>
      </select>

      {/* Filter Status */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
      >
        <option value="">Semua Status</option>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
      </select>

      {/* Sorting */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white font-medium text-slate-700"
      >
        <option value="default">Urutkan: Default</option>
        <option value="name-asc">Nama A-Z</option>
        <option value="salary-low">Gaji Terendah</option>
        <option value="salary-high">Gaji Tertinggi</option>
      </select>
    </div>
  );
}

export default SearchBar;