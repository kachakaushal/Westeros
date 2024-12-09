import React, { useEffect, useState } from 'react'
import "./Popular.css"
import Item from '../item/item'

const Popular = () => {
  const [popularproducts, setpopularproducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen').then((responce) => responce.json()).then((data) => setpopularproducts(data))
  }, [])
  return (
    <div className='popular'>
      <h1>popular item for women</h1><hr />
      <div className="popular-item">{
        popularproducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
        })
      }</div>

    </div>
  )
}

export default Popular