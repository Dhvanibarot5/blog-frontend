import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ posts }) => {
  const { id } = useParams(); // Use the `id` from URL
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>; // If no post is found, show a message
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.date}</p>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default BlogPost;
