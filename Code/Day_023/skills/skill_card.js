import React from 'react'

const SkillCard = ({img, name, description, date}) => {
	
	return (
	
		// <div className={`card ${props.row} small eggshell hoverable z-depth-2`}>
		<div className={`card eggshell hoverable z-depth-2`}>
			<div className="card-image">

				{/* REPLACE W/ CLOUDINARY LINKS */}
				{/* <img className="responsive-img" src={props.img == null ? "" : require(`../../images/skills/${props.img}`)} alt={props.img}/> */}
				<img className="responsive-img" src={`https://res.cloudinary.com/nsmedira/image/upload/f_auto,q_auto/v1597575827/${img}`} alt={img}/>

				<span className="card-title cg-blue-text">{name}</span>
			</div>
			<div className="card-content">

				{/* <span className="card-title eggshell-text">{props.name}</span> */}
				<p className="cg-blue-text">{description}</p>
				<p className="cg-blue-text">{date}</p>

			</div>
		</div>
			
	)
	
} ; 

export default SkillCard ;