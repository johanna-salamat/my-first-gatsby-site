//Step 1: Import React from 'react'
import * as React from 'react'
import { Link } from 'gatsby'

//Step 2: Define the component. Must begin with a capital letter
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1> Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I am making this by following the Gatsby Tutorial.</p>
    </main>
    )
}

//Step 3: Export the component
export default IndexPage
 