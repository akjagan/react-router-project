import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="mx-auto px-4 py-8 container">
      <h2 className="mb-4 font-bold text-2xl">Products</h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="shadow-md p-4 border rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="mb-4 w-full h-48 object-cover"
            />
            <h3 className="mb-2 font-semibold text-lg">{product.title}</h3>
            <p className="mb-4 text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;