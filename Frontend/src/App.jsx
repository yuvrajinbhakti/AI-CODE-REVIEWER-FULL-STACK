import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
function App() {
  const [code, setCode] = useState(`function sum(){
              return 1 + 2;
}`)
useEffect(() => {
  prism.highlightAll();
})
  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor
          value={code}
          onValueChange={setCode}
          highlight={code => prism.highlight(code, prism.languages.javascript , 'javascript')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            border: '1px solid #ddd',
            height: '100%',
            width: '100%',
            borderRadius: "5px",
          }}
          />
        </div>
        <div className="review">Review</div>
        </div>
        <div className="right"></div>
    </main>
    </>
  )
}

export default App
