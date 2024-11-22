import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    if (operation === "increase") {
      setQuantity(quantity + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-wrapper min-h-screen bg-gray-100 py-5">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-800">
            Home
          </a>{" "}
          / Your Shopping Cart
        </div>

        {/* Cart Table */}
        <div className="bg-white shadow-md rounded-lg p-5">
          <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-200 pb-3 mb-3">
            <div className="col-span-6 text-gray-800 font-bold">Product</div>
            <div className="col-span-2 text-center text-gray-800 font-bold">Price</div>
            <div className="col-span-2 text-center text-gray-800 font-bold">Quantity</div>
            <div className="col-span-2 text-right text-gray-800 font-bold">Total</div>
          </div>

          {/* Cart Item */}
          <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-200 pb-3">
            {/* Product Details */}
            <div className="col-span-6 flex items-center gap-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg border"
              />
              <div>
                <h3 className="text-gray-800 font-semibold">
                  Kids headphones bulk 10 pack multi-colored for students
                </h3>
                <p className="text-sm text-gray-600">Size: S</p>
                <p className="text-sm text-gray-600">Color: #A85A5A</p>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-2 text-center text-gray-800">$100.00</div>

            {/* Quantity Selector */}
            <div className="col-span-2 text-center">
              <div className="flex justify-center items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-10 text-center border border-gray-300 rounded"
                  value={quantity}
                  readOnly
                />
                <button
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="col-span-2 text-right flex items-center justify-end gap-4">
              <span className="text-gray-800">$100.00</span>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => console.log("Remove Item")}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex justify-between items-center">
          <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
            Continue Shopping
          </button>
          <div className="text-right space-y-2">
            <p className="text-gray-600">
              <span className="font-bold">Subtotal:</span> $100.00
            </p>
            <p className="text-sm text-gray-500">Taxes and shipping calculated at checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
