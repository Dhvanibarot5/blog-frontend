import React, { useState, useEffect } from "react";

const BlogDetails = ({ blog, onBack, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(blog.title || "");
  const [content, setContent] = useState(blog.content || "");
  const [image, setImage] = useState(blog.image || "");

  // To update the form fields whenever the blog prop changes
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.image);
    }
  }, [blog]);

  const handleEdit = () => {
    // Pass the updated blog data to the parent component
    onEdit(blog.id, { title, content, image });
    setIsEditing(false); // Switch off editing mode
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-5 border-0"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fafafa",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {isEditing ? (
        <>
          <h2
            className="h4 mb-4 text-gradient"
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Edit Blog
          </h2>
          <div className="mb-4">
            <label htmlFor="editTitle" className="form-label text-dark font-weight-bold">
              Title
            </label>
            <input
              type="text"
              id="editTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control border-2 border-primary shadow-sm"
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="editContent" className="form-label text-dark font-weight-bold">
              Content
            </label>
            <textarea
              id="editContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control border-2 border-primary shadow-sm"
              rows="6"
              style={{ borderRadius: "8px" }}
            />
          </div>

          {/* Image Upload while editing */}
          <div className="mb-4">
            <label htmlFor="editImage" className="form-label text-dark font-weight-bold">
              Change Image
            </label>
            <input
              id="editImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control border-2 border-primary shadow-sm"
              style={{ borderRadius: "8px" }}
            />
            {image && (
              <div className="mt-3 text-center">
                <img src={image} alt="Preview" style={{ maxWidth: "200px", borderRadius: "10px" }} />
              </div>
            )}
          </div>

          <div className="d-flex justify-content-start gap-3">
            <button onClick={handleEdit} className="btn btn-success rounded-pill px-4 py-2">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary rounded-pill px-4 py-2">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2
            className="h4 mb-4 text-dark"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {title}
          </h2>
          <p
            className="text-muted mb-3"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "1.1rem",
              color: "#555",
            }}
          >
            {content}
          </p>
          <p className="text-muted small mb-4">Posted on: {blog.date}</p>

          {/* Display image if exists */}
          {image && (
            <div className="text-center mt-3">
              <img
                src={image}
                alt="Blog"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
          )}

          <div className="mt-3 d-flex justify-content-start gap-3">
            <button onClick={() => setIsEditing(true)} className="btn btn-primary rounded-pill px-4 py-2">
              Edit
            </button>
            <button onClick={() => onDelete(blog.id)} className="btn btn-danger rounded-pill px-4 py-2">
              Delete
            </button>
            <button onClick={onBack} className="btn btn-secondary rounded-pill px-4 py-2">
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
