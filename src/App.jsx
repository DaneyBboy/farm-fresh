
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
import { ErrorBoundary } from 'react-error-boundary'
import { Container, Typography } from '@mui/material'
import { AddtoCartProvider } from './Context'
import { useState } from 'react'
import Login from './Pages/Login'




function App() {

const [login , setLogin] = useState(true)

  const errorPage = () => {
    return (
      <Container sx={{ justifyContent: 'center', flexDirection: 'column', display: 'flex', color: '#021803', width: '100vw', height: '100vh', textAlign: 'center', backgroundImage: `url('/public/404Page.png')`, backgroundSize: 'cover' }}>
        <Typography fontSize={'5em'} variant='h3'>Farm Fresh</Typography>
        <Typography fontSize={'12em'} variant='h1'>404</Typography>
        <Typography fontSize={'3em'} variant='h5'>Page Not Found</Typography>
        <Typography fontSize={'2em'} variant='body1'>Sorry for the Breakdown</Typography>
      </Container>
    )
  }


  return (
    <>
      <AddtoCartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/productlist' element={
              <ErrorBoundary FallbackComponent={errorPage}>
                <ProductList />
              </ErrorBoundary>} />
            <Route path='/productdetails' element={
              <ErrorBoundary>
                <ProductDetail />
              </ErrorBoundary>} />
            <Route path='/cart' element={<Cart />} />

            <Route path='/checkout' element={
              <ErrorBoundary FallbackComponent={errorPage}>
                {login?<Ordercheckout />:<Login/>}
              </ErrorBoundary>} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AddtoCartProvider>

    </>
  )
}

export default App

