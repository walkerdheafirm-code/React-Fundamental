import React from 'react';
import { Package, CheckCircle, XCircle, Heart, Layers } from 'lucide-react';

export default function Dashboard({ products }) {
  const totalProducts = products.length;
  const availableProducts = products.filter(p => p.stock > 0).length;
  const outOfStockProducts = products.filter(p => p.stock === 0).length;
  const wishlistCount = products.filter(p => p.isWishlist).length;
  const categoriesCount = new Set(products.map(p => p.category)).size;

  const stats = [
    { label: "Total Produk", value: totalProducts, icon: Package, color: "bg-blue-500" },
    { label: "Produk Tersedia", value: availableProducts, icon: CheckCircle, color: "bg-green-500" },
    { label: "Produk Habis", value: outOfStockProducts, icon: XCircle, color: "bg-red-500" },
    { label: "Produk Favorit", value: wishlistCount, icon: Heart, color: "bg-pink-500" },
    { label: "Total Kategori", value: categoriesCount, icon: Layers, color: "bg-purple-500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center space-x-3 transition hover:shadow-lg">
            <div className={`${stat.color} p-3 rounded-lg text-white`}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
              <p className="text-xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}