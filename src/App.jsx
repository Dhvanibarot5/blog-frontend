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
    <div
      className="min-h-screen py-6"
      style={{
        background:
          "url('https://imgs.search.brave.com/nDkzUkHhWTTAvKc_d_XSgAfMtX8CTcN5GmTgbIMO0r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tLzEwNGM2ODQ3/ZGIwYTk1ZWMwMzYy/NGYzMGI4YjVjZDA4/LzFkZjNlMjc4ZDlm/ODljZjAtZjEvczEy/ODB4MTkyMC8zOTVl/OWQxOWIxNjczMzk0/MGUxMjk0MGMyOTU3/ZjYzMzkxMWVkNGUy/LmpwZw') center/cover no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center text-white font-extrabold text-4xl mb-8" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
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
