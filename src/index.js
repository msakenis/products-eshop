import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import CartProvider from './contexts/cart.context';
import { DisplayCartProvider } from './contexts/displayCart.context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <DisplayCartProvider>
          <Routes />
        </DisplayCartProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
