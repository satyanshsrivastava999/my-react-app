import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <h2>Hello World!</h2>}
    </>
  );
}

export default App;