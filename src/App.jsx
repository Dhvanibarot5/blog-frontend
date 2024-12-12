import React, { useState } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import BlogDetails from "./components/BlogDetails";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const addBlog = (blog) => {
    setBlogs([{ ...blog, id: Date.now(), date: new Date().toLocaleDateString() }, ...blogs]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, ...updatedBlog } : blog)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const selectBlog = (id) => {
    const blog = blogs.find((blog) => blog.id === id);
    setSelectedBlog(blog);
  };

  return (
    <div className="min-h-screen py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-black font-extrabold text-4xl mb-8" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
          Personal Blog
        </h1>
        {selectedBlog ? (
          <BlogDetails blog={selectedBlog} onBack={() => setSelectedBlog(null)} onEdit={updateBlog} onDelete={deleteBlog} />
        ) : (
          <>
            <BlogList blogs={blogs} onSelect={selectBlog} onDelete={deleteBlog} />
            <BlogForm onAdd={addBlog} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
