import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addtoCart } = useContext(ShopContext);

  if (!product) {
    return <div className="productdisplay">Loading product...</div>;
  }

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          {[...Array(4)].map((_, idx) => (
            <img key={idx} src={product.image} alt={`thumb-${idx}`} />
          ))}
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt="main-product" />
        </div>
      </div>

      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          {[...Array(4)].map((_, idx) => (
            <img key={idx} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="dull-star" />
          <p>(125)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className="productdisplay-right-prices-old">${product.old_price}</div>
          <div className='productdisplay-right-prices-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          <p>{product.description || "This is a high-quality, durable product designed to meet all your needs."}</p>
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addtoCart(product.id)}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
