import actions from './actions';

//func recounts total sum after evry action. Converted to Number
const totalSum = (cartItems) =>
  Number(
    cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2),
  );

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      //if product in cart return the same state, if no push with qnty 1
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
    //remove product from the state and recount total sum
    case actions.REMOVE_PRODUCT:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        totalSum: totalSum(updatedCartItems),
        cartItems: [...updatedCartItems],
      };
    // find item and increase by 1. It needs to be added in immutable way. Reducer runs twice
    // https://github.com/facebook/react/issues/16295
    case actions.INCREASE:
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: +item.quantity + 1 }
          : item,
      );

      return {
        ...state,
        totalSum: totalSum(updatedItems),
        cartItems: [...updatedItems],
      };
    // find item and increase by 1. It needs to be added in immutable way. Reducer runs twice
    // https://github.com/facebook/react/issues/16295
    case actions.DECREASE:
      const updatedList = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: +item.quantity - 1 }
          : item,
      );

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
