import React from 'react';
// import { Button } from './Button';
import Frame from './Frame';
import './App.css';
import './Button.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			containers: [<Frame key={0} name="1"/>],
			numContainers: 1
		}

		this.addParent = this.addParent.bind(this);
	}

	addParent(event) {
		const containers = this.state.containers;
		const numContainers = this.state.numContainers;
		console.log(numContainers);

		this.setState({
			containers: containers.concat(<Frame key={numContainers+1} name={(numContainers+1).toString()}/>),
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
					{this.state.containers}
				</div>
			</div>
		);
	}
}

export {App};
