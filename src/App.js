import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import Placeorder from './components/Placeorder/Placeorder';
import PrivateRoute from './components/PrivteRoute/PrivateRoute';
import REgister from './components/Register/REgister';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>

 <AuthProvider>
   
 <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Shop></Shop>
                </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/shipping">
            <Shipping></Shipping>
          </Route>

          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>

          <PrivateRoute path="/placeorder">
            <Placeorder></Placeorder>
          </PrivateRoute>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <REgister></REgister>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
</AuthProvider>    
    </div>
  );
}

export default App;

