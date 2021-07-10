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
				height: (1)*50,
				width: (1)*150,
				x: 0,
				y: 0,
			}],
			numContainers: 1,
		}

		this.addParent = this.addParent.bind(this);
		this.setFramePos = this.setFramePos.bind(this);
	}

	setFramePos(delx, dely, name) {
		const key = parseInt(name);
		var containers = [...this.state.containers];
		var frame = containers[key-1];
		frame = {
			...containers[key-1],
			x: delx,
			y: dely
		}
		containers[key-1] = frame
		this.setState({
			containers: containers
		})
	}

	addParent(event) {
		const containers = this.state.containers;
		// const x = this.state.containers.x;
		// const y = this.state.containers.y;
		const numContainers = this.state.numContainers;
		const last_frame = containers[containers.length-1]
		this.setState({
			containers: containers.concat([{
				key: last_frame.key + 1,
				name: (last_frame.key + 1).toString(),
				height: (last_frame.key + 1)*50,
				width: (last_frame.key + 1)*150,
				x: last_frame.x - 10,
				y: last_frame.y - 10
			}]),
			numContainers: numContainers + 1
		});

		// console.log(this.state.containers)
	}

	render() {
		return (
			<div>
				<div className="row">
					<button className="btn btn-primary large" onClick={this.addParent}> Add Parent</button>
				</div>
				<div className="row content_body">
					<Frame containers={this.state.containers} idx={1} setFramePos={this.setFramePos}/>
				</div>
			</div>
		);
	}
}

export {App};
