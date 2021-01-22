import { storiesOf } from '@storybook/react';
import React from 'react';
import CartButton from './CartButton';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

storiesOf('Cart button', module).add('Cart button', () => (
  <ThemeProvider theme={theme}>
    <CartButton totalPrice={21.55} itemsInCart={2} />
  </ThemeProvider>
));
