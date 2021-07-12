import react from 'react';
import './Frame.css';
import Draggable from 'react-draggable';

class Frame extends react.Component {

    onControlledDrag = (event, position) => {
        var index = this.props.idx - 1;
        const curr_frame = this.props.containers[index];
        // console.log(`Frame ${curr_frame.key} at ${position.x}, ${position.y}`);
        this.props.setFramePos(position, curr_frame.key);
    };

    render() {
        console.log(this.props);
        var index = this.props.idx-1;
        const containers = [...this.props.containers];
        const curr_frame = containers[index];
        var child_frame;

        // Check if the frame is the last one to render.
        if (this.props.idx > 1) {
            // Create Child frames with next frame number.
            child_frame = <Frame containers={containers} setFramePos={this.props.setFramePos} idx={index} />
        }
        else {
            child_frame = <div></div>
        }
        return(
            <Draggable
                axis="both"
                bounds="parent"
                handle={".frame_" + curr_frame.name}
                // defaultPosition={{x:curr_frame.x, y:curr_frame.y}}
                position={{ x: curr_frame.x, y: curr_frame.y }}
                grid={[1,1]}
                scale={1}
                onDrag={this.onControlledDrag}
                // onStop={this.handleStop}
                >
                <div className="frame_content" style={{width: curr_frame.width, height: curr_frame.height}}>
                    <div className={"frame_title frame_"+curr_frame.name} >Click {curr_frame.name}</div>
                    {child_frame}
                </div>
            </Draggable>
        );
    }
}

export default Frame