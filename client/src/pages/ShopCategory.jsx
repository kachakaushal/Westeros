import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/item/item'


const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      
      <div className="shopcategory-indexSort">
        <p>
          <span>showing 1-120</span>out of 36 products
        </p>
        <div className="shopcaregory-sort">
          sort by <img src="" alt="" />
        </div>              
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>

    </div>
  )
}

export default ShopCategory