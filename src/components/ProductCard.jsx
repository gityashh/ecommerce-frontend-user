import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Importing a heart icon from react-icons
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { useEffect } from "react";

const ProductCard = ({  id, title, images, price, wishlist }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(wishlist);
  }, [wishlist])
  return (
    <div className="col-12">
      <div className="card shadow-sm position-relative">
        {/* Add a wishlist heart icon with absolute positioning */}
        <div className="wishlist-icon position-absolute" style={{ top: '10px', right: '10px' }}>
          <div onClick={() => dispatch(addToWishlist(id))}>
            <FaHeart style={{ color: wishlist?.includes(id) ? 'red' : 'gray', fontSize: '24px' }} />
          </div>
        </div>
        {/* Wrap the image and title with a Link to the single-product page */}
        <Link to={`/single-product/${id}`}>
          <div className="product-img">
          <img
            src={images[0].url}
            className="card-img-top"
              alt="Product Image"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </Link>
        <div className="card-body">
          <p className="card-text">
            A short description of the product. This gives a brief overview of
            what it is.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-primary fw-bold">{price}</span>
            <button className="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;