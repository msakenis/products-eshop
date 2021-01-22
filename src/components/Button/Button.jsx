import React from 'react';
import * as S from './Button.style';

const Button = ({ children, handleClick }) => {
  return <S.Button onClick={handleClick}>{children}</S.Button>;
};

export default Button;
