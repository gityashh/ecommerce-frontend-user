import React, { useState } from 'react';
import ReactStars from 'react-stars';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../features/products/productSlice';

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const { product } = useSelector((state) => state?.product);

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

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Product link copied to clipboard!');
  };

  return (
    <div className="product-details-wrapper min-h-screen py-5 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section - Product Images */}
          <div className="col-span-6">
            <div className="flex flex-col gap-4">
              {product?.images && product.images.length > 0 && product.images[0]?.url && (
                <img
                  src={product.images[0].url}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
              <div className="grid grid-cols-4 gap-2">
                {product?.images?.map((image) => (
                  <img
                    key={image?._id}
                    src={image?.url}
                    alt="Product Image"
                    className="w-full h-auto object-cover rounded-lg border border-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Product Info */}
          <div className="col-span-6">
            <h1 className="text-2xl font-bold mb-3">{product?.title}</h1>
            <p className="text-xl text-yellow-500 font-semibold mb-2">${product?.price}</p>
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
                <span className="font-bold">Type:</span> {product?.category}
              </p>
              <p>
                <span className="font-bold">Brand:</span> {product?.brand}
              </p>
              <p>
                <span className="font-bold">Tags:</span> {product?.tags}
              </p>
              <p>
                <span className="font-bold">Availability:</span> {product?.quantity > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            {/* Size and Color Options */}
            <div className="flex items-center gap-6 mb-4">
              {/* Color */}
              <div>
                <p className="font-bold mb-1">Color</p>
                <div className="flex gap-2">
                  {product?.color?.map((color) => (
                    <div
                      key={color._id}
                      className="w-8 h-8 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.title }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity, Wishlist, and Actions */}
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
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={copyLink}
                >
                  Copy Link
                </button>
                <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Shipping and Returns */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Shipping & Returns</h3>
              <p className="text-sm text-gray-600">
                Free shipping on orders over $50. Returns accepted within 30 days of delivery. Contact customer service for
                more details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="description-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="description-box bg-white p-4 rounded-lg shadow-md">
                <h3 className="description-title">Description</h3>
                <p className="description-text">{product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="reviews-title">Customer Reviews</h4>
              {userReviews.map((review) => (
                <div
                  key={review.id}
                  className="user-review bg-white p-3 rounded-lg shadow-sm mb-3"
                >
                  <h6 className="reviewer-name font-bold">{review.name}</h6>
                  <ReactStars count={5} size={20} color2={'#ffd700'} edit={false} value={review.rating} />
                  <p className="review-comment text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;