import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import Markdown from 'react-markdown';
function App() {
  const [code, setCode] = useState(`function sum(){
              return 1 + 2;
}`)
async function reviewCode(){
  // axios.post('http://localhost:3000/ai/get-review', {code})
  // .then(res => {
  //   console.log(res.data);
  // })
  // .catch(err => {
  //   console.log(err);
  // })
  const response = await axios.post('http://localhost:3000/ai/get-review', {code})
  // console.log(response.data);
  setReview(response.data);
}
const [review, setReview] = useState(``); 
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
        <div className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
         <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown> 
        </div>
    </main>
    </>
  )
}

export default App
