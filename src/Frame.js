import react from 'react';
import './Frame.css';
import Draggable from 'react-draggable';

class Frame extends react.Component {

    render() {
        return(
            <Draggable
                axis="both"
                bound="parent"
                offsetParent={document.querySelector('.content_body')}
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                    <div className="frame_content">
                        <div className="frame_title handle">Click {this.props.name}</div>
                        <span>
                            &nbsp;<br />
                            &nbsp;

                        </span>
                    </div>
                </div>
            </Draggable>
            
        );
    }
}

export default Frame