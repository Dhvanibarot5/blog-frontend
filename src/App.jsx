import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import BlogList from "./components/BlogList";
import CreatePost from "./components/CreatePost";
import BlogPost from "./components/BlogPost";
import EditPost from "./components/EditPost";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", title: "First Post", content: "This is the first blog post.", date: new Date().toLocaleString() },
    { id: "2", title: "Second Post", content: "This is the second blog post.", date: new Date().toLocaleString() },
  ]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const updatePost = (id, updatedPost) => {
    const updatedPosts = posts.map((post) => (post.id === id ? updatedPost : post));
    setPosts(updatedPosts);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar here */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<BlogList posts={posts} deletePost={deletePost} />} />
          <Route path="/post/:id" element={<BlogPost posts={posts} />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
          <Route path="/edit/:id" element={<EditPost posts={posts} updatePost={updatePost} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
