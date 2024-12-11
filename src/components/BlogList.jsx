import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ posts, deletePost }) => {
  if (posts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-bold">
            <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
          <div className="flex justify-between items-center mt-2">
            <Link to={`/edit/${post.id}`} className="text-blue-500">
              Edit
            </Link>
            <button onClick={() => deletePost(post.id)} className="text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
