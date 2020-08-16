import React from 'react'
import { Helmet } from 'react-helmet'
// import Articles from './articles' ;

// import Categories from '../../components/blog/categories'
import Articles from '../../containers/Articles'

class Blog extends React.Component {

	componentDidMount() {
		this.props.action('Blog')
	}
	
	render() {	
		return (
			
			<>

				<Helmet>
					<title>Blog - NickSmedira.com</title>
					<meta
						name="description"
						content="Assorted tutorials, writings, and musings of JavaScript/FileMaker developer Nick Smedira. Mostly tech-related, but with a smattering of random thoughts..."
					/>
					<link rel="canonical" href="https://nicksmedira.com/blog" />
				</Helmet>

				<div className="container">
					
					<h2 className="eggshell-text">Blog</h2>
					
					{/* <Categories /> */}
					<Articles />
					
				</div>
			</>
			
		)
	}
	
}

export default Blog