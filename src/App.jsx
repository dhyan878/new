// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogo from './components/CompanyLogo';
import PurposeSection from './components/PurposeSection';
import ProductsSection from './components/ProductsSection';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Login from './components/Login';

function HomePage() {
  return (
    <>
      <Hero />
      <PurposeSection />
      <ProductsSection />
      <CompanyLogo />
      <NewsLetter />
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login'];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-teal-600 via-teal-600 to-teal-500 blur-3xl opacity-30 rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-emerald-600 to-emerald-500 blur-3xl opacity-20 rounded-full -z-10"></div>

      <div className="overflow-hidden">
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
