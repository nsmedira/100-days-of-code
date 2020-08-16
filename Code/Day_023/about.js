import React from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import { Helmet } from 'react-helmet'
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_world from "@amcharts/amcharts4-geodata/worldLow"
import am4themes_material from "@amcharts/amcharts4/themes/material"
// import * as am4charts from "@amcharts/amcharts4/charts";
// import WindowArch from '../../images/about/photography/arches.jpg' ;
// import HorseshoeBend from '../../images/about/photography/horseshoe_bend.jpg' ;

am4core.useTheme(am4themes_material)

class About extends React.Component {

	componentDidMount() {
		this.props.action('About')

		let map = am4core.create("chartdiv", am4maps.MapChart);

		// apply map definition GeoJSON
		map.geodata = am4geodata_world

		// a map has to have one or more polygon series, so it knows what to draw
		let polygonSeries = new am4maps.MapPolygonSeries()
		map.series.push(polygonSeries)

		// Make map load polygon (like country names) data from GeoJSON
		polygonSeries.useGeodata = true

		// configure series
		var polygonTemplate = polygonSeries.mapPolygons.template
		polygonTemplate.tooltipText = "{name}"
		polygonTemplate.fill = am4core.color("#ece2d0")
		// polygonTemplate.hoverable = false

		// create hover state and set alternative fill color
		var hs = polygonTemplate.states.create("hover")
		hs.properties.fill = am4core.color("#2d728f")

		// remove antarctica
		polygonSeries.exclude = ["AQ"]

		// disable map zoom via scrolling
		map.chartContainer.wheelable = false

		// add zoom control
		map.zoomControl = new am4maps.ZoomControl()

		// set map projection
		map.projection = new am4maps.projections.Orthographic()
		map.panBehavior = "rotateLongLat"

		polygonSeries.data = [
			{
				"id": "CZ",
				"fill": am4core.color("#e85f5c")
			},
			{
				"id": "FR",
				"fill": am4core.color("#e85f5c")
			},
			{
				"id": "IT",
				"fill": am4core.color("#e85f5c")
			},
			{
				"id": "NL",
				"fill": am4core.color("#e85f5c")
			},
			{
				"id": "ES",
				"fill": am4core.color("#e85f5c")
			},
			{
				"id": "CA",
				"fill": am4core.color("#e85f5c")
			},
			{
				"id": "US",
				"fill": am4core.color("#e85f5c")
			},
			{
				"id": "AU",
				"fill": am4core.color("#e85f5c")
			}
		]

		// bind "fill" property to "fill" key in data
		polygonTemplate.propertyFields.fill = "fill"

		// ... map code goes here ...
	
		this.map = map;

	}

	componentWillUnmount() {
		// if (this.map) {
		//   	this.map.dispose();
		// }
	}
	
	render() {	

		const biography = "Golfer, hispanohablante, guitarist, DIY mechanic, tennis player, coffee abuser, photographer, politics junkie, Jeep and Honda enthusiast, home cook, proud cat dad, armchair philosopher."

		return (
			
			<>

				<Helmet>
					<title>About Me - NickSmedira.com</title>
					<meta
						name="description"
						content={`Some personal information about Nick Smedira, the human. ${biography}`}
					/>
					<link rel="canonical" href="https://nicksmedira.com/about" />
				</Helmet>

				<div className="dashboard container">
					
					<h1 className="eggshell-text">Nick Smedira</h1>
	
					<h4 className="eggshell-text">Biography</h4>
					<p className="eggshell-text">{biography}</p>
	
					{/* <h4>Photography</h4>
					<div className="row">
						<div className="col s12 m12 l6">
							<img className="responsive-img" src={WindowArch} alt="Window Arch at Arches National Park near Moab, Utah"/>
						</div>
						<div className="col s12 m12 l6">
							<img className="responsive-img" src={HorseshoeBend} alt="Horseshoe Bend near Page, Arizona"/>
						</div>
					</div>*/}
	
					<h4 className="eggshell-text">Countries/USA States Visited</h4>
	
					<div id="chartdiv" style={{width: "100%", height: "500px"}} />
	
				</div>
			</>
			
		)
	}
	
}

export default About