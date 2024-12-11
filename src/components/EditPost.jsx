import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = ({ posts, updatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === id);

  if (!post) return <div>Post not found</div>;

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id,
      title,
      content,
      date: post.date,
    };
    updatePost(id, updatedPost);
    navigate(`/post/${id}`);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
