import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemdetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import  {BrowserRouter, Route,Routes} from 'react-router-dom';
import CartProvider from './context/CartContext';

function App() {
  return (
  <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer texto = 'estebanqto'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer texto = 'estebanqto'/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detail/:detailId' element={<ItemdetailContainer/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
