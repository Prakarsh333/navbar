import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <h1 class="text-2xl mb-4"> Page Section</h1>
      <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
