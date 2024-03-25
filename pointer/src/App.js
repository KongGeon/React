import logo from "./logo.svg";
import "./App.css";
import react, { useEffect } from "react";
import { initCursor } from "./Event/cursor";

function App() {
  useEffect(() => {
    initCursor({
      enableAutoTextCursor: true,
      enableLighting: true,
      blockStyle: {
        radius: "auto",
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="link-area">
          <a href="" data-cursor="link">
            <img src="/img_test01.png" alt="" />
          </a>
          <button
            data-cursor="block"
            style={{
              margin: "10px",
              borderRadius: " 2px",
              border: "1px solid #000",
            }}
          >
            tttttt
          </button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p data-cursor="text">data-cursor="text"</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="block"
        >
          data-cursor="block"
        </a>
        <button
          data-cursor="block"
          style={{
            margin: "10px",
            padding: "2px 4px",
            borderRadius: " 2px",
            border: "1px solid #000",
          }}
        >
          data-cursor="block"
        </button>
      </header>
    </div>
  );
}

export default App;
