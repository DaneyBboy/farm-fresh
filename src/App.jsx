
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProductDetail from './Pages/ProductDetail'
import ProductList from './Components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router'
import Cart from './Pages/Cart'
import Ordercheckout from './Pages/Ordercheckout'

function App() {


  return (
    <>

      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/productdetails' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Ordercheckout />} />
           
        </Routes>
        <Footer />
      </BrowserRouter>

     

    </>
  )
}

export default App
