import React, { useContext } from 'react';
import * as S from './CartSection.style';
import { CartProduct, BuyBtnBlock } from '../';
import { CartContext } from '../../contexts/cart.context';

const CartSection = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <S.CartSection>
      <S.CartProductsBlock>
        <S.Title>Krepšelis</S.Title>
        <S.FlexDiv>
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))
          ) : (
            <p>Krepšelis tuščias</p>
          )}
        </S.FlexDiv>
      </S.CartProductsBlock>
      <BuyBtnBlock />
    </S.CartSection>
  );
};

export default CartSection;
