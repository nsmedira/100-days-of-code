import React from 'react' ;

const ProjectCard = (props) => {

	const urls = props.urls
	let links = null
	if ( urls ) {
		links = urls.map((url, i) => {
			let href = 'https://' + url
			return <div key={i}><a href={href} style={{'textDecoration': 'underline'}}>{url}</a></div>
		})
	}

	const description = props.description
	let text = null
	if ( description ) {
		text = description.map((paragraph, i) => {
			return <div key={i}><p>{paragraph}</p><br></br></div>
		})
	}

	return (
	
		// <div className="card medium eggshell hoverable z-depth-2">
		<div className="card eggshell hoverable z-depth-2">
			<div className="card-content cg-blue-text">

				<span className="cg-blue-text card-title">{props.title}</span>

				{/* <p className="eggshell-text">{props.description}</p> */}
				{
					text &&
					<div className="cg-blue-text">{text}</div>
				}

				{ 
					links && 
					<div>
						{/* <br></br> */}
						<p className="cg-blue-text">Client(s):</p>
						<div className="cg-blue-text">{links}</div>

						{/* <p className="eggshell-text">{props.date}</p> */}

					</div>
				}	

			</div>
		</div>
			
	)
	
} ; 

export default ProjectCard ;