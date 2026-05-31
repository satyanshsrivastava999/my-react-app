import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    import { useState } from "react";

export default function TravelWebPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#ddeeff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      
      <h1 style={{ fontSize: "2.6rem", fontWeight: "bold", color: "#1565c0", textAlign: "center", margin: "0 0 24px 0" }}>My Travel Website</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "24px" }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" alt="Beach sunset" style={{ width: "260px", height: "180px", objectFit: "cover", border: "3px solid #1565c0", borderRadius: "8px" }} />
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80&crop=entropy&sig=2" alt="Crowded beach" style={{ width: "260px", height: "180px", objectFit: "cover", border: "3px solid #1565c0", borderRadius: "8px" }} />
      </div>

      <p style={{ textAlign: "center", maxWidth: "520px", fontSize: "1rem", color: "#222", lineHeight: "1.7", margin: "0 0 28px 0" }}>
        Travelling helps us explore new places, experience different cultures, and create unforgettable memories with friends and family.
      </p>

      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: hovered ? "#0d47a1" : "#1976d2", color: "#fff", fontSize: "1rem", padding: "10px 36px", border: "none", borderRadius: "6px", cursor: "pointer", transition: "background 0.2s" }}
      >
        Explore
      </button>
    </div>
  );
}
</>
