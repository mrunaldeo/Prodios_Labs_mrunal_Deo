import React, { useState, useEffect, useRef } from "react";

import Prism from "prismjs";  // Prism.js library for syntax highlighting 
import "./App.css";
import "prismjs/themes/prism.css";  //Prism.js theme CSS

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const codeRef = useRef(null); // useRef for referencing the code element

  useEffect(() => {
    if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
      } // HighlightElement use to highlight current element when it changes
  }, [code]);// Trigger useeffect when code changes


  return (
    <div className="code-editor">

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Type Something Here....."
      />

      {/* by using className="language-js" informs Prism.js to highlight the code as JavaScript */}
      {/* use <pre>  because it preserves whitespace, maintains consistent alignment with a monospace font , better to use with prism */}
      <pre>
        {/* Use useRef for creating a persistent reference that doesn't trigger re-renders. It is handy for managing DOM elements and storing values. */}
        <code ref={codeRef} className="language-js">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;