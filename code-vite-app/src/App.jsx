import Navbar from './components/navbar'
import './App.css'
import ItemListContainer from './components/ItemLIstContainer/ItemListContainer'
import Cards from './components/Cards'
import Count from './components/setCount'
function App() {

  return (
    <>
  <Navbar/>
  <ItemListContainer greeting = {'Bienvenidos a Mates brujula'}/>
  <Cards />
  </>

  )
}

export default App
