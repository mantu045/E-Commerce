import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Items from '../Items/Items';


const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price=<del>{item.old_price}</del>
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
