import React from "react";

const ProductCard = () => {
  return (
    <div className="col-12 ">
      <div className="card shadow-sm ">
        <img
          src="https://via.placeholder.com/300x200"
          className="card-img-top"
          alt="Product Image"
        />
        <div className="card-body">
          <h5 className="card-title">Product Title</h5>
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
