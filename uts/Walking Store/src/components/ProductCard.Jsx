import React from 'react';
import { Heart, Star, Eye, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onToggleWishlist, onSelectProduct, onAddToCart }) {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Best Seller': return 'bg-amber-500 text-white';
      case 'Produk Baru': return 'bg-blue-500 text-white';
      case 'Diskon': return 'bg-red-500 text-white';
      case 'Stok Habis': return 'bg-gray-500 text-white';
      case 'Stok Terbatas': return 'bg-orange-500 text-white';
      default: return 'bg-emerald-500 text-white';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 flex flex-col justify-between"
    >
      <div className="relative group overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80";
          }}
        />
        
        {/* Wishlist Button */}
        <motion.button
          whileTap={{ scale: 1.3 }}
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full shadow hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer z-10"
        >
          <Heart
            size={18}
            className={product.isWishlist ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-slate-300"}
          />
        </motion.button>

        {/* Status Badge */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeStyle(product.status)}`}>
          {product.status}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">{product.category}</span>
          <h3 className="font-bold text-gray-800 dark:text-slate-100 text-base mt-1 line-clamp-1">{product.name}</h3>
          
          <div className="flex items-center mt-2 space-x-1 text-amber-500">
            <Star size={16} className="fill-amber-400" />
            <span className="text-xs font-medium text-gray-600 dark:text-slate-400">{product.rating}</span>
            <span className="text-xs text-gray-400 dark:text-slate-500 ml-2">| Stok: {product.stock}</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] text-gray-400 dark:text-slate-500">Harga</p>
            <p className="font-bold text-blue-600 dark:text-blue-400 text-sm">Rp {product.price.toLocaleString('id-ID')}</p>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Tombol Detail */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectProduct(product)}
              className="p-2 text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition cursor-pointer"
              title="Lihat Detail"
            >
              <Eye size={16} />
            </motion.button>

            {/* Tombol Tambah ke Keranjang */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddToCart(product)}
              className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg transition cursor-pointer shadow-md shadow-blue-500/20"
            >
              <ShoppingCart size={14} /> + Keranjang
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}