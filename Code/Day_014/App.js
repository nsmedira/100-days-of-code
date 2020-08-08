import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;
import Home from './components/home/home'
// import ProjectDetails from './components/projects/projectDetail' ;
// import SignIn from './components/auth/signin' ;
import Skills from './components/skills/skills' ;
import Portfolio from './components/projects/portfolio' ;
import Navbar from './components/layout/navigation/navbar' ;
import FixedActionButton from './components/layout/fixedActionButton' ;
import Blog from './components/blog/blog' ;
// import FileMaker from './components/filemaker/filemaker' ;
import About from './components/about/about' ;
import ConsultationRequestForm from './components/filemaker/consultation_requestForm'
import Article from '../src/containers/Article/blogPost'
// import { render } from '@testing-library/react';

// TEST FOR REACT VERSION
// const REACT_VERSION = React.version

class App extends React.Component {

	constructor (props) {
		super (props)

		// bind the 'this' context to the handler function
		this.handler = this.handler.bind(this)

		// set active tab in state
		this.state = {
			activeTab: "Home"
		}

	}

	// this method will be sent to the child component
	handler(tab) {
		console.log('handler called')
		this.setState({
			activeTab: tab
		})
	}

	render() {	
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar activeTab={this.state.activeTab} action={this.handler}/>

					{/* TEST FOR REACT VERSION */}
					{/* <div>
						React version: {REACT_VERSION}
					</div> */}

					<Switch>

						{/* <Route exact path='/' component={Home} /> */}
						<Route exact path='/' render={() => <Home action={this.handler}/>} />

						{/* PROJECT DETAIL VIEW NOT IN USE*/}
						{/* <Route path='/project/:id' component={ProjectDetails} /> */}

						{/* SIGN IN COMPONENT NOT IN USE */}
						{/* <Route path='/signin' component={SignIn} /> */}

						{/* <Route path='/skills' component={Skills}/> */}
						<Route path='/skills' render={() => <Skills action={this.handler}/>}/>

						{/* <Route path='/portfolio' component={Portfolio}/> */}
						<Route path='/portfolio' render={() => <Portfolio action={this.handler}/>}/>

						{/* <Route exact path='/blog' component={Blog}/> */}
						<Route exact path='/blog' render={() => <Blog action={this.handler}/>}/>

						{/* <Route path='/blog/:id' component={BlogPost}/> */}
						<Route path='/blog/:id' component={Article}/>

						{/* FILEMAKER COMPONENT NOT IN USE */}
						{/* <Route path='/filemaker' component={FileMaker}/> */}

						{/* <Route path='/about' component={About}/> */}
						<Route path='/about' render={() => <About action={this.handler}/>}/>

						<Route path='/consultation_request_form/neo' render={(props) => <ConsultationRequestForm {...props} type={`Local`} />}/>
						<Route path='/consultation_request_form/remote' render={(props) => <ConsultationRequestForm {...props} type={`Remote`} />}/>
					</Switch>
					<FixedActionButton />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;