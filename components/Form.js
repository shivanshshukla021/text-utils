import React, { useState } from "react";

export default function Form(props) {
  const touppercase = () => {
    // console.log("uppercase");
    let n = text.toLocaleUpperCase();
    setText(n);
    props.showalert("Converted to Uppercase", "success");
  };

  const tolowercase = () => {
    // console.log("lowerrcase");
    let n = text.toLocaleLowerCase();
    setText(n);
    props.showalert("Converted to Lowercase", "success");
  };

  const clearall = () => {
    setText("");
  };
  const handlecopy = () => {
    var text = document.getElementById("box");
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    props.showalert("copied", "success");
  };

  const handleonchamge = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div id="container">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label mx-2 bold"
          >
            Write Here
          </label>
          <textarea
            className="form-control"
            id="box"
            rows="8"
            value={text}
            onChange={handleonchamge}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={touppercase}
          disabled={text.length === 0}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={tolowercase}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={handlecopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-danger mx-3"
          onClick={clearall}
          disabled={text.length === 0}
        >
          ClaerAll
        </button>
      </div>

      <div id="container" className="mx-3">
        <h2>{props.title}</h2>
        <h4>Your Summary</h4>
        <p>
          {" "}
          Total Words{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Total letters are {text.length}
        </p>
      </div>
    </>
  );
}
