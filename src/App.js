// src/App.js
import React, { useState } from 'react';
import './styles.css';
const romajiConv = require('@koozaki/romaji-conv');

const RomanjiConverter = () => {
  const [romanjiInput, setRomanjiInput] = useState('');
  const [hiraganaOutput, setHiraganaOutput] = useState('');
  const [katakanaOutput, setKatakanaOutput] = useState('');

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setRomanjiInput(input);

    if (input.trim() !== '') {
      const hiragana = romajiConv.toHiragana(input);
      const katakana = romajiConv.toKatakana(input);

      setHiraganaOutput(hiragana);
      setKatakanaOutput(katakana);
    } else {
      setHiraganaOutput('');
      setKatakanaOutput('');
    }
  };

  return (
    <div>
      <strong>Romanji:</strong>
      <input
        type="text"
        id="romanjiInput"
        value={romanjiInput}
        onChange={handleInputChange}
      />

      <div className="output" onClick={() => handleCopyToClipboard(hiraganaOutput)}>
        <strong>Hiragana:</strong> {hiraganaOutput}
      </div>
      <div className="output" onClick={() => handleCopyToClipboard(katakanaOutput)}>
        <strong>Katakana:</strong> {katakanaOutput}
      </div>

      <footer>
        Desenvolvido por Pedro Rodrigues, estudante de Nihongo 1A.
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RomanjiConverter />
    </div>
  );
}

export default App;
