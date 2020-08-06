// THE NAVBAR COMPONENT IS NOT GOING TO HAVE STATE. CAN JUST BE A FUNCTIONAL COMPONENT INSTEAD OF A CLASS COMPONENT

import React from 'react' ;

import { NavLink } from 'react-router-dom' ;

const NavSegment = (props) => {
	
	// console.log(props) ;
	
	return (
		
		<li className={`sidenav-close${props.activeTab === props.label ? ' active' : null}`} onClick={() => props.action(props.label)}><NavLink to={props.url}>{props.label}</NavLink></li>

	)

} ;

export default NavSegment ;