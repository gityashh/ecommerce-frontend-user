import React from 'react'
import { FaTimes } from 'react-icons/fa'

const WishList = () => {
  return (
    <div className="wishlist-wrapper home-wrapper-2 py-5 bg-zinc-100">
          <div className="container-xxl">
              <p className="fw-bold fs-5 mb-4">Your Wishlist</p>
              <div className="row"
              >
          <div className="col-3">
            <div className="card shadow-sm position-relative">
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
              <FaTimes className="position-absolute top-0 end-0 m-2" style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList