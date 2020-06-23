import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        slug
                        title
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    /** 
    const oldData = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    */

    return (
        <Layout>
            <Head title="Blog"></Head>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {/* Just get the Array from the query, and then .map each element in the array */}
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            {/* For each element in the array, grab the data */}
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage