import React, {useContext} from 'react'
import ProductContext from 'contexts/productContext'
import Filters from './Filters'
import ProductList from 'components/ProductList'


const PageShop = () => {

  const products = useContext(ProductContext)
  
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