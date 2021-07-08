import React from 'react';
import Frame from './Frame';
import './App.css';

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
