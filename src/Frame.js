import react from 'react';
import './Frame.css';
import Draggable from 'react-draggable';

class Frame extends react.Component {

    render() {

        return(
            <Draggable
                axis="both"
                bounds="parent"
                // offsetParent={document.querySelector('.content_body')}
                handle={".frame_"+this.props.name}
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className={"frame_content frame_"+this.props.name}>
                    <div className="frame_title">Click {this.props.name}</div>
                    <span>
                        &nbsp; &nbsp;
                        <br/>
                        &nbsp; &nbsp;
                        {this.props.Children}

                    </span>
                </div>
            </Draggable>
        );
    }
}

export default Frame