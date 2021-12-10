import './App.css';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; Apartir de v6 Switch se remplazo
import Header from "./components/Header";
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Switch> */}
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
