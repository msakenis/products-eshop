import actions from './actions';

const itemCount = (cartItems) =>
  cartItems.reduce((total, product) => total + product.quantity, 0);

const totalSum = (cartItems) =>
  cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        itemCount: itemCount(state.cartItems),
        totalSum: totalSum(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case actions.REMOVE_PRODUCT:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        itemCount: itemCount(updatedCartItems),
        totalSum: totalSum(updatedCartItems),
        cartItems: [...updatedCartItems],
      };

    default:
      return state;
  }
};

export default reducer;
