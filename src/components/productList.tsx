// src/components/ProductList.tsx
import React from "react";
import type { Product } from "../types";
import "./styles/ProductList.css";

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export default function ProductList({ products, addToCart }: ProductListProps) {
  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
