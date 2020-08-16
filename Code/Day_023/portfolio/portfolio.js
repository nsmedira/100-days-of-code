import React from 'react'
import ProjectList from './projectList'
import { Helmet } from 'react-helmet'

class Portfolio extends React.Component {

	componentDidMount() {
		this.props.action('Portfolio')
	}
	
	render() {	
		return (
			
			<>
				<Helmet>
					<title>Portfolio - NickSmedira.com</title>
					<meta name="description" content="Portfolio of past projects. Learn about the my developer experience. Head of Operations for Adatasol's Studio Suite division. Inventory Management System for FileMaker Go platform. Numerous CRM and ERP systems..." />
					<link rel="canonical" href="https://nicksmedira.com/portfolio" />
				</Helmet>

				<div className="dashboard container">
					
					<h2 className="eggshell-text">Portfolio</h2>
					
					<ProjectList />
					
				</div>
			</>
			
		)
	}
	
}

export default Portfolio ;