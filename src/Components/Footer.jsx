import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const categories = [
    { name: "Women's", href: "/" },
    { name: "Men's", href: "/" },
    { name: "Shoes", href: "/" },
    { name: "Watches", href: "/" },
  ];

  const help = [
    { name: "Track Order", href: "/" },
    { name: "Returns", href: "/" },
    { name: "Shipping", href: "/" },
    { name: "FAQs", href: "/" },
  ];

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="mx-auto px-4 max-w-7xl container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4 mb-8">
          <div>
            <h3 className="mb-4 font-bold text-white uppercase">Categories</h3>
            <ul className="mt-4">
              {categories.map((cat, index) => (
                <li key={index} className="my-2 text-sm">
                  <Link
                    to={cat.href}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white uppercase">Help</h3>
            <ul className="mt-4">
              {help.map((item, index) => (
                <li key={index} className="my-2 text-sm">
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 md:col-span-2">
            <div>
              <h3 className="mb-4 font-bold text-white uppercase">
                Get in Touch
              </h3>
              <p className="text-sm">
                Any questions? <br /> Let us know in store at Arun Shopping's or
                call us on +91 9840135126
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-bold text-white uppercase">
                Newsletter
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="block bg-transparent py-2 border-b border-b-gray-500 focus:border-b-gray-300 w-full transition-colors outline-none"
                />
                <button className="bg-white hover:bg-gray-200 mt-4 px-4 py-2 rounded text-gray-900 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-t-gray-800 text-center text-gray-400 text-xs">
          Copyright © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
