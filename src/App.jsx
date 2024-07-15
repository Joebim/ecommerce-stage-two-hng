import { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
const Home = lazy(() => import('./pages/Home.jsx'));
const ProductView = lazy(() => import('./pages/ProductView.jsx'));
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Checkout = lazy(() => import('./pages/Checkout.jsx'));
const OrderConfirm = lazy(() => import('./pages/OrderConfirm.jsx'));
const Wishlist = lazy(() => import('./pages/Wishlist.jsx'));
import './App.css'
import { ContextProvider } from "./api/Context.jsx"
import { useLocation } from "react-router-dom";
import { Loader } from "./components/Loader.jsx";

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ContextProvider>
        <Suspense fallback={Loader}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
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
