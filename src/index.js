import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const { reset } = props;
  return (
    <button onClick={reset}>
      Reset
    </button>
  );
};

const Application = () => {
  const [ text, setText ] = useState("");

  const reset = () => {
    console.log("reset");
    setText("");
  };

  return (
    <main>
      <input placeholder="Type your name"></input>
      <Button reset={reset} />
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
