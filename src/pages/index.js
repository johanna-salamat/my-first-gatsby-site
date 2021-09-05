//Step 1: Import React from 'react'
import * as React from 'react'
import Layout from '../components/layout'

//Step 2: Define the component. Must begin with a capital letter
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

//Step 3: Export the component
export default IndexPage
 