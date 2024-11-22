import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Importing a heart icon from react-icons

const ProductCard = ({ productId }) => {
  return (
    <div className="col-12">
      <div className="card shadow-sm position-relative">
        {/* Add a wishlist heart icon with absolute positioning */}
        <div className="wishlist-icon position-absolute" style={{ top: '10px', right: '10px' }}>
          <Link to="/wishlist">
            <FaHeart style={{ color: 'red', fontSize: '24px' }} />
          </Link>
        </div>
        {/* Wrap the image and title with a Link to the single-product page */}
        <Link to={`/single-product/${productId}`}>
          <img
            src="https://via.placeholder.com/300x200"
            className="card-img-top"
            alt="Product Image"
          />
          <div className="card-body">
            <h5 className="card-title">Product Title</h5>
          </div>
        </Link>
        <div className="card-body">
          <p className="card-text">
            A short description of the product. This gives a brief overview of
            what it is.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-primary fw-bold">$29.99</span>
            <button className="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;