import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random().toString(36).substring(7), // Generate a random ID
      title,
      content,
      date: new Date().toLocaleString(),
    };
    addPost(newPost);
    navigate("/"); // Redirect to homepage after creating the post
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
