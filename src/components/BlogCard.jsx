import React from "react";

const BlogCard = ({ date, title, description, image, buttonLabel = "READ MORE" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="rounded-t-lg h-40 w-full object-cover mb-4"
      />

      {/* Content */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <button className="mt-auto bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-500">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;