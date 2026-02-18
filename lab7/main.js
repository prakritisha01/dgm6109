"use strict"

/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 400;
let margin = 25;

/* Configuration variables: data scaling */
let maxScreenTime = 155; // highest screen time from dataset 
let maxSleepQuality = 5; // high sleep quality score 


/* Resize  div to match width of visualization. */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

/* Screen time vs sleep quality : dataset */

let dataset = [
    {screenTime: 42, sleepQuality: 3},
    {screenTime: 15, sleepQuality: 4},
    {screenTime: 57, sleepQuality: 2},
    {screenTime: 35, sleepQuality: 3},
    {screenTime: 40, sleepQuality: 3},
    {screenTime: 155, sleepQuality: 1},
    {screenTime: 48, sleepQuality: 3},
    {screenTime: 62, sleepQuality: 2},
    {screenTime: 28, sleepQuality: 4},
    {screenTime: 33, sleepQuality: 4},
    {screenTime: 90, sleepQuality: 5}
];

/* Scales */
let xScale = d3.scaleLinear()
    .domain([0, maxScreenTime])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, maxSleepQuality])
    .range([svgHeight - margin, margin]); //flipped for SVG

/* Circles */
let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

circles.attr("r", 3) // reduced the radius because some of them were overlapping //
    .attr("cx", function (value) {
        return xScale(value.screenTime);
    })
    .attr("cy", function (value) {
        return yScale(value.sleepQuality);
    })

/**** label the axes ****/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("Screen time before bed (minutes)");

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Sleep quality (1= very poor, 5 = very good)")
    .attr("transform", "rotate(-90)");

/**** label key graph coordinates ****/
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0,0");

/* x maximum label */
let xMaxLabel = svg.append("text")
    .attr("x", xScale(maxScreenTime))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(maxScreenTime));

/* y maximum label */
let yMaxLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", yScale(maxSleepQuality))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .text(String(maxSleepQuality));