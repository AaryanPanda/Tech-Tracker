import { createContext,useEffect,useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Bocs from './Components/BOCS'
import Dfd from './Components/DFD'
import Psup from './Components/PSUP'
import Result from './Components/Result'
import Fewd from './Components/FEWD'

export const ThemeContext = createContext()

function App() {

  const [darkMode,setDarkMode] = useState(false)
  const [score,setScore] = useState(0)
  const [showHome,setShowHome] = useState(true)
  const [showBocs,setShowBocs] = useState(false)
  const [showDfd,setShowDfd] = useState(false)
  const [showFewd,setShowFewd] = useState(false)
  const [showPsup,setShowPsup] = useState(false)
  const [showResult,setShowResult] = useState(false)



  const updateScore = () => {
    setScore((prevScore) => prevScore+1)
  } 

  const toggleMode = () => {
    setDarkMode((prevTheme) => !prevTheme)
  }

  const displayHome = () => {
    setShowHome(true)
    setScore(0)
    setShowResult(false)
    setShowFewd(false)
    setShowDfd(false)
    setShowBocs(false)
    setShowPsup(false)
  }

  const displayFewd = () => {
    console.log("display")
    setShowHome(false)
    setShowFewd(true)
  }

  const displayBocs = () => {
    setShowHome(false)
    setShowBocs(true)
  }

  const displayDfd = () => {
    setShowHome(false)
    setShowDfd(true)
  }

  const displayPsup = () => {
    setShowHome(false)
    setShowPsup(true)
  }

  const displayResult = () => {
    setShowResult(true)
    setShowFewd(false)
    setShowDfd(false)
    setShowBocs(false)
    setShowPsup(false)
  }

  useEffect(() => {
    darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark")
  },[darkMode])

  return (
    <>
      
      <ThemeContext.Provider value={{darkMode,toggleMode}}>

        {showHome && <Home displayBocs={displayBocs} displayDfd={displayDfd} displayFEWD={displayFewd} displayPsup={displayPsup}/>}
        {showBocs && <Bocs displayResult={displayResult} updateScore={updateScore} displayHome={displayHome}/>}
        {showDfd && <Dfd displayResult={displayResult} updateScore={updateScore} displayHome={displayHome}/>}
        {showFewd && <Fewd displayResult={displayResult} updateScore={updateScore} displayHome={displayHome}/>}
        {showPsup && <Psup displayResult={displayResult} updateScore={updateScore} displayHome={displayHome}/>}
        {showResult && <Result displayHome={displayHome} score={score} displayBocs={displayBocs} displayDfd={displayDfd} displayFEWD={displayFewd} displayPsup={displayPsup} />}

      </ThemeContext.Provider>

    </>
  )
}

export default App
