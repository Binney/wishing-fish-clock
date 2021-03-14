import React from 'react';
import './Frame.css';

class Frame extends React.Component {
    render() {
        return <g id={this.props.id}>
            <rect className="frame-rect" x={this.props.x} y={this.props.y} width="29.624" height="189.752" transform={this.props.transform} />
            <text className="frame-text" transform={this.props.textTransform}>
                <tspan x={this.props.textOffset} y="0">{this.props.text}</tspan>
            </text>
        </g>

    }
}

export default Frame;
