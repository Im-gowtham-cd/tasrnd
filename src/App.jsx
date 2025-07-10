import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import ContactUs from './components/Contact';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {
    return(
        <>
        <Sidebar />
        <Routes>
            <Route path="/tasrnd" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        </>
    );
}
