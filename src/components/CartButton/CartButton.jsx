import React from 'react';
import { CartIcon } from '../../assets/';
import * as S from './CartButton.style';
import { toCurrency } from '../../helpers/SharedFunctions';

const CartButton = ({ totalPrice, itemsInCart }) => {
  return (
    <S.Button>
      {itemsInCart > 0 && <S.NumberDiv>{itemsInCart}</S.NumberDiv>}
      <S.Icon src={CartIcon} alt="cart" />
      <span>{toCurrency(totalPrice)}</span>
    </S.Button>
  );
};

export default CartButton;
