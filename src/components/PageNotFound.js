import React from "react";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "#f88c8c" }}>
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
        Oops! This page could not be found
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "30px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable. Please try again later.
      </p>
      <button
        style={{
          backgroundColor: "#f88c8c",
          color: "#fff",
          padding: "10px 30px",
          borderRadius: "5px",
          fontSize: "1.2rem",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
}

export default PageNotFound;
