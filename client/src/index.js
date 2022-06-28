import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RequireAuth from 'components/Auth/RequireAuth'
import AlreadyLoginned from 'components/Auth/AlreadyLoginned'
import Login from "./pages/Login"
import Home from "./pages/Home"
import PastOrders from "./pages/PastOrders"
import Restaurants from "./pages/Restaurants"
import Account from "./pages/Account"
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';



const store = createStore(reducers, compose(applyMiddleware(thunk)));
const rootElement = document.getElementById("root");




render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth>  <Home /> </RequireAuth>}>
        </Route>
        <Route path="/past-orders" element={<RequireAuth>  <PastOrders /> </RequireAuth>}>
        </Route>
        <Route path="/restaurants" element={<RequireAuth>  <Restaurants /> </RequireAuth>}>
        </Route>
        <Route path="/my-account" element={<RequireAuth>  <Account /> </RequireAuth>}>
        </Route>
        <Route path="/login" element={<AlreadyLoginned> <Login /> </AlreadyLoginned>  } />
        <Route
          path="*"
          element={
            <div><h1>404</h1></div>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);


