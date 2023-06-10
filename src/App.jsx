import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ContactUs from './pages/ContactUs/ContactUs';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HeartedContextProvider from './contexts/HeartedContext';
import ThemeContextProvider from './contexts/DarkModeContext';
import Checkout from './pages/Checkout/Checkout';
import RingLoader from 'react-spinners/RingLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

//** anybody inside will be able to use the heated context and theme context*/
//* directs traffic 
  return (
    <>
      {loading ? (
        <div className='app-container'>
        <div className="loader-container">
          <RingLoader size={90} color={'#d6368e'} loading={loading} />
          <div className="loading-text">Hang tight, magic is happening!</div>
        </div>
        </div>
      ) : (
        <BrowserRouter>
          <HeartedContextProvider>
            <ThemeContextProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/details/:productId" element={<DetailsPage />} />
              </Routes>
              <Footer />
            </ThemeContextProvider>
          </HeartedContextProvider>
        </BrowserRouter>
      )}
      </>
  );
}

export default App;
