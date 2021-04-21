import React from 'react'
import Filters from './Filters'
import ProductList from 'components/ProductList'


const PageShop = ({products}) => {
  return (
    <>
        <main className="products">

            <header className="heading">
                <h1>Sale on Women's Perfume</h1>
            </header>
            <Filters></Filters>
            <ProductList products={products} />

            
            
        </main>
            
    </>
  )
}

export default PageShop