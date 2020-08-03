import React from 'react' ;
import SkillCard from './skill_card'

const Skills = () => {
	
	return (
		
		<div className="dashboard container">
			
			<h1 className="jet-text">Skills</h1>

			<div>
				<h3>Database</h3>
				<div className="row">
					<div className="col s12 m4">
						<SkillCard 
							name="MySQL"
							description="The Ultimate MySQL Bootcamp by Colt Steele on Udemy"
							date="April 2020-Present"
							row="database"
							img="MySQL.png"
						/>
					</div>
					<div className="col s12 m4">
						<SkillCard 
							name="FileMaker"
							description="Head of Operations for Studio Suite, Senior FileMaker Developer at Adatasol"
							date="Fall 2016-Present"
							row="database"
							img="FileMaker.png"
						/>
					</div>
					<div className="col s12 m4">
						<SkillCard 
							name="Firestore"
							description="Serverless database for the this site's blog and consultation requests."
							date="July 2020-Present"
							row="database"
							img="firestore.png"
						/>
					</div>
				</div>
			</div>

			<div>
				<h3>Languages</h3>
				<div className="row">
					<div className="col s12 m6">
						<SkillCard 
							name="JavaScript"
							description="Cut my teeth on JS in FileMaker web viewers. Built this website using React.JS"
							date="2015-Present"
							row="languages"
							img="JavaScript.png"
						/>
					</div>
					<div className="col s12 m6">
						<SkillCard 
							name="Python"
							description="Completed Python for Everybody MOOC from the University of Michigan with honors."
							date="April 2020-Present"
							row="languages"
							img="Python.png"
						/>
					</div>
					{/* <div className="col s12 m4">
						<SkillCard 
							name="SQL"
							description="Execute SQL in FileMaker and The Ultimate MySQL Bootcamp by Colt Steele on Udemy"
							date="April 2020-Present"
							row="languages"
						/>
					</div> */}
				</div>
				<div className="row">
					<div className="col s12 m4">
						<SkillCard 
							name="HTML"
							description="Duh"
							date="2015-Present"
							img="HTML.png"
						/>
					</div>
					<div className="col s12 m4">
						<SkillCard 
							name="CSS"
							description="Also duh"
							date="2015-Present"
							img="CSS.png"
						/>
					</div>
					<div className="col s12 m4">
						<SkillCard 
							name="Spanish"
							description="Minored in Spanish at The Ohio State University. Lived in Barcelona, Spain."
							date="2006-Present"
							img="spanishFlag.png"
						/>
					</div>
				</div>
			</div>

			<div>
				<h3>Front End</h3>
				<div className="row">
					<div className="col s12 m6">
						<SkillCard 
							name="React"
							description="Front-end for this website"
							date="May 2020-Present"
							img="React.png"
						/>
					</div>
					<div className="col s12 m6">
						<SkillCard 
							name="Materialize CSS"
							description="CSS library for this website"
							date="May 2020-Present"
							img="MaterializeCSS.png"
						/>
					</div>
				</div>
			</div>

			<div>
				<h3>Back End</h3>
				<div className="row">
					<div className="col s12 m12">
						<SkillCard 
							name="Node.js/Express"
							description="Back-end for this website"
							date="May 2020-Present"
							img="NodeJS.png"
						/>
					</div>
				</div>
			</div>

			<div>
				<h3>Misc</h3>
				<div className="row">
					<div className="col s12 m6">
						<SkillCard 
							name="Git"
							description="Version control for this website."
							date="May 2020-Present"
							img="git.png"
						/>
					</div>
					<div className="col s12 m6">
						<SkillCard 
							name="Shell"
							description="Comfortable in the terminal"
							date="2015-Present"
							img="terminal.png"
						/>
					</div>
				</div>
			</div>

			<div>
				<h3>Soft Skills</h3>
				<div className="row">
					<div className="col s12 m12">
						<SkillCard 
							name="Leadership"
							description="Managing a team, making tough decisions"
							date="January 2019-Present"
							img="leadership.png"
						/>
					</div>
				</div>
			</div>

			<div>
				<h3>Certifications</h3>
				<div className="row">
					<div className="col s12 m12">
						<SkillCard 
							name="Python for Everybody"
							description="MOOC from University of Michigan"
							date="April 2020"
							img="coursera.png"
						/>
					</div>
				</div>
			</div>
			
		</div>
		
	) ;
	
} ;

export default Skills ;