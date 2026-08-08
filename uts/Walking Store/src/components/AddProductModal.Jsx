import React, { useState } from 'react';
import { X, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AddProductModal({ isOpen, onClose, onAddProduct }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    category: 'Sepatu',
    price: '',
    rating: 4.5,
    stock: 10,
    status: 'Ready Stock',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    description: 'Deskripsi produk baru.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    onAddProduct({
      ...formData,
      id: Date.now(),
      price: Number(formData.price),
      stock: Number(formData.stock),
      rating: Number(formData.rating),
      isWishlist: false
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-slate-800 dark:text-slate-100"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <PlusCircle className="text-blue-600" size={22} /> Tambah Produk Baru
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <div>
            <label className="block text-xs font-semibold mb-1">Nama Produk</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
              placeholder="Contoh: Nike Air Force 1"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Kategori</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
              >
                <option value="Sepatu">Sepatu</option>
                <option value="Pakaian">Pakaian</option>
                <option value="Aksesori">Aksesori</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Harga (Rp)</label>
              <input
                required
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
                placeholder="750000"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Stok</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
              >
                <option value="Ready Stock">Ready Stock</option>
                <option value="Produk Baru">Produk Baru</option>
                <option value="Best Seller">Best Seller</option>
                <option value="Diskon">Diskon</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">URL Gambar</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl transition mt-4 cursor-pointer"
          >
            Simpan Produk
          </button>
        </form>
      </motion.div>
    </div>
  );
}