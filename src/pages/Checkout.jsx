import React from "react";

const Checkout = () => {
  return (
    <div className="checkout-page min-h-screen bg-gray-100 py-5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Contact & Shipping Info */}
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Digitic</h1>
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-6">
            <span>Cart</span> <span className="mx-2">/</span>
            <span>Information</span> <span className="mx-2">/</span>
            <span className="text-gray-800 font-semibold">Shipping</span>
          </nav>

          {/* Contact Information */}
          <section className="mb-6">
            <h2 className="text-lg font-medium mb-3">Contact Information</h2>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-800">Navdeep Dahiya (monud0232@gmail.com)</p>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Log out
              </a>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="email-offers"
                className="form-checkbox text-blue-600"
              />
              <label htmlFor="email-offers" className="text-gray-600 text-sm">
                Email me with news and offers
              </label>
            </div>
          </section>

          {/* Shipping Address */}
          <section>
            <h2 className="text-lg font-medium mb-3">Shipping Address</h2>
            <form>
              {/* Saved Address */}
              <div className="mb-4">
                <label htmlFor="saved-address" className="block text-gray-600 text-sm mb-1">
                  Saved addresses
                </label>
                <select
                  id="saved-address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option>United States (Navdeep Dahiya)</option>
                </select>
              </div>

              {/* Country/Region */}
              <div className="mb-4">
                <label htmlFor="country" className="block text-gray-600 text-sm mb-1">
                  Country/Region
                </label>
                <select
                  id="country"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option>United States</option>
                </select>
              </div>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="first-name" className="block text-gray-600 text-sm mb-1">
                    First name (optional)
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    defaultValue="Navdeep"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-600 text-sm mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    defaultValue="Dahiya"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-600 text-sm mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="123 Street Name"
                />
              </div>

              {/* Apartment/Suite */}
              <div className="mb-4">
                <label htmlFor="apartment" className="block text-gray-600 text-sm mb-1">
                  Apartment, suite, etc. (optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Apt 101"
                />
              </div>

              {/* City, State, ZIP */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-gray-600 text-sm mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-gray-600 text-sm mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-gray-600 text-sm mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </form>
          </section>

          {/* Continue Button */}
          <div className="mt-6">
            <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">
              Continue to Shipping
            </button>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <div className="flex gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-16 h-16 object-cover rounded-lg border"
              />
              <div>
                <p className="text-gray-800 font-semibold">
                  Kids headphones bulk 10 pack multi-colored for students
                </p>
                <p className="text-sm text-gray-600">S / #A85A5A</p>
              </div>
            </div>
            <p className="text-gray-800 font-medium">$100.00</p>
          </div>

          {/* Subtotal, Shipping, and Taxes */}
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>$100.00</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Shipping</p>
              <p>Calculated at next step</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Estimated taxes</p>
              <p>$18.00</p>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-4 text-xl font-semibold text-gray-800">
            <p>Total</p>
            <p>$118.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
