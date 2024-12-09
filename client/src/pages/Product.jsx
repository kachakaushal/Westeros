import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from "react-router-dom"
import Breadcrum from '../components/BreadCurms/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescreptionBox from "../components/DescreptionBox/DescreptionBox"
import ReletedProduct from '../components/ReletedProduct/ReletedProduct'

const Product = () => {
  const { all_products } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescreptionBox />
      <ReletedProduct />
    </div>
  )
}

export default Product