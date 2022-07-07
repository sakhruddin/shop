import React from 'react';

const Product = (props) => {
  return (
    <div className='product'>
      <img src={props.img} alt="macbook" />
      <b>{props.price}</b>
      <span>{props.name}</span>
      <button>{props.button}</button>
    </div>
  );
}

export default Product;
