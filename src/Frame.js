import React from 'react';
import './Frame.css';

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text}
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        console.log(e);
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            this.setState(state => ({
                text: state.text + e.key.toUpperCase()
            }));
        } else if (e.keyCode == 8) { // backspace
            this.setState(state => ({
                text: state.text.slice(0, -1)
            }));
        }
    }

    render() {
        return <g id={this.props.id} onKeyDown={this.onKeyDown} tabIndex={this.props.tabIndex}>
            <rect className="frame-rect" x={this.props.x} y={this.props.y} width="29.624" height="189.752" transform={this.props.transform} />
            <text className="frame-text" transform={this.props.textTransform}>
                <tspan x={this.props.textOffset} y="0">{this.state.text}</tspan>
            </text>
        </g>

    }
}

export default Frame;
