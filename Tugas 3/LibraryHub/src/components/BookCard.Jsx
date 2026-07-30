export default function BookCard({ judul, penulis, kategori, tahun, status }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100">
      <div>
        {/* Kategori Badge */}
        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2.5 py-0.5 rounded-full font-semibold mb-3">
          {kategori}
        </span>

        {/* Judul & Penulis */}
        <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{judul}</h2>
        <p className="text-sm text-gray-600 mb-2">Penulis: <span className="font-medium text-gray-700">{penulis}</span></p>
        <p className="text-xs text-gray-400 mb-4">Tahun Terbit: {tahun}</p>
      </div>

      {/* Conditional Rendering untuk Status Buku */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">Status:</span>
        {status ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            🟢 Tersedia
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            🔴 Dipinjam
          </span>
        )}
      </div>
    </div>
  );
}