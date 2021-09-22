import React from 'react'
import HomePage from './Pages/Home/HomePage'
import { Route, Switch } from 'react-router-dom'
import SignInPage from './Pages/AccountPages/SignInPage'
import ServicePage from './Pages/ServicePage/ServicePage'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SignUpPage from './Pages/AccountPages/SignUpPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ServicePage />
      <Footer />
    </div>
  )
}

export default App
