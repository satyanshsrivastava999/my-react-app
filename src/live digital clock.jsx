import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <h1>{time}</h1>;
}

export default App;