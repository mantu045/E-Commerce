import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {
  if (!product) return null;

  return (
    <nav className="breadcrum" aria-label="breadcrumb">
      <Link to="/">HOME</Link>
      <img src={arrow_icon} alt="" aria-hidden="true" />
      <Link to="/shop">SHOP</Link>
      <img src={arrow_icon} alt="" aria-hidden="true" />
      <Link to={`/shop/${product.category}`}>{product.category}</Link>
      <img src={arrow_icon} alt="" aria-hidden="true" />
      <span>{product.name}</span>
    </nav>
  );
};

Breadcrums.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  })
};

export default Breadcrums;
