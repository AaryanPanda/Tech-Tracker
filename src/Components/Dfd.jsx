/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import Navbar from "./Navbar";
import ques from "../assets/Ques.png";
import { ThemeContext } from "../App";
import lightbg from "../assets/lightbg.jpeg";
import darkbg from "../assets/darkbg.png";

function Dfd(props) {

    const questions = [
        {
            text: "Which of the steps in the 5-step Design Thinking process is researching user needs related to?",
            options: [
                { id: 0, option: "A", text: "Ideate", isCorrect: false },
                { id: 1, option: "B", text: "Define", isCorrect: false },
                { id: 2, option: "C", text: "Prototype", isCorrect: false },
                { id: 3, option: "D", text: "Empathize", isCorrect: true },
            ],
        },
    
        {
            text: "What is the purpose of a Design Sprint?",
            options: [
                { id: 0, option: "A", text: "To build prototypes for user testing", isCorrect: false },
                { id: 1, option: "B", text: "To create user-centered products", isCorrect: true },
                { id: 2, option: "C", text: "To develop marketing strategies", isCorrect: false },
                { id: 3, option: "D", text: "To conduct user interviews", isCorrect: false },
            ],
        },
        {
            text: "What is another name for the Von Restorff Effect?",
            options: [
                { id: 0, option: "A", text: "Primacy effect", isCorrect: false },
                { id: 1, option: "B", text: "Serial position effect", isCorrect: false },
                { id: 2, option: "C", text: "Isolation effect", isCorrect: true },
                { id: 3, option: "D", text: "Recency effect", isCorrect: false },
            ],
        },
    
        {
            text: "Which user research method involves interviewing users in their natural environments?",
            options: [
                { id: 0, option: "A", text: "User interviews", isCorrect: false },
                { id: 1, option: "B", text: "A/B testing", isCorrect: false },
                { id: 2, option: "C", text: "Surveys", isCorrect: false },
                { id: 3, option: "D", text: "Contextual inquiry", isCorrect: true },
            ],
        },
        {
            text: "Which element in the user journey map mentions takeaways/ learnings for the designer?",
            options: [
                { id: 0, option: "A", text: "Actor/ persona/ user", isCorrect: false },
                { id: 1, option: "B", text: "Journey phases", isCorrect: false },
                { id: 2, option: "C", text: "Opportunities", isCorrect: true },
                { id: 3, option: "D", text: "Actions, mindsets and emotions", isCorrect: false },
            ],
        },
    
        {
            text: "Which Gestalt principle suggests that objects close to each other tend to be perceived as related or grouped together?",
            options: [
                { id: 0, option: "A", text: "Similarity", isCorrect: false },
                { id: 1, option: "B", text: "Proximity", isCorrect: true },
                { id: 2, option: "C", text: "Closure", isCorrect: false },
                { id: 3, option: "D", text: "Continuity", isCorrect: false },
            ],
        },
        {
            text: "Which principle of WCAG focuses on ensuring that users can perceive content through various sensory channels?",
            options: [
                { id: 0, option: "A", text: "Perceivable", isCorrect: true },
                { id: 1, option: "B", text: "Operable", isCorrect: false },
                { id: 2, option: "C", text: "Understandable", isCorrect: false },
                { id: 3, option: "D", text: "Robust", isCorrect: false },
            ],
        },
        {
            text: "What are the two components of the Serial Position Effect?",
            options: [
                { id: 0, option: "A", text: "The primacy effect and the recency effect", isCorrect: true },
                { id: 1, option: "B", text: "The Von Restorff effect and the isolation effect", isCorrect: false },
                { id: 2, option: "C", text: "The first impression and last impression effect", isCorrect: false },
                { id: 3, option: "D", text: "The long-term memory and short-term memory effect", isCorrect: false },
            ],
        },
        {
            text: "What is the primary goal of accessibility in design?",
            options: [
                { id: 0, option: "A", text: "Creating products for specific user groups", isCorrect: false },
                { id: 1, option: "B", text: "Designing solutions for people with disabilitiesp", isCorrect: false },
                { id: 2, option: "C", text: "Empowering people with diverse abilities", isCorrect: true },
                { id: 3, option: "D", text: "Implementing inclusive design frameworks", isCorrect: false },
            ],
        },
        {
            text: "What is the primary goal of the 'Understand' phase in a Design Sprint?",
            options: [
                { id: 0, option: "A", text: "Creating a step-by-step blueprint for the prototype", isCorrect: false },
                { id: 1, option: "B", text: "Ideating possible solutions to the design challenge", isCorrect: false },
                { id: 2, option: "C", text: "Defining the product's direction and future vision", isCorrect: false },
                { id: 3, option: "D", text: "Getting a clear picture of the design challenge", isCorrect: true },
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
          
            <button id="highlight" onClick={handleHighlight} style={{backgroundColor: '#ff7373',border: '1px solid red'}}>
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

export default Dfd;