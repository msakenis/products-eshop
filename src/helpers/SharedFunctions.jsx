export const toCurrency = (number) => {
  const formatter = new Intl.NumberFormat('sfb', {
    style: 'currency',
    currency: 'EUR',
  });

  return formatter.format(number).replace('.', ',');
};
