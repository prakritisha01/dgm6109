"use strict"

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */


let bearLeftEar = drawing.append("circle")
    .attr("cx", 40)
    .attr("cy", 40)
    .attr("r", 15)
    .attr("fill", "black");

let bearRightEar = drawing.append("circle")
    .attr("cx", 110)
    .attr("cy", 40)
    .attr("r", 15)
    .attr("fill", "black");

let bearHead = drawing.append("circle")
    .attr("cx", 75)
    .attr("cy", 75)
    .attr("r", 50)
    .attr("fill", "#cbcbcb");

let bearLeftEye = drawing.append("ellipse")
    .attr("cx", 55)
    .attr("cy", 65)
    .attr("rx", 10)
    .attr("ry", 15)
    .attr("fill", "white");

 let bearRightEye = drawing.append("ellipse")
    .attr("cx", 90)
    .attr("cy", 65)
    .attr("rx", 10)
    .attr("ry", 15)
    .attr("fill", "white");

let bearLeftEyeBall = drawing.append("circle")
    .attr("cx", 55)
    .attr("cy",70)
    .attr("r", 5)
    .attr("fill","black");

let bearRightEyeBall = drawing.append("circle")
    .attr("cx", 90)
    .attr("cy",70)
    .attr("r", 5)
    .attr("fill","black");

let bearMouth = drawing.append("line")
    .attr("x1", 55)
    .attr("y1",100)
    .attr("x2",95)
    .attr("y2",100)
    .attr("stroke", "black")
    .attr("stroke-width", "1");

let bearNose = drawing.append("polyline")
    .attr("points", closedPolygon(70,80,
                                  75,80,
                                  65,85,
                                  80,85)); /* top left, top right, bottom left, botton right
    check this later, shape is not accurate */

let bearLeftHand = drawing.append("ellipse")
    .attr("cx", 50)
    .attr("cy", 167.5)
    .attr("rx", 40)
    .attr("ry", 47.5)
    .attr("fill", "black");

let bearRighttHand = drawing.append("ellipse")
    .attr("cx", 100)
    .attr("cy", 167.5)
    .attr("rx", 40)
    .attr("ry", 47.5)
    .attr("fill", "black");

let bearLeftLeg = drawing.append("rect")
    .attr("x", 40)
    .attr("y", 215)
    .attr("width", 30)
    .attr("height", 60)
    .attr("fill", "#cbcbcb");

let bearRightLeg = drawing.append("rect")
    .attr("x", 80)
    .attr("y", 215)
    .attr("width", 30)
    .attr("height", 60)
    .attr("fill", "#cbcbcb");

let bearLeftfoot = drawing.append('polyline')
    .attr("points", closedPolygon(40,275,
                                  70,275,
                                  50,285,
                                  60,285)) // top left, top righ, bottom left, bottom right
    .attr("fill", "#303030");
//check this later too, shape isn't accurate

// this is the right foot of bear
let bearRighfoot = drawing.append('polyline')
    .attr("points", closedPolygon(80,275,
                                  110,275,
                                  90,285,
                                  100,285)) // top left, top righ, bottom left, bottom right
    .attr("fill", "#303030");
//check this later too, shape isn't accurate

let bearBody = drawing.append("ellipse")
    .attr("cx", 75)
    .attr("cy", 175)
    .attr("rx", 50)
    .attr("ry", 60)
    .attr("fill", "#cbcbcb");








