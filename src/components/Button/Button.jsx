import React from 'react';
import * as S from './Button.style';
import { string, func } from 'prop-types';

const Button = ({ children, handleClick }) => {
  return <S.Button onClick={handleClick}>{children}</S.Button>;
};

Button.propTypes = {
  handleClick: func.isRequired,
  children: string.isRequired,
};

export default Button;
