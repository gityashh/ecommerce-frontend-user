import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Blog = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(getBlogs())
  }, [blogs])
  return (

    <div className="bg-gray-100 min-h-screen">
      {blogs.map((blog) => (
        <div key={blog._id}>
          {/* Header Section */}
      <header className="bg-yellow-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white">Blog Details</h1>
        </div>
      </header>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Blog Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {blog.title}
          </h2>

          {/* Blog Metadata */}
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>{ blog.category }</span>
            <span>{blog.createdAt}</span>
          </div>

          {/* Blog Image */}
          <img
            src={blog.image}
            alt="Blog"
            className="rounded-lg w-full h-auto mb-6"
          />

          {/* Blog Content */}
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              {blog.description.slice(0, 100)}
            </p>
            <p>
              {blog.description.slice(100, 200)}
            </p>
            <p>
              {blog.description.slice(200, 300)}
            </p>
            <p>
              {blog.description.slice(300)}
            </p>
          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;