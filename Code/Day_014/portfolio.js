import React from 'react' ;
import ProjectList from './projectList' ;

class Portfolio extends React.Component {

	componentDidMount() {
		this.props.action('Portfolio')
	}
	
	render() {	
		return (
			
			<div className="dashboard container">
				
				<h2>Portfolio</h2>
				
				<ProjectList />
				
			</div>
			
		)
	}
	
}

export default Portfolio ;