import React, { useState, useEffect } from "react";
import ProductBox from "../Components/ProductBox";

function Products({ addToCart }) {
  // Add addToCart as a prop
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching products: " + error.message);
      setLoading(false);
    }
  };

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredAndSortedProducts = () => {
    let filteredProducts = products;

    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    switch (sortBy) {
      case "price-low-to-high":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "price-high-to-low":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "rating":
        return filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      default:
        return filteredProducts;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="mx-auto px-4 container">
      <div className="flex flex-wrap -mx-4">
        <div className="mb-4 px-4 w-full md:w-1/4">
          <div className="bg-white shadow p-4 rounded">
            <h2 className="mb-4 font-bold">Filter by Category</h2>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block mb-2 ${
                  selectedCategory === category
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}

            <h2 className="mt-6 mb-4 font-bold">Sort by</h2>
            <button
              onClick={() => setSortBy("recommended")}
              className={`block mb-2 ${
                sortBy === "recommended" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Recommended
            </button>
            <button
              onClick={() => setSortBy("price-low-to-high")}
              className={`block mb-2 ${
                sortBy === "price-low-to-high"
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => setSortBy("price-high-to-low")}
              className={`block mb-2 ${
                sortBy === "price-high-to-low"
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Price: High to Low
            </button>
            <button
              onClick={() => setSortBy("rating")}
              className={`block mb-2 ${
                sortBy === "rating" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Rating
            </button>
          </div>
        </div>
        <div className="px-4 w-full md:w-3/4">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedProducts().map((product) => (
              <ProductBox
                key={product.id}
                {...product}
                imgHeight="h-60"
                addToCart={() => addToCart(product)} // Add this line
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;