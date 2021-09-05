//Step 1: Import React from 'react'
import * as React from 'react'
import { Link } from 'gatsby'

//Step 2: Define the component. Must begin with a capital letter
const AboutPage = () => {
  return (
    <main>
      <title>About ME</title>
      <h1> About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I am the proud creator of this site, which I built with Gatsby.</p>
    </main>
    )
}

//Step 3: Export the component
export default AboutPage
