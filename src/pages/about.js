import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"></Head>
            <h1>About</h1>
            <p>I am Christian Reuterwall, a father and DevOps engineer.</p>
            <p>Feel free to contact me! <Link to="/contact">My contacts!</Link></p> 
        </Layout>
    )
}

export default AboutPage