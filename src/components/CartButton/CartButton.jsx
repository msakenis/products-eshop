import React, { useContext } from 'react';
import { CartIcon, BasketIcon } from '../../assets/';
import * as S from './CartButton.style';
import { toCurrency } from '../../helpers/SharedFunctions';
import { CartContext } from '../../contexts/cart.context';
import { DisplayCartContext } from '../../contexts/displayCart.context';

const CartButton = () => {
  const { totalSum, cartItems } = useContext(CartContext);
  const { displayCart, setDisplayCart } = useContext(DisplayCartContext);

  return (
    //switching between different buttons tablet - desktop
    <>
      {window.innerWidth > 1150 ? (
        <S.Button>
          {cartItems && cartItems.length > 0 && (
            <S.NumberDiv>{cartItems.length}</S.NumberDiv>
          )}
          <S.Icon src={CartIcon} alt="cart" />
          <span>{toCurrency(totalSum)}</span>
        </S.Button>
      ) : (
        <S.Button onClick={() => setDisplayCart(!displayCart)}>
          {cartItems && cartItems.length > 0 && (
            <S.NumberDiv>{cartItems.length}</S.NumberDiv>
          )}
          <S.Icon src={BasketIcon} alt="cart" />
          <span>{toCurrency(totalSum)}</span>
        </S.Button>
      )}
    </>
  );
};

export default CartButton;
