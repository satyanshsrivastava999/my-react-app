import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <textarea
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
    </>
  );
}

export default App;