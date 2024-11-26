import React from "react";
import {
  BsTruck,
  BsGift,
  BsPhoneFill,
  BsCreditCard,
  BsCurrencyDollar,
} from "react-icons/bs";
import Marquee from "../components/Marquee";
import BlogCard from "../components/BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBlogs } from "../features/blogs/blogSlice";
  
const HomeBanner = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state?.blog?.blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  return (
    <>
      {/* Main Banner Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12">
          {/* Main Banner */}
          <div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start"
            style={{
              backgroundImage:
                "url('https://cdn.vox-cdn.com/thumbor/fy_bvnDIHeCCbSB4nhbNqNAcooY=/0x0:1960x1307/1960x1307/filters:focal(980x654:981x655)/cdn.vox-cdn.com/uploads/chorus_asset/file/25437166/Apple_iPad_Air_2024_Lifestyle_Image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h4 className="text-sm text-orange-500 font-semibold">
              SUPERCHARGED FOR PROS.
            </h4>
            <h1 className="text-3xl font-bold mt-2">iPad S13+ Pro</h1>
            <p className="mt-2 text-gray-700">
              From <span className="font-semibold">$999.00</span> or{" "}
              <span className="font-semibold">$41.62/mo.</span> for 24 mo.
              Footnote*
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
                backgroundImage:
                  "url('https://www.apple.com/v/macbook-air/s/images/overview/design/color/design_side_midnight__flnancj2vlme_large_2x.jpg')",
              }}
            >
              <h4 className="text-sm text-orange-500 font-semibold">
                BEST SALE
              </h4>
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
                backgroundImage:
                  "url('https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-air-availability_colors_10162020_big.jpg.large.jpg')",
              }}
            >
              <h4 className="text-sm text-orange-500 font-semibold">
                NEW ARRIVAL
              </h4>
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
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVIh8E_c2p9lHsScgbwgk1ugzJgpOReGAag&s')",
              }}
            >
              <h4 className="text-sm text-orange-500 font-semibold">15% OFF</h4>
              <h3 className="text-lg font-semibold">Smartwatch 7</h3>
              <p className="mt-1 text-gray-700">
                Shop the latest band styles and colors.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-gray-100 p-4 rounded-lg shadow-md bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.macrumors.com/t/Yho8kTaY1ExNk4y9W2pGpn29z5o=/1600x/article-new/2020/05/airpods-max-2024-colors.jpg')",
              }}
            >
              <h4 className="text-sm text-orange-500 font-semibold">
                FREE ENGRAVING
              </h4>
              <h3 className="text-lg font-semibold">AirPods Max</h3>
              <p className="mt-1 text-gray-700">
                High-fidelity playback & ultra-low distortion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-6 px-6 md:px-12">
          {[
            {
              icon: <BsTruck />,
              title: "Free Shipping",
              description: "From all orders over $100",
            },
            {
              icon: <BsGift />,
              title: "Daily Surprise Offers",
              description: "Save up to 25% off",
            },
            {
              icon: <BsPhoneFill />,
              title: "Support 24/7",
              description: "Shop with an expert",
            },
            {
              icon: <BsCurrencyDollar />,
              title: "Affordable Prices",
              description: "Get factory direct price",
            },
            {
              icon: <BsCreditCard />,
              title: "Secure Payments",
              description: "100% Protected Payments",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 text-gray-800"
            >
              <div className="h-6 w-6">{benefit.icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12">
          {[
            { title: "Computers & Laptop", items: "8 Items" },
            { title: "Cameras & Videos", items: "10 Items" },
            { title: "Smart Television", items: "12 Items" },
            { title: "Smartwatches", items: "13 Items" },
            { title: "Music & Gaming", items: "4 Items" },
            { title: "Mobiles & Tablets", items: "5 Items" },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.items}</p>
            </div>
          ))}
        </div>
      </div>
      <Marquee />
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Our Latest News
          </h2>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs?.map((blog) => (
              <BlogCard key={blog?._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            featured Products
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
