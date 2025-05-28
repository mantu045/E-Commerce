import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/Items/Items.jsx';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Normalize filter: lowercase for comparison
  const filteredProducts = all_product.filter(
    (item) => item.category.toLowerCase() === props.category.toLowerCase()
  );

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />

      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by  <img src={dropdown_icon} alt="Sort options dropdown icon" />
        </div>
      </div>

      <div className='shopcategory-products'>
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map((item) => (
            <Items
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price=<del>{item.old_price}</del>
            />
          ))
        )}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;


