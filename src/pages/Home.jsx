import React from "react";
import { BsTruck, BsGift, BsPhoneFill, BsCreditCard, BsCurrencyDollar } from "react-icons/bs";

const HomeBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100 w-full">
      {/* Main Banner */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start" style={{
        backgroundImage: "url('https://cdn.vox-cdn.com/thumbor/fy_bvnDIHeCCbSB4nhbNqNAcooY=/0x0:1960x1307/1960x1307/filters:focal(980x654:981x655)/cdn.vox-cdn.com/uploads/chorus_asset/file/25437166/Apple_iPad_Air_2024_Lifestyle_Image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h4 className="text-sm text-orange-500 font-semibold">SUPERCHARGED FOR PROS.</h4>
        <h1 className="text-3xl font-bold mt-2">iPad S13+ Pro</h1>
        <p className="mt-2 text-gray-700">
          From <span className="font-semibold">$999.00</span> or{" "}
          <span className="font-semibold">$41.62/mo.</span> for 24 mo. Footnote*
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          BUY NOW
        </button>
      </div>

      {/* Smaller Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Card 1 */}
        <div
          className="bg-blue-100 p-4 rounded-lg shadow-md bg-cover bg-center"
          style={{
            backgroundImage: "url('https://www.apple.com/v/macbook-air/s/images/overview/design/color/design_side_midnight__flnancj2vlme_large_2x.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h4 className="text-sm text-orange-500 font-semibold">BEST SALE</h4>
          <h3 className="text-lg font-semibold">Laptops Max</h3>
          <p className="mt-1 text-gray-700">
            From <span className="font-semibold">$1699.00</span> or{" "}
            <span className="font-semibold">$64.62/mo.</span>
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-md bg-cover bg-center"
          style={{
            backgroundImage: "url('https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-air-availability_colors_10162020_big.jpg.large.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h4 className="text-sm text-orange-500 font-semibold">NEW ARRIVAL</h4>
          <h3 className="text-lg font-semibold">Buy iPad Air</h3>
          <p className="mt-1 text-gray-700">
            From <span className="font-semibold">$599.00</span> or{" "}
            <span className="font-semibold">$49.91/mo.</span> for 12 mo. *
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-green-100 p-4 rounded-lg shadow-md bg-cover bg-center"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVIh8E_c2p9lHsScgbwgk1ugzJgpOReGAag&s')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h4 className="text-sm text-orange-500 font-semibold">15% OFF</h4>
          <h3 className="text-lg font-semibold">Smartwatch 7</h3>
          <p className="mt-1 text-gray-700">Shop the latest band styles and colors.</p>
        </div>

        {/* Card 4 */}
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-md bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.macrumors.com/t/Yho8kTaY1ExNk4y9W2pGpn29z5o=/1600x/article-new/2020/05/airpods-max-2024-colors.jpg')",
          }}
        >
          <h4 className="text-sm text-orange-500 font-semibold">FREE ENGRAVING</h4>
          <h3 className="text-lg font-semibold">AirPods Max</h3>
          <p className="mt-1 text-gray-700">
            High-fidelity playback & ultra-low distortion.
          </p>
        </div>
      </div>
    </div>
      {/* benefits */}
      <div className="bg-gray-50 py-6 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-6 px-6 md:px-12 w-full">
        {/* Benefit 1 */}
        <div className="flex items-center space-x-4">
          <BsTruck className="h-6 w-6 text-gray-800"/>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Free Shipping</h4>
            <p className="text-sm text-gray-600">From all orders over $100</p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="flex items-center space-x-4">
          {/* Replace this with your React Icon */}
          <BsGift className="h-6 w-6 text-gray-800"/>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Daily Surprise Offers</h4>
            <p className="text-sm text-gray-600">Save up to 25% off</p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="flex items-center space-x-4">
          < BsPhoneFill className="h-6 w-6 text-gray-800"/>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Support 24/7</h4>
            <p className="text-sm text-gray-600">Shop with an expert</p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="flex items-center space-x-4">
          <BsCurrencyDollar className="h-6 w-6 text-gray-800"/>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Affordable Prices</h4>
            <p className="text-sm text-gray-600">Get factory direct price</p>
          </div>
        </div>

        {/* Benefit 5 */}
        <div className="flex items-center space-x-4">
          <BsCreditCard className="h-6 w-6 text-gray-800"/>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Secure Payments</h4>
            <p className="text-sm text-gray-600">100% Protected Payments</p>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-gray-50 py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12">
        {/* Category Card */}
        {[
          { title: "Computers & Laptop", items: "8 Items", img: "catbanner-01" },
          { title: "Cameras & Videos", items: "10 Items", img: "catbanner-02" },
          { title: "Smart Television", items: "12 Items", img: "catbanner-03" },
          { title: "Smartwatches", items: "13 Items", img: "catbanner-04" },
          { title: "Music & Gaming", items: "4 Items", img: "catbanner-05" },
          { title: "Mobiles & Tablets", items: "5 Items", img: "catbanner-06" },
          { title: "Headphones", items: "6 Items", img: "catbanner-07" },
          { title: "Accessories", items: "10 Items" },
          { title: "Portable Speakers", items: "8 Items" },
          { title: "Home Appliances", items: "6 Items" },
        ].map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={`/images/category/${category.img}.png`}
              alt={category.title}
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600">{category.items}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HomeBanner;