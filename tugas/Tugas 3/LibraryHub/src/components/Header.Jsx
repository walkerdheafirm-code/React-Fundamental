export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">📚 LibraryHub</h1>
        <span className="text-sm bg-indigo-700 px-3 py-1 rounded-full">
          Sistem Perpustakaan Digital
        </span>
      </div>
    </header>
  );
}