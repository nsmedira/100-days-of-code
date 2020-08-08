import React from 'react' ;
// import WindowArch from '../../images/about/photography/arches.jpg' ;
// import HorseshoeBend from '../../images/about/photography/horseshoe_bend.jpg' ;

class About extends React.Component {

	componentDidMount() {
		this.props.action('About')
	}
	
	render() {	
		return (
			
			<div className="dashboard container">
				
				<h1>Nick Smedira</h1>

				<h4>Biography</h4>
				<p>Golfer, hispanohablante, guitarist, DIY mechanic, tennis player, coffee abuser, photographer, politics junkie, Jeep and Honda enthusiast, home cook, proud cat dad, armchair philosopher.</p>

				{/* <h4>Photography</h4>
				<div className="row">
					<div className="col s12 m12 l6">
						<img className="responsive-img" src={WindowArch} alt="Window Arch at Arches National Park near Moab, Utah"/>
					</div>
					<div className="col s12 m12 l6">
						<img className="responsive-img" src={HorseshoeBend} alt="Horseshoe Bend near Page, Arizona"/>
					</div>
				</div>

				<h4>Countries Visited</h4>

				<h4>USA States Visited</h4> */}

			</div>
			
		)
	}
	
}

export default About