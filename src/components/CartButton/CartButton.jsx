import React, { useContext } from 'react';
import { CartIcon } from '../../assets/';
import * as S from './CartButton.style';
import { toCurrency } from '../../helpers/SharedFunctions';
import { CartContext } from '../../contexts/cart.context';

const CartButton = () => {
  const { totalSum, cartItems } = useContext(CartContext);

  return (
    <S.Button>
      {cartItems && cartItems.length > 0 && (
        <S.NumberDiv>{cartItems.length}</S.NumberDiv>
      )}
      <S.Icon src={CartIcon} alt="cart" />
      <span>{toCurrency(totalSum)}</span>
    </S.Button>
  );
};

export default CartButton;
