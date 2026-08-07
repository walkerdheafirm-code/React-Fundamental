const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-6 px-4 shadow-lg mb-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-wide text-red-500">
          🎬 CineList
        </h1>
        <p className="text-slate-400 text-sm font-medium">
          Daftar Film Favorit Kamu
        </p>
      </div>
    </header>
  );
};

export default Header;