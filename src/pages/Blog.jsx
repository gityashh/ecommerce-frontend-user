import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../features/blogs/blogSlice';

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog?.currentBlog);
  
  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="py-6">
        <div className="container-xxl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-dark">Blog Details</h1>
        </div>
      </header>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Blog Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {blog?.title}
          </h2>

          {/* Blog Metadata */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="mr-4">By {blog?.author}</span>
            <span>{blog?.createdAt}</span>
          </div>

          {/* Blog Image */}
          <img
            src="https://via.placeholder.com/800x400"
            alt="Blog"
            className="rounded-lg w-full h-auto mb-6"
          />

          {/* Blog Content */}
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              {blog?.description}
            </p>
            <p>
                {blog?.description}
            </p>
            <p>
             
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;