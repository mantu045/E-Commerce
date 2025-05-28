import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Items from "../Items/Items"


const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, i) => (
                    <Items
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={<del>{item.old_price}</del>}
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts
