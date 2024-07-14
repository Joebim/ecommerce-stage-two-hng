import { lazy, Suspense } from "react";
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
const Home = lazy(() => import('./pages/Home.jsx'));
const ProductView = lazy(() => import('./pages/ProductView.jsx'));
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Checkout = lazy(() => import('./pages/Checkout.jsx'));
const OrderConfirm = lazy(() => import('./pages/OrderConfirm.jsx'));
import './App.css'
import { ContextProvider } from "./api/Context.jsx"
import scrollToTop from "./components/scrollToTop.js";


function App() {

  return (
    <>
      <ContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirm" element={<OrderConfirm />} />
            <Route path="/product-view/:id" element={<ProductView />} />
          </Routes>
          <Footer />
        </Suspense>
      </ContextProvider>

    </>
  )
}

export default App
