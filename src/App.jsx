
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage';
import ContactUs from './pages/ContactUs/ContactUs';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HeartedContextProvider from './contexts/HeartedContext';
import ThemeContextProvider from './contexts/DarkModeContext';
import Checkout from './pages/Checkout/Checkout';
function App() {
//** anybody inside will be able to use the heated context and theme context*/
//* directs traffic 
  return (
      <BrowserRouter>
      <HeartedContextProvider> 
        <ThemeContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contactUs' element={<ContactUs />}/>
          <Route path='/details/:productId' element={<DetailsPage />} />
        </Routes>
        <Footer />
        </ThemeContextProvider>
        </HeartedContextProvider>
      </BrowserRouter>
  )
}

export default App
