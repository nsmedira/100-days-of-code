import React from 'react' ;
import renderHTML from 'react-render-html'
import Moment from "react-moment"
import { Helmet } from 'react-helmet'
import './blogPost.css'

const BlogPostFirebase = ({title, content, author, date, summary, slug}) => {
    
    // const title = props.title
    // const content = props.content
    // const author = props.author
    // const date = props.date
    // const summary = props.summary
    // const slug = props.slug

	return (

        <>

            <Helmet>
                <title>{`${title} - NickSmedira.com`}</title>
                <meta
                    name="description"
                    content={summary}
                />
                <link rel="canonical" href={`https://nicksmedira.com/blog/${slug}`} />
            </Helmet>

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
                        <h3 className="eggshell-text">{title}</h3>
                        <p className="eggshell-text"><small>{author} on <Moment format="MMM Do YYYY">{date}</Moment></small></p>
                    </header>
                    
                    <main>
                        <article className="eggshell-text blog-post-content">
                            {renderHTML(content)}
                        </article>
                    </main>
                </div>
            </div>
        </>
			
	)
	
} ; 

export default BlogPostFirebase ;