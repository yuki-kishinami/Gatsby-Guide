import React from "react"
import {Link,graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby','application','react']}/>
    <h1>Hi Great Gatsby</h1>
    {data.allWorksYaml.edges.map(edge => {
      const work = edge.node
      return <div>
        <Link to={`/works/${work.slug}`}>
        {work.title} - {work.category} - {work.year}
        </Link>
      </div>
      
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
query {
  allWorksYaml {
    edges {
      node {
        title
        category
        year
        slug
      }
    }
  }
}
`


export default IndexPage
