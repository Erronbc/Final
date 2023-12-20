import React from 'react'
import './App.css'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Categories from './Components/Categories/Categories'
import Subscribe from './Components/Subscribe/Subscribe'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <div>
      <Header />
      <Home />
      <Categories />
      <Subscribe /> 
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
