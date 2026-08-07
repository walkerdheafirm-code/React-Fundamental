import BookCard from "./BookCard";

const booksData = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", kategori: "Novel", tahun: 2005, status: true },
  { id: 2, judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", kategori: "Sejarah/Fiksi", tahun: 1980, status: false },
  { id: 3, judul: "Filosofi Teras", penulis: "Henry Manampiring", kategori: "Self Improvement", tahun: 2018, status: true },
  { id: 4, judul: "Atomic Habits", penulis: "James Clear", kategori: "Self Improvement", tahun: 2018, status: true },
  { id: 5, judul: "Cantik Itu Luka", penulis: "Eka Kurniawan", kategori: "Novel", tahun: 2002, status: false },
  { id: 6, judul: "Clean Code", penulis: "Robert C. Martin", kategori: "Edukasi/Teknologi", tahun: 2008, status: true },
  { id: 7, judul: "Dunia Sophie", penulis: "Jostein Gaarder", kategori: "Filsafat", tahun: 1991, status: false },
  { id: 8, judul: "Laut Bercerita", penulis: "Leila S. Chudori", kategori: "Novel", tahun: 2017, status: true },
];

export default function BookList() {
  return (
    <main className="container mx-auto p-6 flex-grow">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Daftar Koleksi Buku</h2>
        <p className="text-gray-600 text-sm">Menampilkan katalog buku terpilih di LibraryHub</p>
      </div>

      {/* Grid Responsif (Responsive Layout, Flex / Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            judul={book.judul}
            penulis={book.penulis}
            kategori={book.kategori}
            tahun={book.tahun}
            status={book.status}
          />
        ))}
      </div>
    </main>
  );
}