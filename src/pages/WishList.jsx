import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getUserWishlist } from '../features/users/userSlice'
import { addToWishlist } from '../features/products/productSlice'

const WishList = () => {
  const dispatch = useDispatch()
  const { wishlist } = useSelector((state) => state.auth.wishlist)
  console.log(wishlist);
  
  useEffect(() => {
    dispatch(getUserWishlist())
  }, [wishlist])

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id))
  }
  return (
    <div className="wishlist-wrapper home-wrapper-2 py-5 bg-zinc-100">
          <div className="container-xxl">
              <p className="fw-bold fs-5 mb-4">Your Wishlist</p>
              <div className="row"
        >
          { wishlist?.length === 0 && (
            <h5 className="text-center fw-bold">No items found in wishlist</h5>
          )}
          {wishlist?.map((product, index) => (
            <div className="col-3" key={index}>
            <div className="card shadow-sm position-relative">
              <img
                src={product?.images[0].url}
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body">
                  <h5 className="card-title">{ product?.title }</h5>
                <p className="card-text">
                 { product?.description }
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">${ product?.price }</span>
                  <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>
              </div>
                <div className="position-absolute top-0 end-0 m-2 bg-white rounded-circle p-2" 
                style={{ cursor: 'pointer' }} >
                   <FaTimes 
                onClick={() => removeFromWishlist(product._id)} 
              />
             </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WishList