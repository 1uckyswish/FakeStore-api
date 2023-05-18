import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage';
function App() {

  return (
    <div className='App'>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
