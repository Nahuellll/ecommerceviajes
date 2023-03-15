import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemdetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import  {BrowserRouter, Route,Routes} from 'react-router-dom';
import CartProvider from './context/CartContext';
import Checkout from './components/checkout/Checkout';



function App() {
  return (
  <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detail/:detailId' element={<ItemdetailContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
