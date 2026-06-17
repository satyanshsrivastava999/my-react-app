import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    alert(`Welcome ${username}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Login
      </button>
    </>
  );
}

export default App;