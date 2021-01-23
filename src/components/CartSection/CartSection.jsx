import React, { useContext } from 'react';
import * as S from './CartSection.style';
import { CartProduct, BuyBtnBlock } from '../';
import { CartContext } from '../../contexts/cart.context';
import { DisplayCartContext } from '../../contexts/displayCart.context';
import { CloseIcon } from '../../assets';

const CartSection = () => {
  const { cartItems } = useContext(CartContext);
  const { displayCart, setDisplayCart } = useContext(DisplayCartContext);

  return (
    // styled-components accepts non-boolean values only, converting to string
    <S.CartSection display={String(displayCart)}>
      <S.CartProductsBlock>
        {displayCart ? (
          <S.FlexClose>
            <S.Title>Krepšelis</S.Title>
            <S.CloseButton onClick={() => setDisplayCart(!displayCart)}>
              <S.Icon src={CloseIcon} alt="Close" />
            </S.CloseButton>
          </S.FlexClose>
        ) : (
          <S.Title>Krepšelis</S.Title>
        )}
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
