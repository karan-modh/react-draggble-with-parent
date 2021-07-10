import react from 'react';
import './Frame.css';
import Draggable from 'react-draggable';

class Frame extends react.Component {

    handleStop = (event,data) => {
        console.log(data);
    };

    render() {
        console.log(this.props);
        var child_frame;
        if (this.props.containers.child && Object.keys(this.props.containers.child).length !== 0 ) {
            child_frame = <Frame containers={this.props.containers.child} setFramePos={this.props.setFramePos}/>
        }
        else {
            child_frame = <div></div>
        }
        return(
            <Draggable
                axis="both"
                bounds="parent"
                handle={".frame_"+this.props.containers.name}
                defaultPosition={{x:this.props.containers.x, y:this.props.containers.y}}
                // position={null}
                grid={[25, 25]}
                scale={1}
                onStop={this.handleStop}>
                <div className="frame_content" style={{width: this.props.containers.width, height: this.props.containers.height}}>
                    <div className={"frame_title frame_"+this.props.containers.name} >Click {this.props.containers.name}</div>
                    {child_frame}
                </div>
            </Draggable>
        );
    }
}

export default Frame