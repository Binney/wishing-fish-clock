const radians = 0.0174532925,
    clockRadius = 55,
    margin = 0,
    width = (clockRadius + margin) * 2,
    height = (clockRadius + margin) * 2,
    hourHandLength = 2 * clockRadius / 5 + 3,
    minuteHandLength = clockRadius - 17,
    secondHandLength = clockRadius - 20,
    secondHandBalance = 10,
    secondTickStart = clockRadius,
    secondTickLength = -10,
    hourTickStart = clockRadius,
    hourTickLength = -18
    secondLabelRadius = clockRadius + 16;
    secondLabelYOffset = 5
    hourLabelRadius = clockRadius - 10
    hourLabelYOffset = 4;

const hourScale = d3.scale.linear()
    .range([0, 330])
    .domain([0, 11]);

const minuteScale = secondScale = d3.scale.linear()
    .range([0, 354])
    .domain([0, 59]);

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

const sunrise = d3.interpolate("#68c2d8", "#021b2f");

function drawClock() { //create all the clock elements
    updateData();	//draw them in the correct starting position
    var face = d3.select("#clock-face");

    face.selectAll('.hour-label')
        .data(d3.range(1, 13))
        .enter()
        .append('text')
        .attr('class', 'hour-label')
        .attr('text-anchor', 'middle')
        .attr('x', function (d) {
            return hourLabelRadius * Math.sin(hourScale(d) * radians);
        })
        .attr('y', function (d) {
            return -hourLabelRadius * Math.cos(hourScale(d) * radians) + hourLabelYOffset;
        })
        .text(function (d) {
            return d;
        });


    var hands = face.append('g').attr('id', 'clock-hands');

    face.append('g').attr('id', 'face-overlay')
        .append('circle').attr('class', 'hands-cover')
        .attr('x', 0)
        .attr('y', 0)
        .attr('r', clockRadius / 20);

    hands.selectAll('line')
        .data(handData)
        .enter()
        .append('line')
        .attr('class', function (d) {
            return d.type + '-hand';
        })
        .attr('x1', 0)
        .attr('y1', function (d) {
            return d.balance ? d.balance : 0;
        })
        .attr('x2', 0)
        .attr('y2', function (d) {
            return d.length;
        })
        .attr('transform', function (d) {
            return 'rotate(' + d.scale(d.value) + ')';
        });
}

function moveHands() {
    d3.select('#clock-hands').selectAll('line')
        .data(handData)
        .transition()
        .attr('transform', function (d) {
            return 'rotate(' + d.scale(d.value) + ')';
        });
}

function advanceBackground() {
    const t = new Date();
    const hrs = Math.abs(t.getSeconds() - 30) / 30;
    d3.select("#body")
        .transition()
        .duration(1000)
        .style("background", sunrise(hrs));
}

function updateData() {
    var t = new Date();
    handData[0].value = (t.getHours() % 12) + t.getMinutes() / 60;
    handData[1].value = t.getMinutes();
    handData[2].value = t.getSeconds();
}

drawClock();
advanceBackground();

setInterval(function () {
    updateData();
    moveHands();
    advanceBackground();
}, 1000);

d3.select(self.frameElement).style("height", height + "px");