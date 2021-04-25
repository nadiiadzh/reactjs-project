import React, {useContext,useEffect, useState} from 'react'
import Product from 'components/Product'
import {Pagination} from 'antd'
import 'antd/dist/antd.css'

const ProductList = ({products}) => {

    const [pageNum, setPageNum] = useState(1)
	const [maxResults, setMaxResults] = useState(5)
    const searchResult = products

	const onPageChange = (current, size) => {
		setPageNum(current)
	}
	
  console.log('uru',products)
    const allProducts = searchResult
    .slice((pageNum-1)*maxResults, (pageNum-1)*maxResults+maxResults)
    .map((prod) => <Product key={prod.id} data={prod} />)
   
 
  
    return (
        <>
            <section className="results">
                <h2 className="subheading">Results</h2>
                {allProducts}
            </section>
            <nav aria-label="Pagination" className="pagination">
            <p>{searchResult.length} products found</p>
            {/*
                <ol className="pages">
                <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                <li><a href="#" aria-label="Page 2">2</a></li>
                <li><a href="#" aria-label="Page 3">3</a></li>
                <li><a href="#" aria-label="Page 4">4</a></li>
                <li><a href="#" aria-label="Page 5">5</a></li>
            </ol>
            */}
            <Pagination defaultCurrent={1} current={pageNum} defaultPageSize={maxResults} total={searchResult.length} onChange={onPageChange} />
        </nav>
    </>

  )
}

export default ProductList