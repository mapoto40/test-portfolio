import React from 'react'
import './style.css'

import Navbar from './Elements/nav'
import Home from './Elements/Home'
import Contact from './Elements/contact'
import Footer from './Elements/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header" id="homepage page">
        <Home/>
        <Contact/>
        <Footer/>
      </header>

      <header className="App-header none" id="aboutpage page">
        <Footer/>
      </header>

      <header className="App-header none" id="examplepage page">
        <Footer/>
      </header>
    </div>
  );
}

export default App;
