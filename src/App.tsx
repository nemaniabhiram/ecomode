import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EcoModeProvider } from './contexts/EcoModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import EcoAnimation from './components/EcoAnimation';
import FloorCleanerPage from './pages/FloorCleanerPage';
import WaterBottlePage from './pages/WaterBottlePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
    <EcoModeProvider>
      <EcoAnimation />
      <div className="min-h-screen bg-white dark:bg-surface-light">
        <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Categories />
                  <FeaturedProducts />
                  <Services />
                  <Newsletter />
                  <Footer />
                </>
              }
            />
            <Route path="/product/floor-cleaner" element={<>
                <Header />
                <FloorCleanerPage />
                <Footer />
              </>} />
            <Route path="/product/water-bottle" element={<>
                <Header />
                <WaterBottlePage />
                <Footer />
              </>} />
            <Route path="/cart" element={<>
                <Header />
                <CartPage />
                <Footer />
              </>} />
          </Routes>
      </div>
    </EcoModeProvider>
  </Router>
  );
}

export default App;