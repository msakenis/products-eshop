import { storiesOf } from '@storybook/react';
import React from 'react';
import CartCounter from './CartCounter';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

storiesOf('Cart Counter', module).add('Cart Counter', () => (
  <ThemeProvider theme={theme}>
    <CartCounter />
  </ThemeProvider>
));
