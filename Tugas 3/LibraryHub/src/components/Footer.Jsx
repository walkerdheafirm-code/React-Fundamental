export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center mt-auto border-t border-gray-700">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">LibraryHub</span>. Tugas Pertemuan 5 & 6 React.
        </p>
      </div>
    </footer>
  );
}