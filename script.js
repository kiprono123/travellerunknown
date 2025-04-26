import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Search, User } from "lucide-react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import "tailwindcss/tailwind.css";

const products = [
  {
    id: 1,
    title: "Explorer Backpack",
    description: "Durable and stylish backpack for long journeys.",
    image: "https://source.unsplash.com/random/400x300?backpack",
    price: 89.99
  },
  {
    id: 2,
    title: "Travel Jacket",
    description: "Weather-resistant jacket for unpredictable climates.",
    image: "https://source.unsplash.com/random/400x300?jacket",
    price: 129.99
  },
  {
    id: 3,
    title: "Adventure Tent",
    description: "Lightweight tent for solo and duo explorers.",
    image: "https://source.unsplash.com/random/400x300?tent",
    price: 199.99
  }
];

function TravellerUnknown() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <header className="flex items-center justify-between p-4 bg-gray-950 shadow-lg">
          <h1 className="text-2xl font-bold text-white tracking-wide uppercase">Traveller Unknown</h1>
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-gray-300 cursor-pointer" />
            <Link to="/cart">
              <ShoppingCart className="w-6 h-6 text-gray-300 cursor-pointer" />
            </Link>
            <Link to="/login">
              <User className="w-6 h-6 text-gray-300 cursor-pointer" />
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<MainProducts addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainProducts({ addToCart }) {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-lg">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">{product.title}</h2>
              <p className="text-gray-400 mb-2">{product.description}</p>
              <p className="text-lg font-semibold mb-4 text-white">${product.price.toFixed(2)}</p>
              <Button onClick={() => addToCart(product)} className="w-full bg-red-600 text-white hover:bg-red-700">Add to Cart</Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </main>
  );
}

export default TravellerUnknown;
