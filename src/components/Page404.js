import React from 'react'
import {Link} from 'react-router-dom'

const Page404  = () => {
    return (
        <>
           <h1>404</h1>
           <h2>The page you were looking for does not exist</h2>
           <Link to="/">Go back home</Link> 
        </>
    )
}

export default Page404