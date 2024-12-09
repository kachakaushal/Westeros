import React, { useEffect, useState } from 'react'
import "./NewCollections.css"
import Item from '../item/item'

const NewCollections = () => {
  const [new_collection, setnew_collection] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/newcollectiond').then((responce) => responce.json()).then((data) => setnew_collection(data))
  }, [])
  return (
    <div className='new-collections'>
      <h1>new collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections