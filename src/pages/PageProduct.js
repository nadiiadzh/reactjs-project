import React, {useContext} from 'react'
import Product from 'components/Product'
import ProductContext from 'contexts/productContext'
import {useParams} from 'react-router-dom'



const PageProduct = () => {

  const {slug} = useParams()
  const products = useContext(ProductContext)

  const prod = products.find((prod) => prod.slug === slug) || products[0]// assume it's always the first product
 
  return (
    <>
      <h1>Hi from product page, 1 product </h1>
      <Product data={prod} /> 
    </>
  )
}

export default PageProduct