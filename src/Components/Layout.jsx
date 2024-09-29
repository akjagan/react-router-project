import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ cartItemsCount }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemsCount={cartItemsCount} />
      <main className="flex-grow mx-auto px-4 py-8 w-full max-w-7xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
