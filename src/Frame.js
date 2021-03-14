import React from 'react';
import './Frame.css';
import checkAnswer from './CheckAnswer';
import { load, save } from './SaveGame';

class Frame extends React.Component {
    constructor(props) {
        super(props);
        const { text, correct } = load(props.direction) || {};
        this.state = {
            text: text || props.direction,
            correct: correct
        }
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        if (this.state.correct) {
            // Can't edit after you get it right
            return;
        }

        if (e.keyCode >= 65 && e.keyCode <= 90) {
            let newText = this.state.text + e.key.toUpperCase();
            checkAnswer(newText, this.props.direction).then(correct => {
                const result = {
                    correct: correct,
                    text: newText
                };
                save(this.props.direction, result);
                this.setState(() => result);
            });

        } else if (e.keyCode === 8) { // backspace
            this.setState(state => ({
                text: state.text.slice(0, -1)
            }));
        }
    }

    render() {
        return <g id={this.props.id} onKeyDown={this.onKeyDown} tabIndex={this.props.tabIndex} className={this.state.correct ? "correct" : ""}>
            <rect className="frame-rect" x={this.props.x} y={this.props.y} width="29.624" height="189.752" transform={this.props.transform} />
            <text className="frame-text" transform={this.props.textTransform}>
                <tspan x={this.props.textOffset} y="0">{this.state.text}</tspan>
            </text>
        </g>

    }
}

export default Frame;
