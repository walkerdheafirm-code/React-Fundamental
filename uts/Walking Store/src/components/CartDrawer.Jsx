import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="bg-white dark:bg-slate-900 w-full max-w-md h-full shadow-2xl flex flex-col justify-between p-6 text-slate-800 dark:text-slate-100"
        >
          {/* Header Cart */}
          <div>
            <div className="flex justify-between items-center border-b border-gray-100 dark:border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-blue-600" />
                <h2 className="font-bold text-lg">Keranjang Belanja</h2>
              </div>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer">
                <X size={20} />
              </button>
            </div>

            {/* Item List */}
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <ShoppingBag size={48} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm">Keranjang kamu masih kosong</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center bg-gray-50 dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-slate-700">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 transition"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 transition"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 dark:border-slate-800 pt-4 space-y-4">
              <div className="flex justify-between items-center font-bold">
                <span className="text-sm">Total Pembayaran:</span>
                <span className="text-lg text-blue-600 dark:text-blue-400">Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
              <button
                onClick={() => alert("Fitur Checkout Berhasil Simulasi!")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg cursor-pointer text-sm"
              >
                Checkout Sekarang
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}