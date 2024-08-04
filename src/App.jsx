import React, { useState } from "react";
import * as bip39 from "bip39";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const generateMnemonic = () => {
    const mnemonic = bip39.generateMnemonic();
    setMnemonic(mnemonic);
    setCopySuccess("");
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(mnemonic)
      .then(() => {
        toast.success("Mnemonic copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy mnemonic.");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mnemonic Generator</h1>
        <button onClick={generateMnemonic}>Generate Mnemonic</button>
        {mnemonic && (
          <>
            <p>{mnemonic}</p>
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
            {copySuccess && <p>{copySuccess}</p>}
          </>
        )}
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
