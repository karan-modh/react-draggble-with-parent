import react from 'react';
import './Frame.css';
import Draggable from 'react-draggable';

class Frame extends react.Component {

    handleStop = (event,data) => {
        // console.log(data);
        // console.log(this.props.idx);
        this.props.setFramePos(data, this.props.idx);
    };

    render() {
        console.log(this.props);
        var index = this.props.idx-1;
        const containers = [...this.props.containers];
        const curr_frame = containers[index];
        var child_frame;
        if (this.props.idx > 1) {
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
                defaultPosition={{x:curr_frame.x, y:curr_frame.y}}
                // position={null}
                grid={[1,1]}
                scale={1}
                onStop={this.handleStop}>
                <div className="frame_content" style={{width: curr_frame.width, height: curr_frame.height}}>
                    <div className={"frame_title frame_"+curr_frame.name} >Click {curr_frame.name}</div>
                    {child_frame}
                </div>
            </Draggable>
        );
    }
}

export default Frame