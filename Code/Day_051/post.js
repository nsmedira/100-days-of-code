import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
    data, // this prop will be injected by the GraphQL query below
}) {

    // the following is equivalent to
    // const markdown = data.markdownRemark
    const { markdownRemark } = data // data.markdownRemark holds your post data

    const { frontmatter, html } = markdownRemark // markdownRemark.frontmatter, markdownRemark.html

    return (
        <Layout>

            <SEO title={frontmatter.title} />

            <div className="container">
                <div 
                    className="row"
                    style={
                        {
                            background: "rgba(0, 0, 0, 0.5)",
                            padding: "5% 5% 5% 5%",
                            marginTop: "3em",
                            marginBottom: "3em"
                        }
                    }
                >
                    <div className="col s12">
        
                        <header>
                            <h3 className="eggshell-text">{frontmatter.title}</h3>
                            <p className="eggshell-text"><small>{frontmatter.author} on {frontmatter.date}</small></p>
                        </header>
        
                        {/* <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        /> */}
        
                        <main>
                            <article 
                                className="eggshell-text blog-post-content" 
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </main>
        
                    </div>
                </div>
            </div>
            
        </Layout>
    )

}

export const pageQuery = graphql`

    query ($slug: String!){
        markdownRemark(frontmatter: { slug: { eq: $slug }}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                author
            }
        }
    }

`