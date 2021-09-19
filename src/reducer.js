export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

// The reducer listen to the actions in the browser and then handles the action that was triggered then passing the information to the Database
const reducer = (state = initialState, action) => {
  // The Switch statement will be based on the action triggered
  switch (action.type) {
    // First case, if the action is ADD_TO_CART
    case 'ADD_TO_CART':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // Second case, if the action is REMOVE_FROM_CART
    case 'REMOVE_FROM_CART':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    // Second case, if the action is SET_USER
    case 'SET_USER':
      // debugger
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
