import React from 'react' ;
import NavSegment from './nav_segment' ;

const NavList = () => {
	
	return (
		
		<div>
            {/* <NavSegment url='/filemaker' label="FileMaker Consulting"/> */}
            <NavSegment url='/' label="Home"/>
            <NavSegment url='/portfolio' label="Portfolio"/>
            <NavSegment url='/skills' label="Skills"/>
            <NavSegment url='/blog' label="Blog"/>
            <NavSegment url='/about' label="About"/>
        </div>
	)
} ;

export default NavList ;