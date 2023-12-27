
import './App.css';
import Navber from './components/Navber';
import Product from './components/Product';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Router>
    <Navber/>
    <Routes>
      <Route path='/' element={ <Product/>}/>
      <Route path='/product/:id' element={ <ProductDetail/>}/>
      <Route path='/search/:term' element={ <SearchItem/>}/>
      <Route path='/cart' element={ <Cart/>}/>

      
    </Routes>
   
    </Router>
   
    </>
  );
}

export default App;
