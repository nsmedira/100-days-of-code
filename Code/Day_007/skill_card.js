import React from 'react'

const SkillCard = (props) => {

	console.log(props.img)
	
	return (
	
		<div className={`card ${props.row} small cg-blue`}>
			<div className="card-image">
				<img className="responsive-img" src={props.img == null ? "" : require(`../../images/skills/${props.img}`)} alt={props.img}/>
				<span className="card-title">{props.name}</span>
			</div>
			<div className="card-content jet-text">

				{/* <span className="card-title eggshell-text">{props.name}</span> */}
				<p className="eggshell-text">{props.description}</p>
				<p className="eggshell-text">{props.date}</p>

			</div>
		</div>
			
	)
	
} ; 

export default SkillCard ;