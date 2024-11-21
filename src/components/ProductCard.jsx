import React from "react";

const ProductCard = () => {
  return (
    <div class="col-md-4">
      <div class="card shadow-sm">
        <img
          src="https://via.placeholder.com/300x200"
          class="card-img-top"
          alt="Product Image"
        />
        <div class="card-body">
          <h5 class="card-title">Product Title</h5>
          <p class="card-text">
            A short description of the product. This gives a brief overview of
            what it is.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="text-primary fw-bold">$29.99</span>
            <button class="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
