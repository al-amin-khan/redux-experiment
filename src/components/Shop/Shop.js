import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
  const products = props.products; 
  const addToCart = props.addToCart;
  console.log(props);
  

  return (
    <div>
      <h2>This is shop component</h2>
      {
        products.map(item => <Product
                                addToCart={addToCart}
                                product={item} 
                                key={item.id}
                              >

                              </Product>)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
  }
}

const mapDispatchToProps = {
  addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop); 

export default connect(mapStateToProps, mapDispatchToProps)(Shop);