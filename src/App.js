import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PublicRoutes from './Routes/PublicRoutes';
import WebDev from './pages/WebDev';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <hr></hr>
    <Navbar/>
   
  <PublicRoutes/>
{/* <Home/> */}
    </div>
  );
}

export default App;
