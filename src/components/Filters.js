import React from 'react'
import 'css/style.css'


const Filters = ({filters, setFilters}) => {


    const handleRatingChange = (event)=>{
        setFilters({
          ...filters,
          rating: event.target.value
        })
    }
   const handleBrandChange = (event)=>{
        setFilters({
            ...filters,
            brand: event.target.value
        })
	}
    const HandleSizes = (event) => {
        setFilters({
          ...filters,
          size: event.target.value
        })
      }
/*  const handleSortProducts = (event) => {
        switch (parseInt(event.target.value)) {
          case 1:
            setProductResult(sortProducts(products, byPriceAsc))
            break;
          case 2:
            setProductResult(sortProducts(products, byPriceDesc))
            break;
          case 3:
            setProductResult(sortProducts(products, byRating))
            break;
        }
      }
*/

 /*   console.log(sortProducts(products,byPriceAsc))
	console.log(sortProducts(products,byPriceDesc))
	console.log(sortProducts(products,byRating))
 */
    return (
    <>
        {/*<!-- Filtering product form -->*/}
        <form className="filters">
                <h2>Filter By</h2>
                <div className="filter-options">
                    <fieldset>
                        <legend>Brands</legend>
                        <ul className="filter-list">
                            <li>
                            <input type="radio" name="brand" value="all" id="allBrands" onChange={handleBrandChange} checked={(filters.brand === `all`) ? true : false} />
                                    <label htmlFor="allBrands">All brands</label>
                           
                            </li>
                            <li>
                                <input type="radio" name="brand" value="armani beauty" id="armani-beauty" onChange={handleBrandChange}/> 
                                <label htmlFor="armani-beauty">Armani Beauty</label>
                            </li>           
                            <li>
                                <input type="radio" name="brand" value="dior" id="dior" onChange={handleBrandChange}/>
                                <label htmlFor="dior">Dior</label>
                            </li>
                            <li>
                                <input type="radio" name="brand" value="dolce&gabbana" id="dolce-gabbana" onChange={handleBrandChange}/> 
                                <label htmlFor="dolce-gabbana">DOLCE&GABBANA</label>
                            </li>
                            <li>
                                <input type="radio" name="brand" value="gucci" id="gucci" onChange={handleBrandChange}/>
                                <label htmlFor="gucci">Gucci</label>
                            </li>
                            <li>
                                <input type="radio" name="brand" value="versace" id="versace" onChange={handleBrandChange}/>
                                <label htmlFor="versace">Versace</label>
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Sizes</legend>
                            <ol className="filter-list">

                                <li><input type="radio" name="size" value="mini" id="mini"onChange={HandleSizes}/> <label htmlFor="mini">Mini</label></li>
                                <li><input type="radio" name="size" value="value" id="value" onChange={HandleSizes}/> <label htmlFor="value">Value</label></li>
                            </ol>
                    </fieldset>
                    <fieldset>
                        <input type="search" value={filters.query} onChange={(event)=>{
                            setFilters({
                                ...filters,
                                query: event.target.value
                            })
                        }} />
                    </fieldset>
                    <fieldset>
                        <legend>Ratings (above)</legend>
                            <ol className="filter-list">
                                <li>
                                    <input type="radio" name="rating" value="all" id="aboveZero" onChange={handleRatingChange} checked={(filters.rating === `all`) ? true : false} />
                                    <label htmlFor="aboveZero">Any review</label>
                                </li>
                                <li>
                                    <input type="radio" name="rating" value="1" id="aboveOne" onChange={handleRatingChange}/>
                                    <label htmlFor="aboveOne">
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" name="rating" value="2" id="aboveTwo" onChange={handleRatingChange} />
                                    <label htmlFor="aboveTwo">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" name="rating" value="3" id="aboveThree" onChange={handleRatingChange} />
                                    <label htmlFor="aboveThree">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" name="rating" value="4" id="aboveFour" onChange={handleRatingChange} />
                                    <label htmlFor="aboveFour">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </label>
                                </li>
                            </ol>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="passingby">Max price</label>
					    <input type="range" id="passingby" min="0" max="300" value={filters.maxPrice} step="5" 
                               onChange={(event)=>{
                                    setFilters({
                                        ...filters,
                                        maxPrice: Number(event.target.value)
                                    })
                        }} />
					    <output htmlFor="passingby">{(filters.maxPrice) ? `under $${Math.round(filters.maxPrice)}` : `all`}</output>
                    </fieldset>
                </div>
                <fieldset>
                    <label htmlFor="sort">Show</label>
                    <select name="sort" id="sort" defaultValue={filters.sortBy} 
                            onChange={(event)=>{
                                setFilters({
                                    ...filters,
                                    sortBy: event.target.value
                                })
                            }}>
                        <option value="none" disabled>-- Sort by --</option>
                        <option value="lowest">Price, lowest to highest</option>
                        <option value="highest">Price, highest to lowest</option>
                        <option value="rating">Highest rated</option>
                    </select>
                </fieldset>
            </form>
        
    </>)
}

export default Filters