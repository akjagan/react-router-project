import React from 'react';
import { Link } from 'react-router-dom';

const ProductBox = ({ id, title, price, description, category, image, rating, imgHeight, addToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation to product detail page
    addToCart({ id, title, price, image }); // Add product to cart
  };

  return (
    <div className="relative">
      <Link to={`/product/${id}`} className="block">
        <div className="bg-white shadow p-4 rounded">
          <img src={image} alt={title} className={`w-full ${imgHeight} object-cover mb-2`} />
          <h3 className="font-semibold text-gray-800 text-md">{title}</h3>
          <p className="text-gray-600">${price}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < Math.floor(rating.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">({rating.count})</span>
          </div>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="right-4 bottom-4 absolute bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductBox;
