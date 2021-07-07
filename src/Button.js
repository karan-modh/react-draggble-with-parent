import react from 'react';
import './Button.css';

class Button extends react.Component {
    constructor(props) {
        super(props);
        this.showPopUp = this.showPopUp.bind(this);
    }

    showPopUp() {
        console.log("You clicked Add Parent Button!!");
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary large" onClick={this.showPopUp}> Add Parent</button>
            </div>
        );
    }
}

export {Button};
