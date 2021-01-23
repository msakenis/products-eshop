export const toCurrency = (number = 0) => {
  const formatter = new Intl.NumberFormat('sfb', {
    style: 'currency',
    currency: 'EUR',
  });

  return formatter.format(number).replace('.', ',');
};

export const qntyInCart = (id, cartItems) =>
  cartItems.find((item) => item.id === id).quantity;
