import Home from './components/Home';
import './index.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navs from "./components/Navs"
import Footer from './components/Footer';
import Product from './components/Product';



function App() {
  return (
    <div>
      <Router>
      <Navs/>
      <Switch>
      <Route path = '/' exact component = {Home} />
      <Route path = '/products' exact component = {Product} />
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
