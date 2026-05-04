import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Services from './pages/Services.jsx';
import "./i18next.js"
import DesktopNavbar from './components/DesktopNavbar.jsx';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
    const { i18n } = useTranslation();
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  },[i18n.language]);
    
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <DesktopNavbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
