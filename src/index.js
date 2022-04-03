import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './components/contexts/user-context';
import { ProductsProvider } from './components/contexts/products-context';
import { CartDropDownProvider } from './components/contexts/cart-dropdown-context';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
         <UserProvider>
            <ProductsProvider>
               <CartDropDownProvider>
                  <App />
               </CartDropDownProvider>
            </ProductsProvider>
         </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


