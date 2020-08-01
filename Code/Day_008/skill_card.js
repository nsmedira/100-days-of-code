import React from 'react'

const SkillCard = (props) => {

	console.log(props.img)
	
	return (
	
		<div className={`card ${props.row} small eggshell`}>
			<div className="card-image">
				<img className="responsive-img" src={props.img == null ? "" : require(`../../images/skills/${props.img}`)} alt={props.img}/>
				<span className="card-title cg-blue-text">{props.name}</span>
			</div>
			<div className="card-content">

				{/* <span className="card-title eggshell-text">{props.name}</span> */}
				<p className="cg-blue-text">{props.description}</p>
				<p className="cg-blue-text">{props.date}</p>

			</div>
		</div>
			
	)
	
} ; 

export default SkillCard ;