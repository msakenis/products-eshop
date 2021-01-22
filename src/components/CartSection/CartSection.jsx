import React, { useContext } from 'react';
import * as S from './CartSection.style';
import { CartProduct } from '../';
import { CartContext } from '../../contexts/cart.context';

const CartSection = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <S.CartSection>
      <S.Title>Krepšelis</S.Title>
      <S.FlexDiv>
        {cartItems &&
          cartItems.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
      </S.FlexDiv>
    </S.CartSection>
  );
};

export default CartSection;
