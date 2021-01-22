import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

storiesOf('Button', module).add('Primary Button', () => (
  <ThemeProvider theme={theme}>
    <Button handleClick={() => console.log('clicked')}>Į krepšelį</Button>
  </ThemeProvider>
));
