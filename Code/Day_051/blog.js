import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostLink from '../components/post-link'

const BlogIndex = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // you can filter your posts
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    
    return (
        <Layout>
            <SEO title="Blog" />

            <div className="container">
                <h2 className="eggshell-text">Blog</h2>
                {Posts}
            </div>

        </Layout>
    )

}

export default BlogIndex

export const pageQuery = graphql`
    query {
        allMarkdownRemark ( sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        categories
                    }
                }
            }
        }
    }
`