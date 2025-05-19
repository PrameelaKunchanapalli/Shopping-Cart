// src/pages/Cart.tsx
import React from "react";
import type { Product } from "../types";
import "./styles/cart.css";

interface CartProps {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
}

export default function Cart({ cartItems, removeFromCart }: CartProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 0),
    0
  );

  const clearCart = () => {
    cartItems.forEach((item) => removeFromCart(item.id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>
                  Qty: {item.quantity} x ${item.price}
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
