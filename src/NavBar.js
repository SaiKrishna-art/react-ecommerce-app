import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Get total number of items in the cart
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="flex justify-between items-center bg-green-700 text-white p-4 shadow-md">
      {/* Company Name / Home Link */}
      <h1 className="text-2xl font-bold">
        <Link to="/">GreenLeaf</Link>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="relative hover:underline">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white px-2 py-1 text-xs rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
