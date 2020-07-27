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
            <h1>{title}</h1>
            <h5>{author} on <Moment format="MMM Do YYYY">{date}</Moment></h5>
            {renderHTML(content)}
		</div>
			
	)
	
} ; 

export default BlogPostFirebase ;