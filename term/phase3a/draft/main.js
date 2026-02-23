"use strict"

let svgWidth = 600;
let svgHeight = 400;
let margin = 40; // increased margin for better spacing


let maxScreenTime = 155; // highest screen time from dataset 
let maxSleepQuality = 5; // highest sleep quality score 
let maxTotalSleep = 9; // highest sleeping hours


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

/* Screen time, Sleep Quality, Total sleep : dataset */

let dataset = [
    {screenTime: 42, sleepQuality: 3, totalSleep: 7}, // Feb 1
    {screenTime: 15, sleepQuality: 4, totalSleep: 7.5},
    {screenTime: 57, sleepQuality: 2, totalSleep: 6},
    {screenTime: 35, sleepQuality: 3, totalSleep: 6},
    {screenTime: 40, sleepQuality: 3, totalSleep: 3},
    {screenTime: 155, sleepQuality: 1, totalSleep: 4},
    {screenTime: 48, sleepQuality: 3, totalSleep: 6.5},
    {screenTime: 62, sleepQuality: 2, totalSleep: 6},
    {screenTime: 28, sleepQuality: 4, totalSleep: 7},
    {screenTime: 33, sleepQuality: 4, totalSleep: 7},
    {screenTime: 90, sleepQuality: 5, totalSleep: 9},
    {screenTime: 120, sleepQuality: 2, totalSleep: 5},
    {screenTime: 20, sleepQuality: 5, totalSleep: 8},
    {screenTime: 75, sleepQuality: 3, totalSleep: 6},
    {screenTime: 140, sleepQuality: 1, totalSleep: 4},
    {screenTime: 30, sleepQuality: 4, totalSleep: 7}

];

/* Scales */
let xScale = d3.scaleLinear()
    .domain([0, maxScreenTime])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, maxSleepQuality])
    .range([svgHeight - margin, margin]); //flipped for SVG

// third number variable
let rScale = d3.scaleLinear()
    .domain([3, maxTotalSleep])
    .range([6, 20]);

/* Circles */
let circles = svg.selectAll("circle.dataPoint")
    .data(dataset)
    .join("circle")
    .attr("class", "dataPoint");

circles
    .attr("cx", function(value) {
        return xScale(value.screenTime);
      })
    .attr("cy", function (value) {
        return yScale(value.sleepQuality);
    })
    .attr("r", function (value) {
        return rScale(value.totalSleep);
    })
    .attr("fill", "steelblue")
    .attr("opacity", 0.7);

/* Axis Labels */

svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 3))
    .attr("text-anchor", "middle")
    .text("Screen Time Before Bed (minutes)");


svg.append("text")
    .attr("x", - svgHeight / 2)
    .attr("y", margin / 3)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("transform", "rotate(-90)")
    .text("Sleep Quality (1 = Poor, 5 = Very Good)");

svg.append("text")
   .attr("x", margin)
   .attr("y", svgHeight - (margin / 3))
   .attr("text-anchor", "middle")
   .text("0");

svg.append("text")
   .attr("x", xScale(maxScreenTime))
   .attr("y", svgHeight- (margin / 3))
   .attr("text-anchor", "middle")
   .text (String(maxScreenTime));

svg.append("text")
   .attr("x", margin)
   .attr("y", yScale(maxSleepQuality))
   .attr("text-anchor", "end")
   .attr("alignment-baseline", "middle")
   .text(String(maxSleepQuality));


/*Key Radius*/

svg.append("text")
    .attr("x", svgWidth - 150)
    .attr("y", margin - 10) // moved slightly upward because it was touching the line
    .text("Total Sleep (hours)");

svg.append("circle")
   .attr("cx", svgWidth - 150)
   .attr("cy", margin + 40)
   .attr("r", rScale(3))
   .attr("fill", "steelblue");

svg.append("text")
   .attr("x", svgWidth - 120)
   .attr("y", margin + 35)
   .text("3 hrs");

svg.append("circle")
   .attr("cx", svgWidth - 150)
   .attr("cy", margin + 90)
   attr("r", rScale(6))
   .attr("fill", "steelblue");

svg.append("text")
   .attr("x", svgWidth - 120)
   .attr("y", margin + 75)
   .text("6 hrs");

svg.append("circle")
   .attr("cx", svgWidth - 150)
   .attr("cy", margin + 150)
   attr("r", rScale(9))
   .attr("fill", "steelblue");

svg.append("text")
   .attr("x", svgWidth - 120)
   .attr("y", margin + 120)
   .text("9 hrs");

