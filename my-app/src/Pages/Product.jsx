import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import Description from '../Components/Descriptionbox/Description.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Product not found.</h2>
        <p>Sorry, the product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
