import React, { useState } from 'react';
import ReactStars from 'react-stars';

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [quantity, setQuantity] = useState(1)

  // Mock data for user reviews
  const userReviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent product! Highly recommend.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great quality but a bit expensive.',
    },
    {
      id: 3,
      name: 'Mark Wilson',
      rating: 3,
      comment: 'Average product. Could be better.',
    },
  ];

  return (
    <div className="product-details-wrapper min-h-screen py-5 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section - Product Images */}
          <div className="col-span-6">
            <div className="flex flex-col gap-4">
              <img
                src="https://via.placeholder.com/600"
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="grid grid-cols-4 gap-2">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Thumbnail 1"
                  className="w-full h-auto object-cover rounded-lg border border-gray-300"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Thumbnail 2"
                  className="w-full h-auto object-cover rounded-lg border border-gray-300"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Thumbnail 3"
                  className="w-full h-auto object-cover rounded-lg border border-gray-300"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Thumbnail 4"
                  className="w-full h-auto object-cover rounded-lg border border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Product Info */}
          <div className="col-span-6">
            <h1 className="text-2xl font-bold mb-3">
              Kids Headphones Bulk 10 Pack Multi-Colored for Students
            </h1>
            <p className="text-xl text-yellow-500 font-semibold mb-2">$100.00</p>
            <div className="flex items-center gap-2 mb-4">
              <ReactStars count={5} size={24} color2={'#ffd700'} edit={false} value={4} />
              <span className="text-gray-600">(2 reviews)</span>
              <a href="#" className="text-yellow-500 underline ml-2">
                Write a review
              </a>
            </div>

            {/* Product Details */}
            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <p>
                <span className="font-bold">Type:</span> Headsets
              </p>
              <p>
                <span className="font-bold">Brand:</span> Havells
              </p>
              <p>
                <span className="font-bold">Categories:</span> airpods, cameras, computers & laptops,
                headphones, mini speaker, our store, portable speakers, smart
                phones, smartwatches
              </p>
              <p>
                <span className="font-bold">Tags:</span> headphones, laptop, mobile, oppo, speaker
              </p>
              <p>
                <span className="font-bold">SKU:</span> SKU027
              </p>
              <p>
                <span className="font-bold">Availability:</span> 541 In Stock
              </p>
            </div>

            {/* Size and Color Options */}
            <div className="flex items-center gap-6 mb-4">
              {/* Size */}
              <div>
                <p className="font-bold mb-1">Size</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded hover:border-black">
                    S
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:border-black">
                    L
                  </button>
                </div>
              </div>

              {/* Color */}
              <div>
                <p className="font-bold mb-1">Color</p>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center gap-6 mb-6">
              {/* Quantity Selector */}
              <div>
                <p className="font-bold mb-1">Quantity</p>
                <input
                  type="number"
                  className="w-16 px-2 py-1 border border-gray-300 rounded"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                  Add to Cart
                </button>
                <button className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  Buy It Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="description-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="description-box bg-white p-4 rounded-lg shadow-md">
                <h3 className="description-title">Description</h3>
                <p className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="reviews-header flex justify-between items-end">
                <div>
                  <h4 className="reviews-title">Customer Reviews</h4>
                  <div className="reviews-stars flex items-center gap-2">
                    <ReactStars
                      count={5}
                      size={24}
                      color2={'#ffd700'}
                      edit={false}
                      value={4}
                    />
                    <p className="reviews-count mb-0">based on 100 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className="write-review-link text-yellow-500 underline"
                      href=""
                    >
                      Write a review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form mt-4">
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="star-rating" className="form-label">
                      Rating:
                    </label>
                    <ReactStars
                      count={5}
                      size={24}
                      color2={'#ffd700'}
                      value={0}
                      half={false}
                      onChange={(newRating) => console.log(newRating)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="review-text" className="form-label">
                      Your Review:
                    </label>
                    <textarea
                      id="review-text"
                      className="form-control"
                      rows="4"
                      placeholder="Write your review here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary bg-dark text-white border-0"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
              <div className="user-reviews mt-5">
                <h5 className="reviews-title mb-4">What Others Are Saying</h5>
                {userReviews.map((review) => (
                  <div
                    key={review.id}
                    className="user-review bg-white p-3 rounded-lg shadow-sm mb-3"
                  >
                    <div className="d-flex justify-content-between">
                      <h6 className="reviewer-name font-bold">
                        {review.name}
                      </h6>
                      <ReactStars
                        count={5}
                        size={20}
                        color2={'#ffd700'}
                        edit={false}
                        value={review.rating}
                      />
                    </div>
                    <p className="review-comment text-gray-700">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;