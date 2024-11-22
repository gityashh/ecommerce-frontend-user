import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="blog-card shadow-sm">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 py-2 px-2">
            <div className="blog-card-image">
              <img src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog" />
              <div className="blog-card-date">
                <p>24</p>
                <p>NOV</p>
              </div>
            </div>
            <div className="blog-card-content">
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <NavLink to="/blogs/:id" className="read-more-link">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard