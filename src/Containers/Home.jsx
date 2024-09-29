import React, { useState, useEffect } from "react";
import BannerImg from "./../assets/banner.jpg";
import ProductBox from "../Components/ProductBox";
import CategoryBox from "../Components/CategoryBox";

function Home() {
  const [categories, setCategories] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch categories
      const categoriesResponse = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoriesData = await categoriesResponse.json();

      const formattedCategories = categoriesData.map((category) => ({
        id: category,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        href: `/category/${category}`,
        img: `${category}.jpg`, // You might need to adjust this based on your image naming convention
      }));

      setCategories(formattedCategories);

      // Fetch products
      const productsResponse = await fetch(
        "https://fakestoreapi.com/products?limit=6"
      );
      const productsData = await productsResponse.json();

      setTopRatedProducts(productsData);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data: " + err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="relative h-[500px]">
        <img
          src={BannerImg}
          className="top-0 left-0 absolute w-full h-[500px] object-cover"
          alt="Banner"
        />
        <div className="flex flex-col justify-center items-center bg-white/40 backdrop-blur-sm h-full text-center text-gray-800">
          <h1 className="font-bold text-5xl">New arrivals are here</h1>
          <p className="mx-auto mt-2 w-8/12 font-semibold text-lg">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they're still in
            stock.
          </p>
          <button className="mt-4 btn">Shop New Arrivals</button>
        </div>
      </div>

      <div className="mx-auto my-16 px-4 container">
        <h2 className="mb-4 font-bold text-2xl uppercase">Shop by Category</h2>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryBox key={category.id} {...category} />
          ))}
        </div>
      </div>

      <div className="mx-auto my-16 px-4 container">
        <h2 className="mb-4 font-bold text-2xl uppercase">Trending Products</h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {topRatedProducts.map((product) => (
            <ProductBox key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;