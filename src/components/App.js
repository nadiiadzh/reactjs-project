import React,{useEffect,useState,vuseState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ProductContext from 'contexts/productContext'
import 'css/style.css'
import firebase from 'util/firebase'
import Header from './header'
import PageHome from 'components/PageHome'
import PageShop from 'components/PageShop'
import PageProduct from 'components/PageProduct'
import PageAbout from 'components/PageAbout'
import PageContact from 'components/PageContact'
import Page404 from 'components/Page404'
import Footer from './footer'

const App = () => {

	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
  
	useEffect(() => {
	  const db = firebase.firestore()
  
	  db.collection(`Flowers`).get().then(
		(snapshot) => {
		  const flowerData = []// an empty array
		  console.log("Got the datas")
  
		  snapshot.docs.forEach(doc => {
			  const record =doc.data() //Object
			flowerData.push(record) //Push the object the end of the array
		  })
       // update the state (re -render)
		setProducts(flowerData)
		setLoading(false)
	  })
	},[])

	
	

	
	return(
		<>
		{
			(loading)
			?
			<h1>Loading...</h1>
			:
		
		<ProductContext.Provider value={products}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={PageHome} />
					<Route path="/about" component={PageAbout} />
					<Route path="/contact" component={PageContact} />
					<Route path="/shop"  component={PageShop} />
					<Route path="/product/:slug" component={PageProduct} />
					<Route path="*" component={Page404} />
					
				</Switch>
				<Footer />
		</Router>
	</ProductContext.Provider>
	}
	</>
	)
}

export default App


	