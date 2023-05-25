import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage';
import ContactUs from './pages/ContactUs/ContactUs';
import DetailsPage from './pages/DetailsPage/DetailsPage';
function App() {

  return (
      <BrowserRouter>
        <Header />
        <Routes> //* directs traffic 
          <Route path='/' element={<Homepage />} />
          <Route path='/contactUs' element={<ContactUs />}/>
          <Route path='/details/:productId' element={<DetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
