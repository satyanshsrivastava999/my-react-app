import { useState } from "react";

function App() {
  const quotes = [
    "Never Give Up",
    "Stay Consistent",
    "Believe In Yourself",
    "Dream Big",
    "Work Hard"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const random =
      quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(random);
  };

  return (
    <>
      <h2>{quote}</h2>

      <button onClick={generateQuote}>
        New Quote
      </button>
    </>
  );
}

export default App;