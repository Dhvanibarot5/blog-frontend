import React from "react";

const BlogList = ({ blogs, onSelect, onDelete }) => {
  return (
    <div
      className="card shadow-lg border-0 p-4"
      style={{
        backgroundColor: "#f7f7f7",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        className="h4 text-center mb-4"
        style={{
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Blog Posts
      </h2>
      {blogs.length > 0 ? (
        <ul className="list-group list-group-flush">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="list-group-item d-flex justify-content-between align-items-center border-0 my-3"
              style={{
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="d-flex">
                {/* Show image if it exists */}
                {blog.image && (
                  <img
                    src={blog.image}
                    alt="Blog"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                )}
                <div>
                  <h3
                    className="h6 text-dark mb-1 text-decoration-underline cursor-pointer"
                    onClick={() => onSelect(blog.id)}
                    style={{
                      cursor: "pointer",
                      color: "#ff6347",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e84a5f")}
                    onMouseLeave={(e) => (e.target.style.color = "#ff6347")}
                  >
                    {blog.title}
                  </h3>
                  <p className="text-muted small mb-0">Posted on: {blog.date}</p>
                </div>
              </div>
              <button
                onClick={() => onDelete(blog.id)}
                className="btn btn-danger btn-sm"
                style={{
                  borderRadius: "50px",
                  padding: "6px 15px",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e84a5f")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#dc3545")}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="alert alert-info text-center"
          role="alert"
          style={{
            backgroundColor: "#ffecb3",
            color: "#6c757d",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          No blogs available. Add a new blog to get started!
        </div>
      )}
    </div>
  );
};

export default BlogList;
