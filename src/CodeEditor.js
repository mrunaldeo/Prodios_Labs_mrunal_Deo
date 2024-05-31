import React, { useState, useEffect, useRef } from "react";

import Prism from "prismjs";    // Import Prism.js library for syntax highlighting 
import "./App.css";    //Import custom CSS
import "prismjs/themes/prism.css";  // Import Prism.js theme CSS

const CodeEditor = () => {
    //state to hold the code input
  const [code, setCode] = useState("");
  const codeRef = useRef(null); // useRef used to reference the code element for syntax highlighting
    
  useEffect(() => {          //useEffect is used for highlights the code whenever it chnages.
    if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
      } // HighlightElement use to highlight current element when it changes usng Prish.js
  }, [code]);// this ensures the efferc runs when 'code' changes


  return (
    <div className="code-editor">

      <textarea
        value={code}            // binds the testarea value to the code state
        onChange={(e) => setCode(e.target.value)}     //update the code state when input chnages
        placeholder="Type Something Here....."           //placeholder for the testarea
        spellCheck="false" // Disable spell check for code input
      />

      {/*className="language-js" tells Prism.js to highlight the code as JavaScript.*/}
      {/* use <pre>  because it preserves whitespace, maintains consistent alignment with a monospace font , better to use with prism */}
      <pre>
        {/* Use useRef to create a continuous reference without triggering re-render for managing DOM*/}
        <code ref={codeRef} className="language-js">
          {code}{/*display the code input */}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;