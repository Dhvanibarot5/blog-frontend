import React, { useState } from "react";

const BlogForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // State to hold image
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newBlog = {
        title,
        content,
        image,
        date: new Date().toLocaleDateString(),
      };
      onAdd(newBlog);
      setTitle("");
      setContent("");
      setImage(null);
      setIsFormVisible(false); // Close form after submission
    }
  };

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store image URL
      };
      reader.readAsDataURL(file); // Create image preview
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 p-4"
      style={{
        background: "url('') center/cover no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        className="w-100 w-sm-75 w-md-50 w-lg-40 p-5 bg-white shadow-lg rounded-4 border-0"
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
        }}
      >
        {!isFormVisible ? (
          <button
            onClick={() => setIsFormVisible(true)}
            className="btn btn-lg w-100 text-white fs-5"
            style={{
              background: "linear-gradient(45deg, #ff6b81, #f06595)",
              borderRadius: "10px",
              transition: "background 0.3s ease",
            }}
          >
            Add New Blog
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2
              className="text-center text-dark mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.8rem" }}
            >
              Create a New Blog
            </h2>

            <div className="mb-4">
              <label htmlFor="title" className="form-label text-dark fw-bold">
                Blog Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control border-0 shadow-sm p-3"
                placeholder="Enter blog title"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="content" className="form-label text-dark fw-bold">
                Blog Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control border-0 shadow-sm p-3"
                placeholder="Write your blog content here"
                rows="6"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="form-label text-dark fw-bold">
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control border-0 shadow-sm p-3"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              />
              {image && (
                <div className="mt-3 text-center">
                  <img
                    src={image}
                    alt="preview"
                    style={{
                      maxWidth: "200px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn w-100 py-3 text-white fs-5"
              style={{
                background: "linear-gradient(45deg, #ff6b81, #f06595)",
                borderRadius: "10px",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "#f06595")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "linear-gradient(45deg, #ff6b81, #f06595)")
              }
            >
              Publish Blog
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogForm;
