import React from 'react';
import CartIcon from '../../assets/Icons/shopping-cart.svg';
import * as S from './CartButton.style';

const CartButton = ({ totalPrice, itemsInCart }) => {
  return (
    <S.Button>
      {itemsInCart > 0 && <S.NumberDiv>{itemsInCart}</S.NumberDiv>}
      <S.Icon src={CartIcon} alt="cart" />
      <span>&euro;{totalPrice}</span>
    </S.Button>
  );
};

export default CartButton;
