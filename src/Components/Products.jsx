import React from 'react';
import Product from './Product';
import macbook from '../Components/logos/macbook.jpg'
import samsung from '../Components/logos/samsung.webp'
import scutter from '../Components/logos/scutter.jpg'
import monitor from '../Components/logos/monitor.jpg'
import maska from '../Components/logos/maska.jpg'
import stirka from '../Components/logos/stirka.jpg'
const Products = () => {
  return (
    <div className='products'>
      <Product img={macbook} price='95000' name='MacBook' button='Купить' />
      <Product  img={samsung} price='39990' name='Galaxy' button='Купить' />
      <Product  img={scutter} price='58950' name='Скутер' button='Купить' />
      <Product  img={monitor} price='12000' name='Монитор' button='Купить'/>
      <Product img={maska} price='500' name='Респираторная маска' button='Купить' />
      <Product img={stirka} price='75000' name='Стиральная машина' button='Купить' />
    </div>
  );
}

export default Products;
