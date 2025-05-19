// src/pages/Shop.tsx
import React from "react";
import ProductList from "../components/ProductList";
import type { Product } from "../types";


interface ShopProps {
  addToCart: (product: Product) => void;
  products: Product[];
}

export default function Shop({ addToCart, products }: ShopProps) {
  return (
    <div>
      <h1 className="product-title">🛍 Shop All Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}
