import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  console.log(blog);
  
  return (
    <div className="blog-card shadow-sm">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 py-2 px-2">
            <div className="blog-card-image">
              <img src={blog.image} alt="Blog" />
              <div className="blog-card-date">
                <p>{blog.createdAt.slice(8, 10)}</p>
                <p>{months[blog.createdAt.slice(5, 7) - 1]}</p>
              </div>
            </div>
            <div className="blog-card-content">
              <h5>{blog.title}</h5>
              <p>{blog.description.slice(0, 100)}</p>
              <NavLink to={`/blogs/${blog._id}`} className="read-more-link">Read More</NavLink>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard