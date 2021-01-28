import React from 'react';

const Product = (props) => {
  const addToCart = props.addToCart;
  const {name, id} = props.product;

  const style = {
    border: '1px solid #8000ff',
    margin: 'auto',
    marginBottom: '10px',
    width: '150px',
    textAlign: 'center',
  }

  
  return (
    <div style={style}>
      <h5>{name}</h5>
      <button onClick={()=> addToCart(id, name) }>Add to cart</button>
    </div>
  );
};

export default Product;