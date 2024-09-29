import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Containers/Home";
import Cart from "./Containers/Cart";
import Products from "./Containers/Products";
import Layout from "./Components/Layout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout cartItemsCount={cartItems.length} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;