/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useRef , useState } from "react";
import Navbar from "./Navbar";
import tips from "../assets/tips.png";
import arrow from "../assets/arrow.png";
import bocs from "../assets/Bocs.jpeg";
import fewd from "../assets/Fewd.jpeg";
import psup from "../assets/Psup.png";
import dfd from "../assets/Dfd.jpeg";
import { ThemeContext } from "../App";


const Home = (props) => {

    const{darkMode} = useContext(ThemeContext) 
    console.log(props)

  return (
    <>
    
    <Navbar/>
    <div className="flex-column">

        <div id="welcome"><h3 style={{fontSize:'32px'}}> Welcome to Tech Tracker where you Test your Technical Talent ! </h3></div>

        <div id="quick-tips">
            <img src={tips}/>
            <h3 style={{fontSize:'22px'}}>"Revise your Modules before you Start !"</h3>
        </div>

        <div id="expertise-div" className="flex-column" style={{backgroundColor: darkMode ? '#262626' : '#F2F2F2'}}>
            
            <div id="title">
                <h2 style={{color:'#DD7700'}}>Choose your Expertise and Dive into the Quizzes</h2>
            </div>
            
            <div id="categories" className="flex">

                <div className="outer" id="bocs" style={{backgroundColor: darkMode ? '#6D6D6D' : '#d6c29c',boxShadow: darkMode ? '2px 2px 4px 0px #F4F4F4' : '2px 2px 4px 0px rgba(0, 0, 0, 0.75)'}}>
                    <div className="flex-column" id="inner" onClick={props.displayBocs}>
                        <img src={bocs}/>
                        <div className="flex" id="arrow" style={{backgroundColor: darkMode ? '#444444' : '#EEEEEE'}}>
                            <div></div>
                            <h4 style={{color: darkMode ? '#ffffff' : '#000000'}}>Breadth Of CS</h4>
                            <img src={arrow}/>
                        </div>
                    </div>
                </div>

                <div className="outer" id="fewd" style={{backgroundColor: darkMode ? '#6D6D6D' : '#d6c29c',boxShadow: darkMode ? '2px 2px 4px 0px #F4F4F4' : '2px 2px 4px 0px rgba(0, 0, 0, 0.75)'}}>
                    <div className="flex-column" id="inner" onClick={props.displayFEWD}>
                        <img src={fewd}/>
                        <div className="flex" id="arrow" style={{backgroundColor: darkMode ? '#444444' : '#EEEEEE'}}>
                            <div></div>
                            <h4 style={{color: darkMode ? '#ffffff' : '#000000'}}>Front-End Web-Dev</h4>
                            <img src={arrow}/>
                        </div>
                    </div>
                </div>

                <div className="outer" id="dfd" style={{backgroundColor: darkMode ? '#6D6D6D' : '#d6c29c',boxShadow: darkMode ? '2px 2px 4px 0px #F4F4F4' : '2px 2px 4px 0px rgba(0, 0, 0, 0.75)'}}>
                    <div className="flex-column" id="inner" onClick={props.displayDfd}>
                        <img src={dfd}/>
                        <div className="flex" id="arrow" style={{backgroundColor: darkMode ? '#444444' : '#EEEEEE'}}>
                            <div></div>
                            <h4 style={{color: darkMode ? '#ffffff' : '#000000'}}>Design For Devs</h4>
                            <img src={arrow}/>
                        </div>
                    </div>
                </div>

                <div className="outer" id="psup" style={{backgroundColor: darkMode ? '#6D6D6D' : '#d6c29c',boxShadow: darkMode ? '2px 2px 4px 0px #F4F4F4' : '2px 2px 4px 0px rgba(0, 0, 0, 0.75)'}}>
                    <div className="flex-column" id="inner" onClick={props.displayPsup}>
                        <img src={psup}/>
                        <div className="flex" id="arrow" style={{backgroundColor: darkMode ? '#444444' : '#EEEEEE'}}>
                            <div></div>
                            <h4 style={{color: darkMode ? '#ffffff' : '#000000'}}>Problem Solving</h4>
                            <img src={arrow}/>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>

    </div>
    
    </>
  )
}

export default Home
