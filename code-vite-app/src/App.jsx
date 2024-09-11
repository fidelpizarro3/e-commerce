import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Store from './pages/store'
import Detail from './pages/detail'


function App() {

  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/productos' element = {<Store/>}/>
      <Route exact path='/detalles/:id' element = {<Detail/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>

  )
}

export default App;
