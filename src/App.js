import React from 'react';
import Frame from './Frame';
import './App.css';

/*
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			containers: {
				key: 1,
				name: "1",
				height: (1)*50,
				width: (1)*150,
				x: 0,
				y: 0,
				child: {}
			},
			numContainers: 1,
		}

		this.addParent = this.addParent.bind(this);
	}

	setFramePos(data) {
		this.setState({
			containers: Object.assign({}, this.state.containers, {
				x: data.x,
				y: data.y
			})
		});
		console.log(this.state.containers)
	}

	addParent(event) {
		const containers = this.state.containers;
		const numContainers = this.state.numContainers;

		this.setState({
			containers: {
				key: numContainers+1,
				name: (numContainers+1).toString(),
				height: (numContainers+1)*50,
				width: (numContainers+1)*150,
				x: containers.x,
				y: containers.y,
				child: containers
			},
			numContainers: numContainers + 1
		});
	}

	render() {
		return (
			<div>
				<div className="row">
					<button className="btn btn-primary large" onClick={this.addParent}> Add Parent</button>
				</div>
				<div className="row content_body">
					<Frame containers={this.state.containers}  setFramePos={this.setFramePos}/>
				</div>
			</div>
		);
	}
}

export {App};

*/

// Array format

// /*
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			containers: [{
				key: 1,
				name: "1",
				height: (1)*50,
				width: (1)*150,
				x: 0,
				y: 0,
			}],
			numContainers: 1,
		}

		this.addParent = this.addParent.bind(this);
		this.setFramePos = this.setFramePos.bind(this);
		this.printContainers = this.printContainers.bind(this);
	}

	printContainers() {
		console.log(this.state.containers)
	}
	
	setFramePos(data, key) {
		// const key = parseInt(name);
		var containers = [...this.state.containers];
		var frame = containers[key-1];
		frame = {
			...containers[key-1],
			x: data.x,
			y: data.y
		}
		containers[key-1] = frame
		this.setState({
			containers: containers
		})
		// console.log(this.state.containers)
	}
	
	addParent(event) {
		var containers = this.state.containers;
		var last_frame = containers[this.state.numContainers - 1];

		// Check for horizontal overflow.
		var new_x;
		var last_x;
		if(last_frame.x + last_frame.width + 150 > window.innerWidth){
			new_x = last_frame.x - 150;
			last_x = 148;
		}
		else{
			new_x = last_frame.x;
			last_x = 0;
		}

		// Checking vertical overflow.
		var new_y;
		var last_y;
		if(last_frame.y + last_frame.height + 50 > window.innerHeight){
			new_y = last_frame.y - 50;
			last_y = 25;
		}
		else{
			new_y = last_frame.y;
			last_y = 0;
		}

		// console.log(new_x);
		// console.log(new_y);
		var new_frame = {  // CLick 3
			key: last_frame.key+1,
			name: (last_frame.key+1).toString(),
			height: (last_frame.key+1)*50,
			width: (last_frame.key+1)*150,
			x: new_x,
			y: new_y
		}
		
		containers.push(new_frame);

		// console.log(containers);
		last_frame = {  
			...last_frame,
			x: last_x,
			y: last_y
		}
		containers[this.state.numContainers - 1] = last_frame;
		// console.log(containers);
		this.setState({
			containers: containers,
			numContainers: this.state.numContainers + 1
		});
	}

	render() {
		return (
			<div>
				<div className="row">
					<button className="btn btn-primary large" onClick={this.addParent}> Add Parent</button>
				</div>
				<div className="row content_body">
					<Frame containers={this.state.containers}  setFramePos={this.setFramePos} idx={this.state.numContainers} />
				</div>
			</div>
		);
	}
}

export {App};

// */
