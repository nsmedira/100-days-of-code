import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
// import M from 'materialize-css'
// import Carousel from './carousel'

class Home extends Component {

	componentDidMount() {
		this.props.action('Home')
	}

	render(){

		// DON'T THINK THIS IS USED RIGHT NOW
		// document.addEventListener('DOMContentLoaded', function(){
		// 	var elems = document.querySelectorAll('.tooltipped')
		// 	M.Tooltip.init(elems)
		// })

		return(
			
			<div>

				{/* <div className="dashboard container">
					<div className="row">
						<div className="col s12 m12">
							<h1>Check back after <strong>August 14</strong>!</h1>
							<p>For more information in the meantime, please <a href="mailto:nick@nicksmedira.com?subject=I would like more information!">send me a message.</a></p>
						</div>
					</div>
					<div className="row">
						<Carousel />
					</div>
				</div> */}
	
				<div className="dashboard container">

					<div className="section">
						<div className="row">
							<Link to={"/portfolio"}>
								<div className="col s4">
									<img src={require("../../images/home/cards/projects.png")} alt="portfolio" className="responsive-img circle hoverable _tooltipped" data-position="bottom" data-tooltip="View my portfolio..."/>
									<p className="flow-text center-align">Portfolio</p>
								</div>
							</Link>
							<Link to={"/skills"}>
								<div className="col s4">
									<img src={require("../../images/home/cards/skills.png")} alt="skills" className="responsive-img circle hoverable _tooltipped" data-position="bottom" data-tooltip="View my skills..."/>
									<p className="flow-text center-align">Skills</p>
								</div>
							</Link>
							<Link to={"/blog"}>
								<div className="col s4">
									<img src={require("../../images/home/cards/blog.png")} alt="skills" className="responsive-img circle hoverable _tooltipped" data-position="bottom" data-tooltip="View my blog..."/>
									<p className="flow-text center-align">Blog</p>
								</div>
							</Link>
						</div>
					</div>

					<div className="divider"></div>

					<div className="section">
						<div className="featured-post">
							<article>
								<header>
									{/* <nav>
										<div className="nav-wrapper">
											<div className="col s12">
												<a href="#!" className="breadcrumb">Featured Post</a>
												<a href="#!" className="breadcrumb">July 27, 2020</a>
												<a href="#!" className="breadcrumb">Welcome to NickSmedira.com!</a>
											</div>
										</div>
									</nav> */}
									<div className="post-meta">
										<span className="featured-badge">Featured Post</span>
										&nbsp;/&nbsp;
										<time className="published" dateTime="2020-07-27">July 27, 2020</time>
									</div>
									<h2>Welcome to NickSmedira.com</h2>
								</header>
								<div className="post-content">
									<p className="flow-text">
										Learn more about this website...
									</p>
									<div className="chip fire-opal-text hoverable">general</div>
									<div className="read-more">
										<a href="/blog/welcome-to-nick-smedira-com" className="waves-effect waves-light btn hoverable">Continue Reading</a>
									</div>
								</div>
							</article>
						</div>
					</div>
					
					<div className="divider"></div>
				</div>
			</div>
		)
	}
} ;

export default Home ;