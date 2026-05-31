import React from "react";

function Student(props) {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#f5f7fa",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#1976d2" }}>🎓 Student Profile</h2>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="student"
        width="100"
      />

      <h3>Name: {props.name}</h3>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>Marks:</strong> {props.marks}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {props.marks >= 40 ? "✅ Passed" : "❌ Failed"}
      </p>
    </div>
  );
}

export default Student;