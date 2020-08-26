import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { rhythm } from "../utils/typography"

// BROKEN HOME PAGE ELEMENTS
// import './home.css'
// import { Link } from 'react-router-dom'

class Home extends Component {

	componentDidMount() {
		// this.props.action('Home')
	}

	render(){

		// MOVED INTO GATSBY-CONFIG.JS AT ROOT
		// const description = "Portfolio and blog of JavaScript and FileMaker developer Nick Smedira."
		// const title = "NickSmedira.com"

		const siteTitle = this.props.data.site.siteMetadata.title
		const description = this.props.data.site.siteMetadata.description
		const posts = this.props.data.allMarkdownRemark.edges

		return(
			
			<>

				<Helmet>
					<title>{siteTitle}</title>
					<meta
						name="description"
						content={description}
					/>
					<meta
						name="twitter:card" 
						content="summary"
					/>
					<meta
						name="twitter:description" 
						content={description}
					/>
					<meta
						name="twitter:title" 
						content={siteTitle}
					/>
					<link rel="canonical" href="https://nicksmedira.com" />
				</Helmet>

				<div>
		
					<div className="dashboard container">
	
						<div className="section" style={{marginTop: "2em"}}>
							<div className="row">
								{/* <Link to={"/portfolio"}> */}
									<div className="col s4">
										<img src="https://res.cloudinary.com/nsmedira/image/upload/f_auto,q_auto/e_replace_color:ece2d0/v1597433173/projects_zxehfv.png" alt="portfolio" className="responsive-img circle hoverable _tooltipped" data-position="bottom" data-tooltip="View my portfolio..."/>
										<p className="flow-text eggshell-text center-align">Portfolio</p>
									</div>
								{/* </Link> */}
								{/* <Link to={"/skills"}> */}
									<div className="col s4">
										<img src="https://res.cloudinary.com/nsmedira/image/upload/f_auto,q_auto/e_replace_color:ece2d0/v1597433173/skills_n1erkl.png" alt="skills" className="responsive-img circle hoverable _tooltipped" data-position="bottom" data-tooltip="View my skills..."/>
										<p className="flow-text eggshell-text center-align">Skills</p>
									</div>
								{/* </Link> */}
								{/* <Link to={"/blog"}> */}
									<div className="col s4">
										<img src="https://res.cloudinary.com/nsmedira/image/upload/f_auto,q_auto/e_replace_color:ece2d0/v1597433173/blog_qqvelt.png" alt="skills" className="responsive-img circle hoverable _tooltipped" data-position="bottom" data-tooltip="View my blog..."/>
										<p className="flow-text eggshell-text center-align">Blog</p>
									</div>
								{/* </Link> */}
							</div>
						</div> 
	
						<div className="divider"></div>
	
						<div className="section">
							<div className="featured-post eggshell-text">
								<article>
									<header>
										<div className="post-meta">
											<span className="featured-badge">Featured Post</span>
											&nbsp;/&nbsp;
											<time className="published eggshell-text" dateTime="2020-07-27">July 27, 2020</time>
										</div>
										<h2 className="home">Welcome to my portfolio/blog website!</h2>
									</header>
									<div className="post-content">
										<p className="flow-text home">
											Learn more about this site...
										</p>
										<div className="chip eggshell blue-text hoverable">general</div>
										<div className="read-more">
											<a href="/blog/welcome-to-nick-smedira-com" className="waves-effect waves-light btn hoverable">Continue Reading</a>
										</div>
									</div>
								</article>
							</div>
						</div>
						
						<div className="divider last-divider"></div>
					</div>
				</div>
			</>
		)
	}
} ;

export default Home

export const pageQuery = graphql `
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`