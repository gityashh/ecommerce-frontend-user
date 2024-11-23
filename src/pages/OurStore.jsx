import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
  
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const { products, isLoading, isError, isSuccess, message } = useSelector((state) => state.product)
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.auth.wishlist)

  useEffect(() => {
    dispatch(getProducts());
  }, [wishlist]);

  return (
    <>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Show by category</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Mobile</li>
                    <li>Laptop</li>
                    <li>Camera</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3 ">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title mb-2">Availability</h5>
                  <div className="form-check">
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="inStock"
                      />
                      <label htmlFor="inStock" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="outOfStock"
                      />
                      <label htmlFor="outOfStock" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title mb-2">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="from"
                        placeholder="From"
                      />
                      <label htmlFor="from">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="to"
                        placeholder="To"
                      />
                      <label htmlFor="to">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title mb-2">Colors</h5>
                  <div>
                    <div className="mb-3">
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h5 className="sub-title mb-2">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size-1"
                    />
                    <label htmlFor="size-1" className="form-check-label">
                      M
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size-1"
                    />
                    <label htmlFor="size-1" className="form-check-label">
                      L
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size-1"
                    />
                    <label htmlFor="size-1" className="form-check-label">
                      XL
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="size-1"
                    />
                    <label htmlFor="size-1" className="form-check-label">
                      XXL
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap gap-10 align-items-center gap-10 ">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Camera
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Watch
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex">
                                      <div>
                                      <div className="w-50">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>Product Name</h5>
                    <p>$200</p>
                    </div>
                  </div>
                </div>
              </div>
                      </div>
                      <div className="col-9">
                          <div className="filter-sort-grid mb-6">
                              <div className="d-flex align-items-center gap-10">
                                  <p className="mb-0">Sort by:</p>
                                  <div>
                                      <select className="form-select" id="" name="">
                                          <option value="best-selling" selected="selected" >Best-selling</option>
                                          <option value="title-ascending">
                                          </option>
                                          <option value="title-descending">Title: Z to A</option>
                                          <option value="date-ascending">Date: Old to New</option>
                                          <option value="date-descending">Date: New to Old</option>
                                      </select>
                                  </div>
                  <p>Total Products: 100</p>
                </div>
                          </div>
            <div className="product-list  w-full">
              <div className="row">
                
                  {products.map((product) => (
                    <div className="col-3">
                      <ProductCard wishlist={wishlist} key={product._id} id={product._id} {...product} />
                    </div>
                    ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;