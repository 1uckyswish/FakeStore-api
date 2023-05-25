import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage';
import ContactUs from './components/ContactUs/ContactUs';
import DetailsPage from './components/DetailsPage/DetailsPage';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/contactUs' element={<ContactUs />}/>
      <Route path='/details' element={<DetailsPage />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
