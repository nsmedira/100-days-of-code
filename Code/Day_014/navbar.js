// THE NAVBAR COMPONENT IS NOT GOING TO HAVE STATE. CAN JUST BE A FUNCTIONAL COMPONENT INSTEAD OF A CLASS COMPONENT

import React from 'react' ;
import { Link } from 'react-router-dom' ;
import NavList from './nav_list'
import M from 'materialize-css' ;

// IMPORT CUSTOM CSS FILE FOR NAV HEADER COLOR
import '../layout.css'

class Navbar extends React.Component {

	// using this article to update state in this component
	// https://ourcodeworld.com/articles/read/409/how-to-update-parent-state-from-child-component-in-react

	// constructor (props) {
	// 	super (props)

		// bind the 'this' context to the handler function
		// this.handler = this.handler.bind(this)

		// set active tab in state
		// this.state = {
		// 	activeTab: "Home"
		// }

	// }

	// this method will be sent to the child component
	// handler(tab) {
	// 	console.log('handler called')
	// 	this.setState({
	// 		activeTab: tab
	// 	})
	// }

	componentDidMount() {	
		// console.log('nav-bar active tab is ', this.state.activeTab)
		document.addEventListener('DOMContentLoaded', function() {
			let options = {closeOnClick: true}
			let elems = document.querySelectorAll('.sidenav')
			M.Sidenav.init(elems, options)
		})
	}
	
	render() {	
		// THE PURPOSE OF THE NAVBAR FUNCTION IS TO RETURN THE JSX TEMPLATE FOR OUR NAVBAR WRAPPER
		return (
			
			<div>

				<ul className='sidenav' id='mobile-links'>
					{/* <NavList activeTab={this.state.activeTab} action={this.handler}/> */}
					<NavList activeTab={this.props.activeTab} action={this.props.action}/>
				</ul>

				<div className="navbar-fixed">
					
					<nav>
						
						{/* 'NAV-WRAPPER' IS A MATERIALIZED CLASS (THE MATERIALIZE CSS FRAMEWORK) */}
						<div className='nav-wrapper'>
							{/*'CONTAINER' IS A MATERIALIZED CLASS*/}
							<div className="container">
								
								{/*'BRAND-LOGO' IS A MATERIALIZED CLASS*/}
								<Link to='/' className='brand-logo'>Nick Smedira</Link>
				
								<a href="/#" className="sidenav-trigger" data-target='mobile-links'>
									<i className="material-icons left hide-on-large-only">menu</i>
								</a>
								
								
								<ul className='right hide-on-med-and-down'>
									{/* <NavList activeTab={this.state.activeTab} action={this.handler}/> */}
									<NavList activeTab={this.props.activeTab} action={this.props.action}/>
								</ul>
				
								{/* <ul className='sidenav' id='mobile-links'>
									<NavList />
								</ul> */}
								
							</div>
						</div>
						
					</nav>	
		
				</div>

			</div>
		)
	}
} ;

export default Navbar ;