import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './components/cartContext/index.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
  </StrictMode>,

)
