import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Message from './components/Home';
import Shop from './pages/Shop';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

const productsData: Product[] = [
  { id: 1, title: 'Stylish Jacket', price: 79.99, image: 'https://pics.craiyon.com/2023-09-26/5bb721f4f09e4893b8fcf16e97b4692b.webp' },
  { id: 2, title: 'Cool Sneakers', price: 49.99, image: 'https://images.bestsellerclothing.in/data/JJ/13-march-2025/901857502_g0.jpg?width=415&height=550&mode=fill&fill=blur&format=auto' },
  { id: 3, title: 'Elegant Hat', price: 19.99, image: 'https://th.bing.com/th/id/OIP.q55HyhbTHhG0hG3Uu-aEPgHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
];

const App: React.FC = () => {
  // Cart state: array of products with quantity
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Add product to cart or increase quantity
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity ?? 0) + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart entirely
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link></li>
            <li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></li>
          </ul>
        </div>
      </nav>
      <br />

      <Routes>
        <Route path="/" element={<Message />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/shop"
          element={<Shop products={productsData} addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
};

export default App;
