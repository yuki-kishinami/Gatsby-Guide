import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <h1>I'm yuki</h1>
        <Link to="/">Go back to homepage</Link>
    </Layout>
)

export default AboutPage