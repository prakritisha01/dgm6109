"use strict"

let svgWidth = 800;
let svgHeight = 600;
let margin = 80; 


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
/*svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2); */

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

/* larger circles appear behind the smaller circles */
dataset.sort(function(a,b){
    return b.totalSleep - a.totalSleep;
})

/* Scales */
let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d.screenTime)])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d.sleepQuality)])
    .range([svgHeight - margin, margin + 80]); //flipped for SVG

let rScale = d3.scaleSqrt()
    .domain([0, d3.max(dataset, d => d.totalSleep)])
    .range([6, 20]);

/* axis lines */
svg.append("line")
   .attr("x1", margin)
   .attr("y1", svgHeight - margin)
   .attr("x2", svgWidth - margin)
   .attr("y2", svgHeight - margin)
   .attr("stroke", "black");

svg.append("line")
   .attr("x1", margin)
   .attr("y1", svgHeight - margin)
   .attr("x2", margin)
   .attr("y2", margin)
   .attr("stroke", "black");

/* Circles */
svg.selectAll("circle.dataPoint")
   .data(dataset)
   .join("circle")
   .attr("class", "dataPoint")
   .attr("cx", d => xScale(d.screenTime))
   .attr("cy", d => yScale(d.sleepQuality))
   .attr("r", d => rScale(d.totalSleep))
   .attr("fill", function(d){
    if(d.sleepQuality <=2){
        return "red";}
    else if(d.sleepQuality <=4){
        return "orange";}
    else {
        return "green"}
    })
    .attr("opacity", 0.7);

/*Axis labels */
svg.append("text")
   .attr("x", svgWidth / 2)
   .attr("y", svgHeight -15)
   .attr("text-anchor", "middle")
   .text("Screen Time Before Bed (minutes)");

svg.append("text")
   .attr("transform", "rotate(-90)")
   .attr("x", -svgHeight / 2)
   .attr("y", 20)
   .attr("text-anchor", "middle")
   .text("Sleep Quality (1= Poor, 5=Very Good)");

/*Size Key */
svg.append("text")
   .attr("x", svgWidth - 250)
   .attr("y", 40)
   .text("Total Sleep (hours)");

let sizeValues = [4, 7, 9];

sizeValues.forEach(function(value, index){
    svg.append("circle")
    .attr("cx", svgWidth - 220)
    .attr("cy", 60 + ( index * 80))
    .attr("r", rScale(value))
    .attr("fill", "grey");

    svg.append("text")
       .attr("x", svgWidth - 180)
       .attr("y", 65 + (index * 80))
       .attr("alignment-baseline", "middle")
       .text(value + " hrs");

})

/* color key */
svg.append("text")
   .attr("x", margin)
   .attr("y", 40)
   .text("Sleep Quality Levels");

let colorKey = [
    {label: "Low (1-2)", color: "red"},
    {label: "Medium (3-4)", color: "orange"},
    {label: "High (5)", color: "green"}

];

colorKey.forEach(function(item, index){
    svg.append("rect")
       .attr("x", margin)
       .attr("y", 60 + (index * 30))
       .attr("width", 20)
       .attr("height", 20)
       .attr("fill", item.color);

    svg.append("text")
        .attr("x", margin + 30)
        .attr("y", 75 + (index * 30))
        .text(item.label);
    
})

