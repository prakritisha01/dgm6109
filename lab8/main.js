"use strict"

let svgWidth = 800
let svgHeight = 600

/* Configuration variables */
let leftMargin = 80
let rightMargin = 40 // slightly increased for spacing
let topMargin = 120 // increased to give legend space
let bottomMargin = 80

/* Canvas Setup */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

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
/*
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", leftMargin)
    .attr("y", topMargin)
    .attr("width", svgWidth - (leftMargin + rightMargin)) // the width is the total SVG width minus both side margins
    .attr("height", svgHeight - (topMargin + bottomMargin)) // same logic for height 
    */

/* Screen time, Sleep Quality, Total sleep : dataset */

let dataset = [
    {screenTime: 42, sleepQuality: 3, totalSleep: 7}, 
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

/* Larger bubbles (greater total sleep) are drawn first. */
dataset.sort(function(a,b){
    return b.totalSleep - a.totalSleep;
})

/* Scales */

/* X scale: Screen time */
let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) {return d.screenTime})]) // 0 to the maximum screenTime value in the dataset 
    .range([leftMargin, svgWidth - rightMargin]) // so the graph doesnt rouch the edges of the canvas 

/* Y scale: Sleep Quality*/
let yScale = d3.scaleLinear()
    .domain([0, 5]) // because the actual data scale is 1 to 5
    .range([svgHeight - bottomMargin, topMargin]) //flipped for SVG

/* Radius scale: Total sleep */
let rScale = d3.scaleSqrt()
    .domain([0, d3.max(dataset, function(d) {return d.totalSleep})])
    .range([5, 30])

/* Draw bubbles */
svg.selectAll("circle")
   .data(dataset)
   .join("circle")
   .attr("cx", function(d){return xScale(d.screenTime)})
   .attr("cy", function(d){return yScale(d.sleepQuality)})
   .attr("r", function(d){return rScale(d.totalSleep)})
   .attr("fill", function(d){
    if (d.sleepQuality <= 2) {
        return "red"} 
    else if (d.sleepQuality <= 4) {
        return "orange"}
    else {
        return "green"
    }
   })
   .attr("opacity", 0.6)


/* axis lines */

svg.append("line")
   .attr("x1", xScale(0))
   .attr("y1", yScale(0))
   .attr("x2", xScale(d3.max(dataset, function(d){ return d.screenTime})))
   .attr("y2", yScale(0))
   .attr("stroke", "black")

svg.append("line")
   .attr("x1", xScale(0))
   .attr("y1", yScale(0))
   .attr("x2", xScale(0))
   .attr("y2", yScale(d3.max(dataset, function(d){return d.sleepQuality})))
   .attr("stroke", "black")

/*Axis labels */
svg.append("text")
   .attr("x", svgWidth / 2)
   .attr("y", svgHeight - 20)
   .attr("text-anchor", "middle")
   .text("Screen Time Before Bed (minutes)")

svg.append("text")
   .attr("transform", "rotate(-90)")
   .attr("x", -svgHeight / 2)
   .attr("y", 20)
   .attr("text-anchor", "middle")
   .text("Sleep Quality (1= Poor, 5=Very Good)")

/*Size Key */
svg.append("text")
   .attr("x", 620)
   .attr("y", 40)
   .text("Total Sleep (hours)")
   .style("text-anchor", "middle")

let sizeValues = [4, 7, 9]

for (let i = 0; i < sizeValues.length; i++) {
    svg.append("circle")
    .attr("cx", 620)
    .attr("cy", 70 + ( i * 80))
    .attr("r", rScale(sizeValues[i]))
    .attr("fill", "grey")
    .attr("opacity", 0.7)

    svg.append("text")
       .attr("x", 670)
       .attr("y", 70 + (i* 80))
       .attr("alignment-baseline", "middle")
       .text(sizeValues[i] + " hrs")

}

/* color key */
svg.append("text")
   .attr("x", 180)
   .attr("y", 40)
   .text("Sleep Quality Levels")
   .style("text-anchor", "middle")

/* array that defines each color category */
let colorKey = [
    {label: "Low (1-2)", color: "red"}, // low sleep quality
    {label: "Medium (3-4)", color: "orange"}, // medium sleep quality
    {label: "High (5)", color: "green"} // high sleep quality

];

/* loop through each key */
colorKey.forEach(function(item, index){
    svg.append("rect")
       .attr("x", 50)
       .attr("y", 50 + (index * 30)) // vertical spacing between items
       .attr("width", 20)
       .attr("height", 20)
       .attr("fill", item.color) // fill color based on category

    svg.append("text")
        .attr("x", 80) // positioning text to thr right of rect
        .attr("y", 65 + (index * 30)) 
        .text(item.label)
        
    
})

