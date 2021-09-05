//Step 1: Import React from 'react'
import * as React from 'react'
import Layout from '../components/layout'

//Step 2: Define the component. Must begin with a capital letter
const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I am the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

//Step 3: Export the component
export default AboutPage
