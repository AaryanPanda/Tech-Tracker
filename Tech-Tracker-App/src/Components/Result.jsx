/* eslint-disable react/prop-types */
import tick from "../assets/tick.png";
import aww from "../assets/sad.png"
import Navbar from "./Navbar";
import home from "../assets/home.png";
import { useContext } from "react";
import { ThemeContext } from "../App";


function Result(props) {

    const {darkMode} = useContext(ThemeContext)
    const good = 'Congratulations, You Made Through It !';
    const bad = 'Sorry , But your Semester fee went in Vain !';

  return (
    <>
    
    <Navbar/>
    <div id='result' className="flex-column">
        <div id="result-container" className="flex-column" style={{backgroundColor : darkMode ? '#272727' : '#F2F2F2'}}>

        <img src={props.score > 8 ? `${tick}` : `${aww}`}/>
        <h3> {props.score > 8 ? good : bad}</h3>
        <h2>{props.score} of 10 were correct - {(props.score/10)*100}% </h2>
        <button id="home" onClick={props.displayHome} style={{backgroundColor: darkMode ? '#E8E8E8' : '#FFEDCD'}}>Home <img src={home}/></button>

        </div>
    </div>
    
    </>
  )
}

export default Result