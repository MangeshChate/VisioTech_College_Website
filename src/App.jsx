import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


import Coursoul from './components/Coursoul'
import Main1 from './components/Main1'
import Main2 from './components/Main2'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import Main3 from './components/Main3'
import Footer from './components/Footer';
import About from './components/About'
import Moto from './components/Moto'
import Campus from './components/Campus'
import College from './components/College'
import Contact from './components/Contact'
import Timer from './components/Timer'
import Events from './components/Events'
import { useEffect, useState } from 'react'
import { KeyboardArrowUp } from '@mui/icons-material'

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={
          <div className=''>

            <Coursoul />
            <Marquee />
            <Timer />
            <Main2 />
            <Checkout />
            <Main1 />
            <Main3 />

          </div>
        } />

        <Route exact path='/about' element={
          <>

            <About />
            <Main2 />
            <Checkout />
            <Main3 />

          </>
        } />
        <Route exact path='/campus' element={
          <>
            <Campus />
            <Main2 />
            <Checkout />
            <Main1 />
            <Main3 />

          </>
        } />

        <Route exact path='/events' element={
          <>

            <Events />

            <Main2 />
            <Checkout />
            <Main1 />
            <Main3 />

          </>
        } />

        <Route exact path='/moto' element={
          <>


            <Moto />
            <Main2 />
            <Checkout />
            <Main3 />

          </>
        } />

        <Route exact path='/college' element={
          <>

            <College />
            <Main2 />
            <Checkout />
            <Main1 />
            <Main3 />

          </>
        } />


        <Route exact path='/contact' element={
          <>
            <Contact />
            <Main2 />
            <Checkout />
            <Main3 />

          </>
        } />

        <Route path='*' element={<Navigate to="/" />} />


      </Routes>
      
      {isVisible && (
        <button
          className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <KeyboardArrowUp/>
        </button>
      )}
      <Footer />
    </Router>
  )
}

export default App
