import React from 'react';
import "./App.css";
import CodeEditor from './CodeEditor.js';
function App() {
  return (
    <div className="App">
      <div className="Header">Simple Code Editor</div>
      <CodeEditor />
    </div>
  );
}

export default App;