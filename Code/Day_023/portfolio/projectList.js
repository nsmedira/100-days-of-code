import React from 'react' ;
import ProjectCard from './project_card' ;

const ProjectList = () => {
	
	return (
	
		// 'PROJECT-LIST' IS A CUSTOM CLASS AND 'SECTION' IS MATERIALIZE
		<div className="project-list section">
		
			<div className="z-depth-0 portfolio-cards">
				
				<div className="row">

					<div className="col s12 m12 l6">
						<ProjectCard 
							title="Studio Suite 13"
							description={["Head of Operations for Adatasol's Studio Suite division. Responsible for customer support, product development, and developer management. 3 direct reports."]}
							urls={['www.studiosuite.com', 'www.adatasol.com']}
						/>
					</div>
					
					<div className="col s12 m12 l6">
						<ProjectCard 
							title="Using Google Charts in a FileMaker Web Viewer"
							description={["Developed various sales tools and deployed to FileMaker WebDirect. The tools allowed salespeople to enter customer information and generate a report that would compare the customer's current costs with the projected costs/savings of purchasing new equipment. The comparisons were visualized in FileMaker web viewers using the Google Charts API, which allowed us to use custom color schemes, labels, legends, etc."]}
							urls={['www.lincolnelectric.com']}
						/>
					</div>
				</div>
				
				<div className="row">
					<div className="col s12 m12 l12">
						<ProjectCard 
							title="Inventory Management in FileMaker Go"
							description={["Developed an Inventory Management System for FileMaker Go platform. Uses Bluetooth barcode scanner for data input. App allows user to scan product from purchase orders (receiving), pick lists (shipping) or cycle counts and adjusts inventory accordingly.", "Includes a powerful algorithm to parse multi-dimensional barcode symbologies, allowing customer to pull out production dates, expiration dates, lot numbers, serial numbers, etc. When receiving purchase orders, application wirelessly prints label with QR code for incoming product that does not contain a barcode."]}
							urls={['www.penncare.net']}
						/>
					</div>
				</div>
			
			</div>
			
		</div>
	
	)
	
} ; 

export default ProjectList ;