import React, { useContext } from 'react';
import { GlutenIcon, HeartIcon } from '../../assets';
import * as S from './ProductCard.style';
import { CartContext } from '../../contexts/cart.context';
import { Button, CartCounter } from '../';
import { toCurrency } from '../../helpers/SharedFunctions';
import { shape, number, string, bool, arrayOf } from 'prop-types';

const ProductCard = ({ products }) => {
  const { addProduct, cartItems } = useContext(CartContext);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      {products && window.innerWidth > 820
        ? products.map((product) => (
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
                  <CartCounter product={product} />
                ) : (
                  <Button handleClick={() => addProduct(product)}>
                    Į krepšelį
                  </Button>
                )}
              </S.ButtonDiv>
            </S.AllBlockDiv>
          ))
        : products.map((product) => (
            <S.AllBlockDiv key={product.id}>
              <S.ResFlexWrapper>
                <S.ProductImgDiv>
                  <S.ProductImg src={product.img} alt={product.title} />
                </S.ProductImgDiv>

                <S.ResTitleBlock>
                  <S.StyledLink to="/">{product.title}</S.StyledLink>

                  {product.glutenFree && (
                    <S.Icon src={GlutenIcon} alt="Gluten Free Product" />
                  )}
                </S.ResTitleBlock>

                <S.IconDiv>
                  <S.Icon src={HeartIcon} alt="Krepseliu ruosiniai" />
                </S.IconDiv>
              </S.ResFlexWrapper>

              <S.ResFlexWrapper>
                <S.PriceTag>{toCurrency(product.price)}</S.PriceTag>

                <S.ButtonDiv>
                  {isInCart(product.id) ? (
                    <CartCounter product={product} />
                  ) : (
                    <Button handleClick={() => addProduct(product)}>
                      Į krepšelį
                    </Button>
                  )}
                </S.ButtonDiv>
              </S.ResFlexWrapper>
            </S.AllBlockDiv>
          ))}
    </>
  );
};

ProductCard.propTypes = {
  products: arrayOf(
    shape({
      id: number.isRequired,
      img: string.isRequired,
      title: string.isRequired,
      price: number.isRequired,
      glutenFree: bool,
    }),
  ),
};

export default ProductCard;
