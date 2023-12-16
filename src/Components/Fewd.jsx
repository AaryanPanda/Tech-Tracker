/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import Navbar from "./Navbar";
import ques from "../assets/Ques.png";
import { ThemeContext } from "../App";
import lightbg from "../assets/lightbg.jpeg";
import darkbg from "../assets/darkbg.png";

function Fewd(props) {
  const questions = [
    {
      text: "Which CSS property is used to control the layout of child elements in a flex container?",
      options: [
        { id: 0, option: "A", text: "Align-items", isCorrect: false },
        { id: 1, option: "B", text: "Flex-auto", isCorrect: false },
        { id: 2, option: "C", text: "Justify-content", isCorrect: false },
        { id: 3, option: "D", text: "Flex-direction", isCorrect: true },
      ],
    },

    {
      text: "What is the purpose of the React 'context' API?",
      options: [
        { id: 0, option: "A", text: "To handle asynchronous operations in React", isCorrect: false },
        { id: 1, option: "B", text: "To manage global state accessible to all components", isCorrect: true },
        { id: 2, option: "C", text: "To define the layout and structure of a React component", isCorrect: false },
        { id: 3, option: "D", text: "To create animations and transitions in React", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the 'async' keyword in JavaScript?",
      options: [
        { id: 0, option: "A", text: "It prevents a function from being executed asynchronously", isCorrect: false },
        { id: 1, option: "B", text: "It indicates that a function is synchronous", isCorrect: false },
        { id: 2, option: "C", text: "It declares a function as asynchronous", isCorrect: true },
        { id: 3, option: "D", text: " It defines an array of asynchronous functions", isCorrect: false },
      ],
    },
    {
      text: "What is React Router used for in a React application?",
      options: [
        { id: 0, option: "A", text: "Manages the state of a React component", isCorrect: false },
        { id: 1, option: "B", text: "Enables server-side rendering in React", isCorrect: false },
        { id: 2, option: "C", text: "Provides navigation and routing for a single-page application", isCorrect: true },
        { id: 3, option: "D", text: "Controls the animation of React components", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the 'Array.prototype.map' method?",
      options: [
        { id: 0, option: "A", text: "Creates a new array by transforming each element", isCorrect: true },
        { id: 1, option: "B", text: " Modifies the original array", isCorrect: false },
        { id: 2, option: "C", text: "Removes elements from an array", isCorrect: false },
        { id: 3, option: "D", text: "Adds elements to the beginning of an array", isCorrect: false },
      ],
    },

    {
      text: "How does the CSS property 'position: relative'; affect child elements?",
      options: [
        { id: 0, option: "A", text: "Positions child elements relative to the viewport", isCorrect: false },
        { id: 1, option: "B", text: "Positions child elements relative to their normal position", isCorrect: true },
        { id: 2, option: "C", text: "Removes child elements from the document flow", isCorrect: false },
        { id: 3, option: "D", text: "Floats child elements to the right", isCorrect: false },
      ],
    },
    {
      text: "What does the 'useState' hook in React primarily address?",
      options: [
        { id: 0, option: "A", text: "Handles form submissions", isCorrect: false },
        { id: 1, option: "B", text: "Manages state in a class component", isCorrect: false },
        { id: 2, option: "C", text: "Performs side effects in functional components", isCorrect: false },
        { id: 3, option: "D", text: "Initializes and updates state in functional components", isCorrect: true },
      ],
    },
    {
      text: "What is the purpose of the CSS property 'z-index'?",
      options: [
        { id: 0, option: "A", text: " Sets the depth of an element in 3D space", isCorrect: false },
        { id: 1, option: "B", text: "Specifies the visibility of an element to user", isCorrect: false },
        { id: 2, option: "C", text: "Controls the stacking order of positioned elements", isCorrect: true },
        { id: 3, option: "D", text: "Adjusts the width of an element", isCorrect: false },
      ],
    },
    {
      text: "How does the event delegation pattern work in JavaScript?",
      options: [
        { id: 0, option: "A", text: " It involves capturing events during the bubbling phase", isCorrect: true },
        { id: 1, option: "B", text: " It delegates events to the document root", isCorrect: false },
        { id: 2, option: "C", text: "It assigns multiple event listeners to the same element", isCorrect: false },
        { id: 3, option: "D", text: "It dynamically assigns events based on user interactions", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the React 'key' attribute when rendering a list of elements?",
      options: [
        { id: 0, option: "A", text: "It defines a unique identifier for the list", isCorrect: false },
        { id: 1, option: "B", text: "It specifies the order of elements in the list", isCorrect: false },
        { id: 2, option: "C", text: "It is used for styling the list items", isCorrect: false },
        { id: 3, option: "D", text: "It defines a unique identifier for the list", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [highlightState, setHighlightState] = useState(false);

  const handleClick = (value) => {
    if (value) {
      props.updateScore();
    }

    currentQuestion != questions.length - 1
      ? setcurrentQuestion(currentQuestion + 1)
      : props.displayResult();

    console.log(currentQuestion, questions.length - 1);
  };

  const handleHighlight = () => {
    setHighlightState(true);
  };

  const handleLowlight = () => {
    setHighlightState(false);
  };

  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Navbar />

      <div className="flex-column">
        <div
          id="main-container"
          style={{ backgroundColor: darkMode ? "#181818" : "#d6c29c" }}
        >
          <div
            id="quiz-container"
            className="flex-colummn"
            style={{
              backgroundImage: darkMode ? `url(${darkbg})` : `url(${lightbg})`,
              border: darkMode ? "2px solid #181818" : "2px solid #D6C29C",
            }}
          >
            <div id="flex-start">
              <div className="flex" id="ques-no">
                <img src={ques} />
                <h2 style={{ color: darkMode ? "#343434" : "#000000" }}>
                  {" "}
                  {currentQuestion + 1} of {questions.length}{" "}
                </h2>
              </div>

              <div id="space"></div>
            </div>

            <div id="prime-div">
              <h7
                style={{
                  color: highlightState ? "red" : "inherit",
                  fontSize: "28px",
                  fontWeight: highlightState ? "900" : "400",
                }}
              >
                {questions[currentQuestion].text}
              </h7>
            </div>

            <div>
              <ul>
                {questions[currentQuestion].options.map((option) => (
                  <div id="opt" key={option.id}>
                    <div
                      id="opt-color"
                      style={{
                        color: "#000000",
                        backgroundColor: darkMode ? "#A8A8A8" : "#d9b285",
                      }}
                    >
                      {option.option}
                    </div>

                    <li key={option.id}>
                      <button
                        onClick={() => handleClick(option.isCorrect)}
                        style={{
                          color: darkMode ? "#DEDEDE" : "#000000",
                          backgroundColor: darkMode ? "#404040" : "#EADFCB",
                          border: darkMode
                            ? "2px solid #A8A8A8"
                            : "2px solid #d9b285",
                        }}
                      >
                        {option.text}
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            </div>

            <div id="bottom-buttons" className="flex">
              <button
                id="highlight"
                onClick={handleHighlight}
                style={{ backgroundColor: "#ff7373", border: "1px solid red" }}
              >
                Highlight
              </button>

              <button
                id="nhighlight"
                onClick={handleLowlight}
                style={{
                  backgroundColor: "#d3d3d3",
                  border: "1px solid red",
                  letterSpacing: "0.1",
                }}
              >
                Remove Highlight
              </button>
            </div>

            <button
              id="quit"
              onClick={props.displayHome}
              style={{
                backgroundColor: darkMode ? "#1E1E1E" : "#fcfcfc",
                border: "2px solid #ffa500",
                color: "#ffa500",
                fontWeight: "800",
              }}
            >
              QUIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fewd;
