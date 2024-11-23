import React from "react";
import BlogCard from "../components/BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";
import { useEffect } from "react";
const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog?.blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  return (
    <div className="blog-wrapper home-wrapper-2 py-5 bg-zinc-100">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Show by category</h3>
              <div>
                <ul className="ps-0">
                  {blogs?.length > 0 &&
                    blogs?.map((blog) => (
                      <li key={blog._id}>{blog.category}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogs?.length > 0 &&
                blogs?.map((blog) => (
                  <div className="col-6" key={blog._id}>
                    <BlogCard blog={blog} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
