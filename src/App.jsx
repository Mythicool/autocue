import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import InventoryDetail from './pages/InventoryDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Financing from './pages/Financing';

// Scroll to top component
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><ScrollToTop /><Home /></>} />
            <Route path="/inventory" element={<><ScrollToTop /><Inventory /></>} />
            <Route path="/inventory/:id" element={<><ScrollToTop /><InventoryDetail /></>} />
            <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
            <Route path="/about" element={<><ScrollToTop /><About /></>} />
            <Route path="/financing" element={<><ScrollToTop /><Financing /></>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
