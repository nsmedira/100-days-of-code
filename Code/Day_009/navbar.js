// THE NAVBAR COMPONENT IS NOT GOING TO HAVE STATE. CAN JUST BE A FUNCTIONAL COMPONENT INSTEAD OF A CLASS COMPONENT

import React from 'react' ;
import { Link } from 'react-router-dom' ;
import NavList from './nav_list'
import M from 'materialize-css' ;

// IMPORT CUSTOM CSS FILE FOR NAV HEADER COLOR
import '../layout.css'

const Navbar = () => {

	document.addEventListener('DOMContentLoaded', function() {
		let options = {}
		let elems = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elems, options)
    });
	
	// THE PURPOSE OF THE NAVBAR FUNCTION IS TO RETURN THE JSX TEMPLATE FOR OUR NAVBAR WRAPPER
	return (
		
		<div>

			<ul className='sidenav' id='mobile-links'>
				<NavList />
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
								<NavList />
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
} ;

export default Navbar ;