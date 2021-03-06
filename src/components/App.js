import React,{useEffect,useState,vuseState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ProductContext from 'contexts/productContext'
import 'css/style.css'
import firebase from 'util/firebase'
import Header from './header'
import PageHome from 'pages/PageHome'
import PageShop from 'pages/PageShop'
import PageProduct from 'pages/PageProduct'
import PageAbout from 'pages/PageAbout'
import PageContact from 'pages/PageContact'
import Page404 from 'pages/Page404'
import Footer from './footer'

const App = () => {

	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	 useEffect(async () => {
	 	const productData = await firebase.firestore().collection('products').get()
		
	 	setProducts(productData.docs.reduce((products, doc) => [...products, doc.data()], []))
		 setLoading(false)

	 }, [])	

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


	