import React from 'react';
import { X, Star, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductModal({ product, onClose, onToggleWishlist }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition z-10 cursor-pointer"
          >
            <X size={20} className="text-gray-600" />
          </motion.button>

          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold uppercase text-blue-600">{product.category}</span>
                <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                {product.status}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-amber-500">
                <Star size={16} className="fill-amber-400" />
                <span className="text-sm font-bold ml-1">{product.rating}</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">Sisa Stok: <strong className="text-gray-800">{product.stock}</strong></span>
            </div>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">{product.description}</p>

            <div className="mt-6 pt-4 border-t flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Total Harga</p>
                <p className="text-xl font-bold text-blue-600">Rp {product.price.toLocaleString('id-ID')}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onToggleWishlist(product.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
                  product.isWishlist
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <Heart size={16} className={product.isWishlist ? "fill-red-500" : ""} />
                {product.isWishlist ? "Disukai" : "Tambah Favorit"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}