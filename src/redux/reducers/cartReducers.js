import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [
    {name: 'MSI Laptop', id: 1}, {name: 'Asus Laptop', id: 2},
    {name: 'Lenevo Laptop', id: 3}, {name: 'Sony Laptop', id: 4},
    {name: 'HP Laptop', id: 5}, {name: 'Dell Laptop', id: 6},
    {name: 'Gigabyte Laptop', id: 7}, {name: 'Xiaomi Laptop', id: 8},
    {name: 'Razor Laptop', id: 9}, {name: 'Acer Laptop', id: 10},
  ]
};

const cartReducers = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART: {
      const updatedCartItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length +1
      }
      const newCart = [...state.cart, updatedCartItem];
      return {...state, cart: newCart }
    }
    case REMOVE_FROM_CART:{
      const remainingCart = state.cart.filter(pd => pd.cartId !== action.cartId);
      return {...state, cart: remainingCart}
    }
    default:
      return state
  }
};

export default cartReducers;