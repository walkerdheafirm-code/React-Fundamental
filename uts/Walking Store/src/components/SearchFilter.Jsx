import React from 'react';
import { Search, Heart } from 'lucide-react';

export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  showOnlyWishlist,
  setShowOnlyWishlist
}) {
  return (
    <div className="space-y-4 mb-6">
      {/* Baris 1: Input Pencarian & Tombol Wishlist */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Cari produk impianmu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Tombol Filter Cepat Wishlist */}
        <button
          onClick={() => setShowOnlyWishlist(!showOnlyWishlist)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition border w-full sm:w-auto justify-center ${
            showOnlyWishlist
              ? "bg-red-500 text-white border-red-500 shadow-md"
              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
          }`}
        >
          <Heart size={14} className={showOnlyWishlist ? "fill-white" : "text-red-500"} />
          {showOnlyWishlist ? "Tampilkan Semua Produk" : "Lihat Favorit Saya"}
        </button>
      </div>

      {/* Baris 2: Tab Kategori Visual (Pill Badges) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setCategory("All")}
          className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer ${
            category === "All"
              ? "bg-blue-600 text-white shadow-md shadow-blue-200"
              : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          Semua Kategori
        </button>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer ${
              category === cat
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}