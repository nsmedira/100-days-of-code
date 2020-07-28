import React from 'react' ;
import renderHTML from 'react-render-html'
import Moment from "react-moment"
import './blogPost.css'

const BlogPostFirebase = (props) => {
    
    const title = props.title
    const content = props.content
    const author = props.author
    const date = props.date

	return (
	
		<div className="dashboard container">

            <header>
                <h1>{title}</h1>
                <p><small>{author} on <Moment format="MMM Do YYYY">{date}</Moment></small></p>
            </header>
            
            <main>
                <article>
                    {renderHTML(content)}
                </article>
            </main>
            
		</div>
			
	)
	
} ; 

export default BlogPostFirebase ;