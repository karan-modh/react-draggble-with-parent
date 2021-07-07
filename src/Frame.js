import react from 'react';
import './Frame.css';
import Draggable from 'react-draggable';


class Frame extends react.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         containerId: "",
    //         parent: ""
    //     };
    // }

    // componentDidMount() {
    //     this.setState({
    //         containerId: reactDom.findDOMNode(this).parentNode.getAttribute("id"),
    //         parent: reactDom.findDOMNode(this).parentNode
    //     });
    //     console.log(this.state.containerId);
    //     console.log(this.state.parent);
    // }

    render() {
        return(
            <Draggable
                axis="both"
                bound="parent"
                // offsetParent={this.state.parent}
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                    <div className="frame_title handle"/>
                    <div className="frame_content" />
                </div>
            </Draggable>
            
        );
    }
}

export default Frame