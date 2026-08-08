import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onToggleWishlist, onSelectProduct, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 my-6">
        <p className="text-gray-500 dark:text-slate-400 font-medium">Tidak ada produk yang ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleWishlist={onToggleWishlist}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}