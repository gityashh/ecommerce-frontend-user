import React from 'react'
import BlogCard from '../components/BlogCard'
const Blogs = () => {
  return (
   <div className="blog-wrapper home-wrapper-2 py-5 bg-zinc-100">
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
                  </div>
                  <div className="col-9">
                    <div className="row">
                        <div className="col-6">
                            <BlogCard />
                          </div>
                          <div className="col-6">
                            <BlogCard />
                          </div>
                          <div className="col-6">
                            <BlogCard />
                        </div>
                    </div>
                  </div>
      </div>
    </div>
   </div>
  )
}

export default Blogs