import Home from './components/Home';
import './index.css';
import {BrowserRouter,Route} from "react-router-dom";
import Navs from "./components/Navs"
import Footer from './components/Footer';
import Product from './components/Product';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navs/>
      <Route path = '/' exact component = {Home} />
      <Route path = '/products' exact component = {Product} />
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
