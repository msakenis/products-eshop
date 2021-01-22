import React, { useContext } from 'react';
import { GlutenIcon, HeartIcon } from '../../assets';
import * as S from './ProductCard.style';
import { CartContext } from '../../contexts/cart.context';
import { Button, CartCounter } from '../';
import { toCurrency } from '../../helpers/SharedFunctions';

const ProductCard = ({ products }) => {
  const { addProduct, cartItems } = useContext(CartContext);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      {products &&
        products.map((product) => (
          <S.AllBlockDiv key={product.id}>
            <S.IconDiv>
              {product.glutenFree && (
                <S.Icon src={GlutenIcon} alt="Gluten Free Product" />
              )}
              <S.Icon src={HeartIcon} alt="Krepseliu ruosiniai" />
            </S.IconDiv>
            <S.ProductImgDiv>
              <S.ProductImg src={product.img} alt={product.title} />
            </S.ProductImgDiv>
            <S.StyledLink to="/">{product.title}</S.StyledLink>
            <S.PriceTag>{toCurrency(product.price)}</S.PriceTag>
            <S.ButtonDiv>
              {isInCart(product.id) ? (
                <CartCounter />
              ) : (
                <Button handleClick={() => addProduct(product)}>
                  Į krepšelį
                </Button>
              )}
            </S.ButtonDiv>
          </S.AllBlockDiv>
        ))}
    </>
  );
};

export default ProductCard;
