import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
  console.log(props);
  const {cart} = props;
  const removeFromCart = props.removeFromCart;
  return (
    <div>
      <h2>This is Cart</h2>
      <ul>
        {
          cart.map(pd => <li key={pd.cartId}>
                            {pd.name} <button onClick={() => removeFromCart(pd.cartId, pd.name)}>x</button>
                          </li> )
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products,
  }
}

const mapDispatchToProps = {
  removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);