/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import Navbar from "./Navbar";
import ques from "../assets/Ques.png";
import { ThemeContext } from "../App";
import lightbg from "../assets/lightbg.jpeg";
import darkbg from "../assets/darkbg.png";

function Bocs(props) {

    const questions = [
        {
            text: "Choose the decimal equivalent of the binary number 1001110",
            options: [
                { id: 0, option: "A", text: "66", isCorrect: false },
                { id: 1, option: "B", text: "53", isCorrect: false },
                { id: 2, option: "C", text: "85", isCorrect: false },
                { id: 3, option: "D", text: "78", isCorrect: true },
            ],
        },
    
        {
            text: "Out of the 16-bit input to the CPU, when the first bit is 0, the CPU recognizes it as?",
            options: [
                { id: 0, option: "A", text: "Hack instructions", isCorrect: false },
                { id: 1, option: "B", text: "C-instructions", isCorrect: false },
                { id: 2, option: "C", text: ".asm instructions", isCorrect: false },
                { id: 3, option: "D", text: "A-instructions", isCorrect: true },
            ],
        },
        {
            text: "In the data memory of the Hack Computer, what is stored in the first 16k?",
            options: [
                { id: 0, option: "A", text: "A permanent storage", isCorrect: false },
                { id: 1, option: "B", text: "Data generated by Program", isCorrect: true },
                { id: 2, option: "C", text: "External storage of the component", isCorrect: false },
                { id: 3, option: "D", text: "Memory Chips", isCorrect: false },
            ],
        },
    
        {
            text: "How many different Jump bits can be formed if the bits are j1 and j2 only?",
            options: [
                { id: 0, option: "A", text: "8", isCorrect: false },
                { id: 1, option: "B", text: "12", isCorrect: false },
                { id: 2, option: "C", text: "4", isCorrect: true },
                { id: 3, option: "D", text: "16", isCorrect: false },
            ],
        },
        {
            text: "What is the binary equivalent of the decimal number 26?",
            options: [
                { id: 0, option: "A", text: "11000", isCorrect: false },
                { id: 1, option: "B", text: "11010", isCorrect: true },
                { id: 2, option: "C", text: "11001", isCorrect: false },
                { id: 3, option: "D", text: "11100", isCorrect: false },
            ],
        },
    
        {
            text: "Which of the following is not a type of address mode?",
            options: [
                { id: 0, option: "A", text: "Constant", isCorrect: true },
                { id: 1, option: "B", text: "Direct", isCorrect: false },
                { id: 2, option: "C", text: "Register", isCorrect: false },
                { id: 3, option: "D", text: "Indirect", isCorrect: false },
            ],
        },
        {
            text: "Which of the following Logic is Faster in Hack Computer?",
            options: [
                { id: 0, option: "A", text: "Parallel", isCorrect: false },
                { id: 1, option: "B", text: "Sequential", isCorrect: false },
                { id: 2, option: "C", text: "Combinatorial", isCorrect: true },
                { id: 3, option: "D", text: "Series", isCorrect: false },
            ],
        },
        {
            text: "Which of the following languages is not Object-Oriented",
            options: [
                { id: 0, option: "A", text: "C++", isCorrect: false },
                { id: 1, option: "B", text: "Python", isCorrect: false },
                { id: 2, option: "C", text: "C", isCorrect: true },
                { id: 3, option: "D", text: "Java Script", isCorrect: false },
            ],
        },
        {
            text: "What can be used to avoid Fetch-Execute Cycle Clash",
            options: [
                { id: 0, option: "A", text: "Multiplexer", isCorrect: true },
                { id: 1, option: "B", text: "Nand Chip", isCorrect: false },
                { id: 2, option: "C", text: "D-Mux", isCorrect: false },
                { id: 3, option: "D", text: "Program Counter", isCorrect: false },
            ],
        },
        {
            text: "Which of following is a classic example of WORA concept?",
            options: [
                { id: 0, option: "A", text: "JS Node", isCorrect: false },
                { id: 1, option: "B", text: "C++", isCorrect: false },
                { id: 2, option: "C", text: "Python", isCorrect: false },
                { id: 3, option: "D", text: "JAVA", isCorrect: true },
            ],
        },
    ];
    
    
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [highlightState, setHighlightState] = useState(false);

  const handleClick = (value) => {
    if (value) {
      props.updateScore();
    }

    currentQuestion != questions.length-1 
      ? setcurrentQuestion(currentQuestion + 1)
      : props.displayResult();

    console.log(currentQuestion,questions.length-1)
  };

  const handleHighlight = () => {
    setHighlightState(true);
  };

  const handleLowlight = () => {
    setHighlightState(false);
  };

  const {darkMode} = useContext(ThemeContext);

  return (
    <>
      <Navbar />

      <div className="flex-column">

       <div id="main-container" style={{backgroundColor: darkMode ? '#181818' : '#d6c29c'}}>
        
        <div id="quiz-container" className="flex-colummn" style={{backgroundImage : darkMode ? `url(${darkbg})` : `url(${lightbg})`,border: darkMode ? '2px solid #181818' : '2px solid #D6C29C'}}>
          
          <div id="flex-start">

            <div className="flex" id="ques-no">
                <img src={ques}/>
                <h2 style={{color: darkMode ? '#343434' : '#000000'}}> {currentQuestion + 1} of {questions.length} </h2>
            </div>

            <div id="space"></div>

          </div>

          <div id="prime-div">
            <h7 style={{ color: highlightState ? "red" : "inherit" , fontSize:'28px', fontWeight: highlightState ? "900" : "400" }}>
              {questions[currentQuestion].text}
            </h7>
          </div>

          <div>
            
          <ul>
            {questions[currentQuestion].options.map((option) => (
                <div id="opt" key={option.id}>

                    <div id="opt-color" style={{color: '#000000',backgroundColor: darkMode ? '#A8A8A8' : '#d9b285'}}>{option.option}</div>

                    <li key={option.id}>
                        <button onClick={() => handleClick(option.isCorrect)} style={{color: darkMode ? '#DEDEDE' : '#000000',backgroundColor: darkMode ? '#404040' : '#EADFCB',border: darkMode ? '2px solid #A8A8A8' : '2px solid #d9b285'}}>
                            {option.text}
                        </button>
                    </li>

                </div>
            ))}
          </ul>
          
          </div>

          <div id="bottom-buttons" className="flex">
          
            <button id="highlight" onClick={handleHighlight} style={{backgroundColor: '#ff9e9e',border: '1px solid red'}}>
                Highlight
            </button>
          
            <button id="nhighlight" onClick={handleLowlight} style={{backgroundColor: '#d3d3d3',border: '1px solid red',letterSpacing: '0.1'}}>
                Remove Highlight
            </button>
        
           </div>

           <button id="quit" onClick={props.displayHome} style={{backgroundColor: darkMode ? '#1E1E1E' : '#fcfcfc',border: '2px solid #ffa500',color: '#ffa500',fontWeight:'800'}}>QUIT</button>
        
        </div>

       </div>

      </div>

    </>
  );

}

export default Bocs;