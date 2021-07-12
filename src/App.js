import React from 'react';
import Frame from './Frame';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			containers: [{
				key: 1,
				name: "1",
				height: (1)*150,
				width: (1)*250,
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
		// Function is used to update the position of the given frame when drag stops.

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
	}
	
	addParent(event) {
		var containers = this.state.containers;
		var last_frame = containers[this.state.numContainers - 1];

		// Check for horizontal overflow.
		var new_x;
		var last_x;
		if(last_frame.x + last_frame.width + 250 > window.innerWidth){
			new_x = last_frame.x - 250;
			last_x = 248;
		}
		else{
			new_x = last_frame.x;
			last_x = 0;
		}

		// Checking vertical overflow.
		var new_y;
		var last_y;
		if(last_frame.y + last_frame.height + 150 > window.innerHeight){
			new_y = last_frame.y - 150;
			last_y = 125;
		}
		else{
			new_y = last_frame.y;
			last_y = 0;
		}

		// Creating data for new frame
		var new_frame = {
			key: last_frame.key+1,
			name: (last_frame.key+1).toString(),
			height: (last_frame.key+1)*150,
			width: (last_frame.key+1)*250,
			x: new_x,
			y: new_y
		}
		
		// add new frame to local copy of containers
		containers.push(new_frame);

		// change the relative position of the last frame to 0,0 w.r.t new frame
		last_frame = {  
			...last_frame,
			x: last_x,
			y: last_y
		}

		// Update local copy of containers with the change in last frame
		containers[this.state.numContainers - 1] = last_frame;

		// Use Setstate to update the state
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
					{/* Passing the container array and the frame number to render */}
					<Frame containers={this.state.containers}  setFramePos={this.setFramePos} idx={this.state.numContainers} />
				</div>
			</div>
		);
	}
}

export {App};
