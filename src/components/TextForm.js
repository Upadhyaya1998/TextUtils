import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  /* Functionality Check */

  const handleUpClick = () => {
    console.log("Upper Case Was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase successfylly","success")

  };

  const handleOnChange = (event) => {
    console.log("Handle On Change", text);
    setText(event.target.value);
  };

  const handleLowClick = () => {
    console.log("Lower Case Button was Clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () =>{
    console.log("Clear Button was clicked");
    let newText ='';
    setText(newText);

  }

  //Correct way to just the state of the above text is

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Enter Text Here
          </label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style = {{backgroundColor:props.mode==='dark'?'grey':'white',
            color:props.mode==='dark'?'white':'grey' }}
          ></textarea>
        </div>

        <div className="container mb-3">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Button
          </button>

        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          Number of Words : {text.split(" ").length} <br />
          Number of Characters : {text.length}
        </p>
        <h2>Preview of the Entered text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Set Your Heading Here",
};
