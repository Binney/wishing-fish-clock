import React from 'react';
import * as d3 from 'd3';
import _ from 'lodash';
import './Clockface.css';

const radians = 0.0174532925,
    clockRadius = 55,
    hourHandLength = 2 * clockRadius / 5 + 3,
    minuteHandLength = clockRadius - 17,
    secondHandLength = clockRadius - 20,
    secondHandBalance = 10,
    hourLabelRadius = clockRadius - 10,
    hourLabelYOffset = 4;

const hourScale = d3.scaleLinear()
    .range([0, 330])
    .domain([0, 11]);

const minuteScale = d3.scaleLinear()
    .range([0, 354])
    .domain([0, 59]);
const secondScale = minuteScale;

const sunrise = d3.interpolate("#68c2d8", "#021b2f");

let handData = [
    {
        type: 'hour',
        value: 0,
        length: -hourHandLength,
        scale: hourScale
    },
    {
        type: 'minute',
        value: 0,
        length: -minuteHandLength,
        scale: minuteScale
    },
    {
        type: 'second',
        value: 0,
        length: -secondHandLength,
        scale: secondScale,
        balance: secondHandBalance
    }
];

class Clockface extends React.Component {
    updateData() {
        var t = new Date();
        handData[0].value = (t.getHours() % 12) + t.getMinutes() / 60;
        handData[1].value = t.getMinutes();
        handData[2].value = t.getSeconds();
    }

    moveHands() {
        d3.select('#clock-hands').selectAll('line')
            .data(handData)
            .transition()
            .attr('transform', function (d) {
                return 'rotate(' + d.scale(d.value) + ')';
            });
    }

    advanceBackground() {
        const t = new Date();
        const hrs = Math.abs(t.getSeconds() - 30) / 30;
        d3.select("body")
            .transition()
            .duration(100)
            .style("background-color", sunrise(hrs));
    }

    drawHourLabels() {
        return _.range(1, 13).map(i => 
            <text key={i} className="hour-label" textAnchor="middle"
                x={hourLabelRadius * Math.sin(hourScale(i) * radians)}
                y={-hourLabelRadius * Math.cos(hourScale(i) * radians) + hourLabelYOffset}>{i}</text>);
    }

    drawHands() {
        return handData.map(hand =>
            <line key={hand.type} className={hand.type + "-hand"}
                x1="0" x2="0"
                y1={hand.balance ? hand.balance : 0}
                y2={hand.length}
                transform={"rotate(" + hand.scale(hand.value) +")"}></line>);
    }

    render() {
        this.updateData();
        this.advanceBackground();
        setInterval(this.updateData, 1000);
        setInterval(this.moveHands, 1000);
        setInterval(this.advanceBackground, 1000);
        return (
            <g id="clock-face" transform="translate(94.876 750.319) scale(1 -1)">
                {this.drawHourLabels()}
                <g id="clock-hands">
                    {this.drawHands()}
                </g>
                <g id="face-overlay"></g>
                <circle className="hands-cover" x="0" y="0" r={clockRadius / 20}></circle>
            </g>
        )
    }
}

export default Clockface;
