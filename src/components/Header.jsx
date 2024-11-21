import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 and free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end mb-0 text-white ">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 7987122057">
                  +91 7987122057
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">DevCorner</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product"
                  aria-label="Search Product"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-4" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/">
                    <img src="" alt="" />
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src="" alt="" />
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src="" alt="" />
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src="" alt="" />
                    <p></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
