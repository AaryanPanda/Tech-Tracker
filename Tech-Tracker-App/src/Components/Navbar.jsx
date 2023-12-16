/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ThemeContext } from "../App";
import logo from '../assets/logo.png';
import mode from '../assets/mode.png';
import arrow from '../assets/arrow.png';


function Navbar() {

    const {darkMode,toggleMode} = useContext(ThemeContext)

    return (
        <div>
            <nav style={{backgroundColor: darkMode ? '#575757' : '#ffffff'}}>
                 <img id="logo" src={logo}/>
                 <div id="theme-button" onClick={toggleMode} style={{backgroundColor: darkMode ? '#ADADAD' : '#7d7d7d',border: '1px solid black'}}>
                    <img src={mode}/>
                    <img src={arrow}/>
                 </div>
            </nav>
        </div>
    )

}

export default Navbar;