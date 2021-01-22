import React from 'react';
import { Link } from 'react-router-dom';
import { CartButton } from '../';
import { Logo } from '../../assets/';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          <S.Logo src={Logo} alt="barbora-logo" />
        </Link>

        <S.CartButtonDiv>
          <CartButton itemsInCart={1} totalPrice={10.33} />
        </S.CartButtonDiv>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
