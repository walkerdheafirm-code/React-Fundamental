import { useState, useEffect } from 'react';
import { initialProducts } from './data/products';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Banner from './components/Banner';
import SearchFilter from './components/SearchFilter';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import ThemeToggle from './components/ThemeToggle';
import CartDrawer from './components/CartDrawer';
import AddProductModal from './components/AddProductModal';
import { Store, ShoppingBag, PlusCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("walking_store_products");
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [showOnlyWishlist, setShowOnlyWishlist] = useState(false);

  // Fungsi Efek Suara
  const playPopSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio context fallback jika diproteksi browser
    }
  };

  // Fungsi Masuk ke Katalog dengan Simulasi Loading
  const handleStartCatalog = () => {
    playPopSound();
    setIsLoading(true);
    setShowLanding(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    localStorage.setItem("walking_store_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const showNotification = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesWishlist = showOnlyWishlist ? product.isWishlist : true;
    return matchesSearch && matchesCategory && matchesWishlist;
  });

  const handleToggleWishlist = (id) => {
    playPopSound(); // panggil audio
    setProducts(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextState = !item.isWishlist;
          showNotification(nextState ? `❤️ Disukai: ${item.name}` : `💔 Dihapus: ${item.name}`);
          return { ...item, isWishlist: nextState };
        }
        return item;
      })
    );
  };

  const handleAddToCart = (product) => {
    playPopSound(); // panggil audio
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`🛒 ${product.name} masuk keranjang!`);
  };

  const handleAddProduct = (newProduct) => {
    playPopSound(); // panggil audio
    setProducts(prev => [newProduct, ...prev]);
    showNotification(`✨ Produk baru ${newProduct.name} berhasil ditambahkan!`);
  };

  return (
    <AnimatePresence mode="wait">
      {showLanding ? (
        <LandingPage key="landing" onStart={handleStartCatalog} />
      ) : isLoading ? (
        <div key="loading" className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
          <Loader2 size={48} className="animate-spin text-blue-500 mb-4" />
          <p className="text-sm font-medium tracking-wide">Memuat Katalog Produk...</p>
        </div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`min-h-screen relative pb-10 transition-colors duration-300 ${
            darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-800'
          }`}
        >
          {/* Header */}
          <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-40 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <Store size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Walking Store</h1>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Katalog Produk React Fundamental</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

                <button
                  onClick={() => {
                    playPopSound();
                    setIsAddModalOpen(true);
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-emerald-600 text-white px-3 py-2 rounded-xl hover:bg-emerald-700 transition cursor-pointer"
                >
                  <PlusCircle size={16} />
                  <span className="hidden sm:inline">Tambah Produk</span>
                </button>

                <button
                  onClick={() => {
                    playPopSound();
                    setIsCartOpen(true);
                  }}
                  className="relative p-2 bg-gray-100 dark:bg-slate-800 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition cursor-pointer text-gray-700 dark:text-slate-200"
                >
                  <ShoppingBag size={20} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => {
                    playPopSound();
                    setShowLanding(true);
                  }}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800 px-3 py-2 rounded-xl border border-blue-100 dark:border-slate-700 cursor-pointer"
                >
                  Intro
                </button>
              </div>
            </div>
          </header>

          {/* Main Body */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Banner />
            <Dashboard products={products} />
            
            <SearchFilter
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              categories={categories}
              showOnlyWishlist={showOnlyWishlist}
              setShowOnlyWishlist={setShowOnlyWishlist}
            />

            <ProductList
              products={filteredProducts}
              onToggleWishlist={handleToggleWishlist}
              onSelectProduct={(product) => {
                playPopSound();
                setSelectedProduct(product);
              }}
              onAddToCart={handleAddToCart}
            />
          </main>

          {/* Modals & Cart Drawer */}
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onToggleWishlist={handleToggleWishlist}
            />
          )}

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cart}
            onUpdateQuantity={(id, qty) => {
              playPopSound();
              if (qty <= 0) setCart(cart.filter(i => i.id !== id));
              else setCart(cart.map(i => i.id === id ? { ...i, quantity: qty } : i));
            }}
            onRemoveItem={(id) => {
              playPopSound();
              setCart(cart.filter(i => i.id !== id));
            }}
          />

          <AddProductModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            onAddProduct={handleAddProduct}
          />

          {toast && (
            <div className="fixed bottom-6 right-6 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-3 rounded-2xl shadow-2xl z-50 text-sm font-medium animate-bounce border border-gray-700">
              {toast}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}