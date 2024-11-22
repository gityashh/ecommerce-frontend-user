import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
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
            A Beautiful Sunday Morning Renaissance
          </h2>

          {/* Blog Metadata */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="mr-4">By John Doe</span>
            <span>11 June 2022</span>
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
              You're only as good as your last collection, which is an enormous
              pressure. I think there is something about simplicity that makes
              it so attractive. The idea of something being luxurious will
              always be about rarity and exclusivity. That is the most
              sustainable source of fashion.
            </p>
            <p>
              I think the idea of mixing luxury and mass-market fashion is very
              modern. It's about accessibility and about mixing everything
              together. Those fashion designers are just crazy; but aren't we
              all? You have to stay true to your heritage; that's what your
              brand is about.
            </p>
            <p>
              Fashion is not something that exists in dresses only. Fashion is
              in the sky, in the street; fashion has to do with ideas, the way
              we live, what is happening. I love things that age well - things
              that don't date, that stand the test of time and that become
              living examples of the absolute best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;