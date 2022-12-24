import React, {useEffect, useState } from  'react'
import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  const [theme, setTheme] = useState(false)
 const body = document.body

// load saved theme from local storage
 useEffect(() => {
  let getData = localStorage.getItem('saved')
   getData = JSON.parse(getData)
   setTheme(getData)
 }, [])

 // save to local storage
 useEffect(() => {
   let savedData = JSON.stringify(theme)
    localStorage.setItem('saved', savedData)
 }, [theme])

  const handleTheme = () => {
    setTheme(() => {
      if(theme){
         body.classList.toggle('dark-mode');
          return !theme
      } else
      return !theme
     })
  }

  return (
    <Router>
    <div className={theme? 'App darkmode' : 'App'}>
    <Nav  handleTheme={handleTheme} theme={theme}/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/work' element={<Work />} />
    </Routes>
   <Footer />
    </div>
    </Router>
  );
}

export default App;
