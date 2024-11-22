import React, { useState } from 'react'
import ReactStars from 'react-stars'

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true)
  return (
    <div className="main-product-wrapper min-h-screen py-5 home-wrapper-2 bg-zinc-100 px-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
    
          </div>
        </div>
      </div>
      <section className="bg-white py-8 px-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos.
        </p>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-8 px-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              Customer Reviews
            </h4>
            <div className="flex items-center gap-2">
              <ReactStars
                count={5}
                size={24}
                color2={'#ffd700'}
                edit={false}
                value={4}
              />
              <p className="text-gray-600">based on 100 reviews</p>
            </div>
          </div>
          {orderedProduct && (
            <div>
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Write a review
              </a>
            </div>
          )}
        </div>

        {/* Review Cards */}
        <div className="space-y-6">
          {/* Single Review */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-semibold text-gray-800">
                John Doe
              </h5>
              <ReactStars
                count={5}
                size={20}
                color2={'#ffd700'}
                edit={false}
                value={5}
              />
            </div>
            <p className="text-gray-600">
              Amazing product! The quality is top-notch and delivery was
              quick. Highly recommended!
            </p>
          </div>

          {/* Another Review */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-semibold text-gray-800">
                Jane Smith
              </h5>
              <ReactStars
                count={5}
                size={20}
                color2={'#ffd700'}
                edit={false}
                value={4}
              />
            </div>
            <p className="text-gray-600">
              Very satisfied with the product. Could improve the packaging,
              but overall great!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct
