import React from 'react' ;
import NavSegment from './nav_segment' ;

const NavList = (props) => {

    console.log(props)
	
	return (
		
		<div>
            {/* <NavSegment url='/filemaker' label="FileMaker Consulting"/> */}
            <NavSegment activeTab={props.activeTab} url='/' label="Home" action={props.action}/>
            <NavSegment activeTab={props.activeTab} url='/portfolio' label="Portfolio" action={props.action}/>
            <NavSegment activeTab={props.activeTab} url='/skills' label="Skills" action={props.action}/>
            <NavSegment activeTab={props.activeTab} url='/blog' label="Blog" action={props.action}/>
            <NavSegment activeTab={props.activeTab} url='/about' label="About" action={props.action}/>
        </div>
	)
} ;

export default NavList ;