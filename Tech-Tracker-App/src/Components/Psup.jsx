/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import Navbar from "./Navbar";
import ques from "../assets/Ques.png";
import { ThemeContext } from "../App";
import lightbg from "../assets/lightbg.jpeg";
import darkbg from "../assets/darkbg.png";

function Psup(props) {

    const questions = [
        {
            text: "Which data structure is suitable for implementing a Last-In-First-Out (LIFO) behavior?",
            options: [
                { id: 0, option: "A", text: "Queue", isCorrect: false },
                { id: 1, option: "B", text: "Stack", isCorrect: true },
                { id: 2, option: "C", text: "Linked List", isCorrect: false },
                { id: 3, option: "D", text: "Array", isCorrect: false },
            ],
        },
    
        {
            text: "Which of the following is not a valid variable name in most programming languages?",
            options: [
                { id: 0, option: "A", text: "user_age", isCorrect: false },
                { id: 1, option: "B", text: "studentName", isCorrect: false },
                { id: 2, option: "C", text: "3total_students", isCorrect: true },
                { id: 3, option: "D", text: "_grade", isCorrect: false },
            ],
        },
        {
            text: "Which of the following is an example of a recursive algorithm?",
            options: [
                { id: 0, option: "A", text: "Bubble sort", isCorrect: false },
                { id: 1, option: "B", text: "Quick sort", isCorrect: true },
                { id: 2, option: "C", text: "Selection sort", isCorrect: false },
                { id: 3, option: "D", text: "Insertion sort", isCorrect: false },
            ],
        },
    
        {
            text: "What is the primary purpose of the 'return' statement in a function?",
            options: [
                { id: 0, option: "A", text: "Print a value", isCorrect: false },
                { id: 1, option: "B", text: "Declare a loop", isCorrect: false },
                { id: 2, option: "C", text: "Define a variable", isCorrect: false },
                { id: 3, option: "D", text: "Exit the function", isCorrect: true },
            ],
        },
        {
            text: "What is the purpose of the 'continue' statement in a loop?",
            options: [
                { id: 0, option: "A", text: "To exit the loop", isCorrect: false },
                { id: 1, option: "B", text: "To restart the loop", isCorrect: false },
                { id: 2, option: "C", text: "Skip remaining loop code and proceed to the next iteration", isCorrect: true },
                { id: 3, option: "D", text: "To jump to next line of code", isCorrect: false },
            ],
        },
    
        {
            text: "What is the purpose of the 'pop()' method in a stack data structure?",
            options: [
                { id: 0, option: "A", text: "To remove the top element from the stack", isCorrect: true },
                { id: 1, option: "B", text: "To add an element to the stack", isCorrect: false },
                { id: 2, option: "C", text: "To check if the stack is empty", isCorrect: false },
                { id: 3, option: "D", text: "To reverse the order of elements in the stack", isCorrect: false },
            ],
        },
        {
            text: "In a singly linked list, how would you find the middle node efficiently in a single pass?",
            options: [
                { id: 0, option: "A", text: "Traverse the list twice", isCorrect: false },
                { id: 1, option: "B", text: "Use a counter variable to calculate the length first", isCorrect: false },
                { id: 2, option: "C", text: "Use two pointers, one moving twice as fast", isCorrect: true },
                { id: 3, option: "D", text: "Reverse the linked list and find the new head", isCorrect: false },
            ],
        },
        {
            text: "In a binary tree, what is an 'ancestor' of a node?",
            options: [
                { id: 0, option: "A", text: "A node with a higher value", isCorrect: false },
                { id: 1, option: "B", text: "A node that is a descendant of the given node", isCorrect: false },
                { id: 2, option: "C", text: "A node with a lower value", isCorrect: false },
                { id: 3, option: "D", text: "A node on the path from the root to the given node", isCorrect: true },
            ],
        },
        {
            text: "Which of the following operations is used to remove an element from the top of a stack?",
            options: [
                { id: 0, option: "A", text: "Pop", isCorrect: true },
                { id: 1, option: "B", text: "Top", isCorrect: false },
                { id: 2, option: "C", text: "Push", isCorrect: false },
                { id: 3, option: "D", text: "Remove", isCorrect: false },
            ],
        },
        {
            text: "In C++, what is the purpose of the 'iostream' library?",
            options: [
                { id: 0, option: "A", text: "To perform mathematical calculations", isCorrect: false },
                { id: 1, option: "B", text: "To provide input/output functions", isCorrect: true },
                { id: 2, option: "C", text: "To manipulate strings", isCorrect: false },
                { id: 3, option: "D", text: "To handle exceptions", isCorrect: false },
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

export default Psup;
