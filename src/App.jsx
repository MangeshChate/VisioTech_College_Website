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
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={
          <>

            <Coursoul />
            <Marquee />
            <Timer/>
            <Main2 />
            <Checkout />
            <Main1 />
            <Main3 />
           
          </>
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
            <Campus/>
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

            <College/>
            <Main2 />
            <Checkout />
            <Main1 />
            <Main3 />
           
          </>
        } />


<Route exact path='/contact' element={
          <>
           <Contact/>
            <Main2 />
            <Checkout />
            <Main3 />
            
          </>
        } />

<Route path='*' element={<Navigate to="/" />} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App
