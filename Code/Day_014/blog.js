import React from 'react'
// import Articles from './articles' ;

// import Categories from '../../components/blog/categories'
import Articles from '../../containers/Articles'

class Blog extends React.Component {

	componentDidMount() {
		this.props.action('Blog')
	}
	
	render() {	
		return (
			
			<div className="dashboard container">
				
				<h2>Blog</h2>
				
				{/* <Categories /> */}
				<Articles />
				
			</div>
			
		)
	}
	
}

export default Blog