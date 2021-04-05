import Home from './components/Home';
import './index.css';
import {BrowserRouter,Route} from "react-router-dom";
import Navs from "./components/Navs"
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navs/>
      <Home/>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
