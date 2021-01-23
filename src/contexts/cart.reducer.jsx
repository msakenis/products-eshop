import actions from './actions';

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
        totalSum: totalSum(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case actions.REMOVE_PRODUCT:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        totalSum: totalSum(updatedCartItems),
        cartItems: [...updatedCartItems],
      };

    case actions.INCREASE:
      const updatedItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: +item.quantity + 1 };
        } else {
          return item;
        }
      });

      return {
        ...state,
        totalSum: totalSum(updatedItems),
        cartItems: [...updatedItems],
      };

    case actions.DECREASE:
      const updatedList = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: +item.quantity - 1 };
        } else {
          return item;
        }
      });

      return {
        ...state,
        totalSum: totalSum(updatedList),
        cartItems: [...updatedList],
      };

    default:
      return state;
  }
};

export default reducer;
