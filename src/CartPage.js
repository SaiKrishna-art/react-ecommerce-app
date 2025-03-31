import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity } from "./cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total quantity and total price
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Total Items and Total Price */}
          <div className="mb-4 text-lg font-semibold">
            <p>Total Plants in Cart: {totalItems}</p>
            <p>Total Cost: ${totalPrice.toFixed(2)}</p>
          </div>

          {/* Cart Items List */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                {/* Thumbnail & Name */}
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Checkout and Continue Shopping */}
          <div className="mt-6 flex justify-between">
            <Link to="/products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Continue Shopping
            </Link>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Coming Soon
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
