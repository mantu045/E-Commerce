import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Items from '../Items/Items';

const NewCollection = () => {
  return (
    <div className='new-collection'>
<h1>NEW COLLECTION</h1>
<hr />
<div className='collection'>
   {new_collection.map((item) => (
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
  )
}

export default NewCollection;