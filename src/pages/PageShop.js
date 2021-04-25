import React, {useContext,useEffect, useState} from 'react'
import ProductContext from 'contexts/productContext'
import Filters from '../components/Filters'
import ProductList from 'components/ProductList'



const PageShop = () => {


  const products = useContext(ProductContext)
  const [productResult, setProductResult] = useState(products)

  const [filters, setFilters] = useState({
    query: ``,
    brand: `all`,
    size: `all`,
    rating: `all`,
    maxPrice: 0,
    sortBy: `none`
  })

  useEffect(() => {

    // Creat a clone Array
    let filteredProducts = [...products]
    console.log(`Filter updated`, filters, Number(filteredProducts[0].sailingPrice), Number(filteredProducts[0].sailingPrice) <= Number(filters.maxPrice))


    // Check all the filters

    if (filters.query)
      filteredProducts = filteredProducts.filter((prod) => prod.subname.toLowerCase().includes(filters.query.toLowerCase().trim()))
    
    if(filters.brand !==`all`) {
        
       filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(filters.brand.toLowerCase()))
      }

     /* if(filters.size!== `all`) {

      //  console.log("size", filteredProducts.forEach((prod)=>{prod.sizes.map((ele)=>{ ele.size ===filters.size
    
        //  console.log(ele.size === filters.size)
      //  } 
      //    )}))
        
      
         filteredProducts=filteredProducts.forEach((prod)=>{prod.sizes.forEach((ele)=>{ ele.size ===filters.size } 
         )})
    
       }*/

    if (filters.rating !== `all`)
      filteredProducts = filteredProducts.filter((prod) => Number(prod.rating) >= Number(filters.rating))
    if (filters.maxPrice > 0)
      filteredProducts = filteredProducts.filter((prod) => Number(prod.sailingPrice) <= Number(filters.maxPrice))
      console.log(`Filter by brand`, filters.brand)

   


    // Sort if appropriate
    switch (filters.sortBy) {
      case `highest`:
        filteredProducts.sort((a, b) => a.sailingPrice - b.sailingPrice)
        break;
      case `lowest`:
        filteredProducts.sort((a, b) => b.sailingPrice - a.sailingPrice)
        break;
      case `rating`:
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break;
    }

    // Assign the filtered products to the result state
    setProductResult(filteredProducts)

  }, [filters])
  
  return (
    <>
        <main className="products">

            <header className="heading">
                <h1>Sale on Women's Perfume</h1>
            </header>
            <Filters filters={filters} setFilters={setFilters} />
            <ProductList products={productResult} />

            
            
        </main>
            
    </>
  )
}

export default PageShop