import React from 'react';
// import { Button } from './Button';
import Frame from './Frame';
import './App.css';
import './Button.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			containers: []
		}
	}
 
	render() {
		return (
			<div>
				<div className="row">
					<button className="btn btn-primary large" onClick={this.showPopUp}> Add Parent</button>
				</div>
				<div className="row">
					<Frame />
				</div>
			</div>
		);
	}
}

export {App};
