"use strict"

let svgWidth = 600
let svgHeight = 400
let margin = 40 // increased margin for better spacing

/*Maximum values from dataset*/
let maxScreenTime = 155 // highest screen time from dataset 
let maxSleepQuality = 5 // highest sleep quality score 
let maxTotalSleep = 9 // highest sleeping hours


/* Resize  div to match width of visualization. */
d3.select("#container")
    .style("width", String(svgWidth) + "px")

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2)

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

]

/*Sort Data*/

dataset.sort(function(a,b){
    return a.screenTime - b.screenTime
}) // reference taken from class examples and learning


/* Scales */
let xScale = d3.scaleLinear()
    .domain([0, maxScreenTime])
    .range([margin, svgWidth - margin])

let yScale = d3.scaleLinear()
    .domain([0, maxSleepQuality])
    .range([svgHeight - margin, margin]) //flipped for SVG

// third number variable - representes total sleep hours */
let rScale = d3.scaleLinear()
    .domain([3, maxTotalSleep])
    .range([6, 20])

/* Datapoints */
let circles = svg.selectAll("circle.dataPoint")
    .data(dataset)
    .join("circle")
    .attr("class", "dataPoint")

circles
    .attr("cx", function(d) {
        return xScale(d.screenTime)
      })
    .attr("cy", function (d) {
        return yScale(d.sleepQuality)
    })
    .attr("r", function (d) {
        return rScale(d.totalSleep)
    })
    .attr("fill", "steelblue")
    .attr("opacity", 0.7)


/* axis labels and lines */

// x axis
svg.append("line")
   .attr("x1", margin)
   .attr("x2", svgWidth - margin)
   .attr("y1", svgHeight - margin)
   .attr("y2", svgHeight - margin)
   .attr("stroke", "black")

svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 3))
    .attr("text-anchor", "middle")
    .text("Screen Time Before Bed (minutes)")

// y axis 
svg.append("line")
   .attr("x1", margin)
   .attr("x2", margin)
   .attr("y1", margin)
   .attr("y2", svgHeight - margin)
   .attr("stroke", "black")

svg.append("text")
    .attr("x", - svgHeight / 2)
    .attr("y", margin / 3)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("transform", "rotate(-90)")
    .text("Sleep Quality (1 = Poor, 5 = Very Good)")

/* axis numbers */
for (let i = 0; i <= 155; i += 20) {

svg.append("text")
   .attr("x", xScale(i))
   .attr("y", svgHeight - margin + 15)
   .attr("text-anchor", "middle")
   .text(i)

}

for (let i = 1; i <= 5; i++) {

svg.append("text")
   .attr("x", margin - 10)
   .attr("y", yScale(i))
   .attr("text-anchor", "end")
   .attr("alignment-baseline", "middle")
   .text(i)

}

/*Legend (Bubble size = total sleep hours) */

svg.append("text")
    .attr("x", svgWidth - 150)
    .attr("y", margin - 10) // moved slightly upward because it was touching the line
    .text("Total Sleep (hours)")

/* small circle */
svg.append("circle")
   .attr("cx", svgWidth - margin - 40)
   .attr("cy", margin + 30)
   .attr("r", rScale(3))
   .attr("fill", "steelblue")

svg.append("text")
   .attr("x", svgWidth - margin - 15)
   .attr("y", margin + 35)
   .text("3 hrs")

/* medium circle */ 
svg.append("circle")
   .attr("cx", svgWidth - margin - 40)
   .attr("cy", margin + 60)
   .attr("r", rScale(6))
   .attr("fill", "steelblue")

svg.append("text")
   .attr("x", svgWidth - margin - 15)
   .attr("y", margin + 65)
   .text("6 hrs")

/* large circle */
svg.append("circle")
   .attr("cx", svgWidth - margin - 40)
   .attr("cy", margin + 95)
   .attr("r", rScale(9))
   .attr("fill", "steelblue")

svg.append("text")
   .attr("x", svgWidth - margin - 15)
   .attr("y", margin + 100)
   .text("9 hrs")


   
