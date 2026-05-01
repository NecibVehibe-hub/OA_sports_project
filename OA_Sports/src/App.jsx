import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import "./i18next.js"
import DesktopNavbar from './components/DesktopNavbar.jsx';


function App() {
    return(
        <>
            <DesktopNavbar/>
            <Navbar/>
            <Home/>
        </>
    )
}

export default App;
