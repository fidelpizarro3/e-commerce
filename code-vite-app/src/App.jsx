import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Store from './pages/store';
import Detail from './pages/detail';
import Payment from './pages/payment/payment'; 
import Contact from './pages/contact';
import { CartProvider } from './components/cartContext';

function App() {
  return (
    <CartProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/productos' element={<Store />} />
          <Route exact path="/detalles/:id" element={<Detail />} />
          <Route exact path="/pago" element={<Payment />} />
          <Route exact path="/contacto" element={<Contact />} /> {/* Agrega la ruta para la página de contacto */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
