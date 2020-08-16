import React from 'react' ;
import SkillCard from './skill_card'
import { Helmet } from 'react-helmet'

class Skills extends React.Component {

	componentDidMount() {
		this.props.action('Skills')
	}
	
	render() {	

		return (
			
			<>

				<Helmet>
					<title>Skills - NickSmedira.com</title>
					<meta
						name="description"
						content="A summary of technologies and skills with which I have developer a level of proficiency, including FileMaker, JavaScript, React, and Firebase..."
					/>
					<link rel="canonical" href="https://nicksmedira.com/skills" />
				</Helmet>

				<div className="dashboard container skill-cards">
					
					<h1 className="eggshell-text">Skills</h1>
	
					<div>
						<h3 className="eggshell-text">Database</h3>
						<div className="row">

							<div className="col s12 m4">
								<SkillCard 
									name="FileMaker"
									description="Head of Operations for Studio Suite, Senior FileMaker Developer at Adatasol"
									date="Fall 2016-Present"
									// img="FileMaker.png"
									img="FileMaker_wa4gxm"
								/>
							</div>

							<div className="col s12 m4">
								<SkillCard 
									name="Firestore"
									description="Serverless database for the this site's blog and consultation requests."
									date="July 2020-Present"
									// img="firestore.png"
									img="firestore_bqwo7m"
								/>
							</div>

							<div className="col s12 m4">
								<SkillCard 
									name="MySQL"
									description="The Ultimate MySQL Bootcamp by Colt Steele on Udemy"
									date="April 2020-Present"
									// img="MySQL.png"
									img="MySQL_bdkseh"
								/>
							</div>

						</div>
					</div>
	
					<div>
						<h3 className="eggshell-text">Languages</h3>

						<div className="row">
							<div className="col s12 m6">
								<SkillCard 
									name="JavaScript"
									description="Cut my teeth on JS in FileMaker web viewers. Built this website using React.JS"
									date="2015-Present"
									// img="JavaScript.png"
									img="JavaScript_vrrdbi"
								/>
							</div>
							<div className="col s12 m6">
							{/* <div className="col s12 m6"> */}
								<SkillCard 
									name="Python"
									description="Completed Python for Everybody MOOC from the University of Michigan with honors."
									date="April 2020-Present"
									// img="Python.png"
									img="Python_bgybro"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col s12 m4">
								<SkillCard 
									name="HTML"
									description="Not an expert with HTML but needed to understand the basics in order to write JSX for React. What I didn't know, I Googled."
									date="2015-Present"
									// img="HTML.png"
									img="HTML_wijkt0"
								/>
							</div>
							<div className="col s12 m4">
								<SkillCard 
									name="CSS"
									description="I know less about CSS than HTML, but still applied some custom styling throughout this site where I was unsatisfied with the options built into the Materialize CSS framework."
									date="2015-Present"
									// img="CSS.png"
									img="CSS_m53h8v"
								/>
							</div>
							<div className="col s12 m4">
								<SkillCard 
									name="Spanish"
									description="Minored in Spanish at The Ohio State University. Lived in Barcelona, Spain."
									date="2006-Present"
									// img="spanishFlag.png"
									img="spanishFlag_hr0j7m"
								/>
							</div>
						</div>
					</div>
	
					<div>
						<h3 className="eggshell-text">Front End</h3>
						<div className="row">
							<div className="col s12 m6">
								<SkillCard 
									name="React"
									description="Front-end for this website"
									date="May 2020-Present"
									// img="React.png"
									img="React_ewyefc"
								/>
							</div>
							<div className="col s12 m6">
								<SkillCard 
									name="Materialize CSS"
									description="CSS library for this website"
									date="May 2020-Present"
									// img="MaterializeCSS.png"
									img="MaterializeCSS_hrw4eg"
								/>
							</div>
						</div>
					</div>
	
					<div>
						<h3 className="eggshell-text">Back End</h3>
						<div className="row">

							<div className="col s12 m6">
								<SkillCard 
									name="Firebase"
									description="Back-end for this website. Firestore database serves the blog data."
									date="May 2020-Present"
									// img="firebase.png"
									img="firebase_duq7sr"
								/>
							</div>

							<div className="col s12 m6">
								<SkillCard 
									name="Node.js/Express"
									description="The original back-end for this website. I became enamored with the serverless concept and so began working with Firebase instead."
									date="May 2020-Present"
									// img="NodeJS.png"
									img="NodeJS_uc0jbk"
								/>
							</div>

						</div>
					</div>
	
					<div>
						<h3 className="eggshell-text">Misc</h3>
						<div className="row">
							<div className="col s12 m6">
								<SkillCard 
									name="Git"
									description="Version control for this website."
									date="May 2020-Present"
									// img="git.png"
									img="git_qqqxvm"
								/>
							</div>
							<div className="col s12 m6">
								<SkillCard 
									name="Shell"
									description="Comfortable in the terminal"
									date="2015-Present"
									// img="terminal.png"
									img="terminal_rtto3z"
								/>
							</div>
						</div>
					</div>
	
					<div>
						<h3 className="eggshell-text">Soft Skills</h3>
						<div className="row">
							<div className="col s12 m12">
								<SkillCard 
									name="Leadership"
									description="Managing a team, making tough decisions"
									date="January 2019-Present"
									// img="leadership.png"
									img="leadership_gpj0jo"
								/>
							</div>
						</div>
					</div>
	
					<div>
						<h3 className="eggshell-text">Certifications</h3>
						<div className="row">
							<div className="col s12 m12">
								<SkillCard 
									name="Python for Everybody"
									description="MOOC from University of Michigan"
									date="April 2020"
									// img="coursera.png"
									img="coursera_nmrgqw"
								/>
							</div>
						</div>
					</div>
					
				</div>
			</>
			
		)
	}
	
}

export default Skills ;