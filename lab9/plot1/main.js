"use strict"

let svgWidth= 600
let svgHeight = 400
let margin = 40

let maxScreenTime = 155
let maxSleepQuality = 5

d3.select("#container")
.style("width", svgWidth + "px")

/*SVG canvas */
let svg= d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

/*outer border */
svg.append("rect")
   .attr("fill", "none")
   .attr("stroke","black")
   .attr("width", svgWidth)
   .attr("height", svgHeight)

/*margin border*/
svg.append("rect")
   .attr("fill", "none")
   .attr("x", margin)
   .attr("y", margin)
   .attr("width", svgWidth - margin*2)
   .attr("height", svgHeight - margin*2)

/*Dataset*/
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

/*Filter nights with screen time greater than 60 minutes */

let filterData = dataset.filter(function(d){
    return d.screenTime >= 60
}) /* I took help online to understand this. so this creates a new array that
only contains the items that you specified. Specified as in - that meet a specific
condition. In this case, it is asked only to keep the nights where screenTime is greater
than 60 minutes. */

/*Scales*/

let xScale = d3.scaleLinear()
.domain([0,maxScreenTime])
.range([margin, svgWidth - margin])

let yScale = d3.scaleLinear()
.domain([0,maxSleepQuality])
.range([svgHeight - margin, margin])

/* axis lines */
svg.append("line")
   .attr("x1", margin)
   .attr("x2", svgWidth - margin)
   .attr("y1", svgHeight - margin)
   .attr("y2", svgHeight - margin)
   .attr("stroke", "black")

svg.append("line")
   .attr("x1", margin)
   .attr("x2", margin)
   .attr("y1", margin)
   .attr("y2", svgHeight - margin)
   .attr("stroke", "black")

/* axis numbers */

for (let i = 1; i <= 5; i++) {

svg.append("text")
   .attr("x", margin - 10)
   .attr("y", yScale(i))
   .attr("text-anchor", "end")
   .attr("alignment-baseline", "middle")
   .text(i)

} // learnt in class

for (let i = 0; i <= 160; i += 20) {

svg.append("text")
   .attr("x", xScale(i))
   .attr("y", svgHeight - margin + 15)
   .attr("text-anchor", "middle")
   .text(i)

} // learnt in class

/* Data points traingle */

svg.selectAll("path")
.data(filterData)
.join("path") /* took help of chatGPT to understand this and I understood that it updates 
              the path for the dataset in filtered Data. It selects the exisiting path and combines the new
              filtered dataset.  */

.attr("d", d3.symbol()
.type(d3.symbolTriangle) // this tells D3 to draw triangle shape
.size(120))

.attr("transform", function(d){ //posituoning each trinagle using the transform attribute

let x = xScale(d.screenTime)
let y = yScale(d.sleepQuality)

if(d.totalSleep < 7){
    return "translate(" + x + ", " + y + ") rotate(180)" /*I learned this from stackoverflow.com. translate(x,y)
                                             moves the triangle to the position specified in dataset. + signs combine text and
                                             calculated x and y values. it tells to insert the respective value. */
}

else{
    return "translate(" + x + ", " + y + ")"
}

})

.attr("fill","rgba(250, 86, 3, 0.93)")
.attr("opacity", 0.8)

/*draw line showing the 60 minute screen time threshold */

svg.append("line")
   .attr("x1", xScale(60))
   .attr("x2", xScale(60))
   .attr("y1", margin)
   .attr("y2", svgHeight - margin)
   .attr("stroke", "red")
   .attr("stroke-dasharray", "5")

/*label for the horizontal axis */

svg.append("text")
   .attr("x", svgWidth/2)
   .attr("y", svgHeight - margin/3)
   .attr("text-anchor", "middle")
   .text("Screen Time Before Bed (minutes)")

/*label for the vertical axis */

svg.append("text")
   .attr("x", -svgHeight/2)
   .attr("y", margin/3)
   .attr("transform", "rotate(-90)")
   .attr("text-anchor", "middle")
   .text("Sleep Quality (1-5 scale)")

/* legend title */

svg.append("text")
   .attr("x", svgWidth-margin-90)
   .attr("y", margin)
   .text("Triangle shows:")

/*Triangle for sleep >= 7 hours */

svg.append("path")
   .attr("d", d3.symbol().type(d3.symbolTriangle).size(120))
   .attr("transform", "translate("+(svgWidth-margin-90)+", "+(margin+30)+")") // positioning the triangle right inside the legend area
   .attr("fill","rgba(250, 86, 3, 0.93)")

svg.append("text")
   .attr("x", svgWidth-margin-70)
   .attr("y", margin+35)
   .text(">=7 hrs sleep")

/*Triangle for sleep < 7 hours */

svg.append("path")
   .attr("d", d3.symbol().type(d3.symbolTriangle).size(120))
   .attr("transform", "translate("+(svgWidth-margin-90)+", "+(margin+60)+") rotate(180)") 
   .attr("fill","rgba(250, 86, 3, 0.93)")

svg.append("text")
   .attr("x", svgWidth-margin-70)
   .attr("y", margin+65)
   .text("<7 hrs sleep")
   
/* box around legend */

svg.append("rect")
   .attr("x", svgWidth - margin - 100)
   .attr("y", margin - 15)
   .attr("width", 120)
   .attr("height", 90)
   .attr("fill", "none")
   .attr("stroke", "black")



