import react from 'react';
import './Frame.css';
import Draggable from 'react-draggable';

class Frame extends react.Component {

    handleStop = (event,data) => {
        console.log(data)
        var idx = this.props.containers.length - this.props.idx;
        this.props.setFramePos(data.x, data.y, this.props.containers[idx].name);
    };

    render() {
        // console.log(this.props);
        const idx = this.props.containers.length - this.props.idx;
        // console.log(idx);
        var child_frame;
        if (idx > 0) {
            child_frame = <Frame containers={this.props.containers} idx={this.props.idx+1} setFramePos={this.props.setFramePos} />
        }
        else {
            child_frame = <div></div>
        }
        return(
            <Draggable
                axis="both"
                bounds="parent"
                handle={".frame_"+this.props.containers[idx].name}
                defaultPosition={{x:this.props.containers[idx].x, y:this.props.containers[idx].y}}
                // position={null}
                grid={[25, 25]}
                scale={1}
                onStop={this.handleStop}>
                <div className="frame_content" style={{width: this.props.containers[idx].width, height: this.props.containers[idx].height}}>
                    <div className={"frame_title frame_"+this.props.containers[idx].name} >Click {this.props.containers[idx].name}</div>
                    {child_frame}
                </div>
            </Draggable>
        );
    }
}

export default Frame