"use strict"

let drawingWidth=500;
let drawingHeight=500;

/*  Variable that enables you to "talk to" your 
SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

let bearX=150; 
let bearY=100; /*Change bearX/bearY to move the whole bear together
The bear was first at its original position bearX/bearY =0. 
Changing only bearX and bearY value will result in whole bear moving together*/

/*draw left/right ear of bear*/

let bearLeftEar = drawing.append("circle")
    .attr("cx", 40 + bearX)
    .attr("cy", 40 + bearY)
    .attr("r", 15)
    .attr("fill", "black");

let bearRightEar = drawing.append("circle")
    .attr("cx", 110 + bearX)
    .attr("cy", 40 + bearY)
    .attr("r", 15)
    .attr("fill", "black");

/* draw bear head */

let bearHead = drawing.append("circle")
    .attr("cx", 75 + bearX)
    .attr("cy", 75 + bearY)
    .attr("r", 50)
    .attr("fill", "#cbcbcb");

/* draw left/right eye of bear */

let bearLeftEye = drawing.append("ellipse")
    .attr("cx", 55 + bearX)
    .attr("cy", 65 + bearY)
    .attr("rx", 10)
    .attr("ry", 15)
    .attr("fill", "white");

 let bearRightEye = drawing.append("ellipse")
    .attr("cx", 90 + bearX)
    .attr("cy", 65 + bearY)
    .attr("rx", 10)
    .attr("ry", 15)
    .attr("fill", "white");

let bearLeftEyeBall = drawing.append("circle")
    .attr("cx", 55 + bearX)
    .attr("cy",70 + bearY)
    .attr("r", 5)
    .attr("fill","black");

let bearRightEyeBall = drawing.append("circle")
    .attr("cx", 90 + bearX)
    .attr("cy",70 + bearY)
    .attr("r", 5)
    .attr("fill","black");

/* draw bear mouth*/

let bearMouth = drawing.append("line")
    .attr("x1", 55 + bearX)
    .attr("y1",100 + bearY)
    .attr("x2",95 + bearX)
    .attr("y2",100 + bearY )
    .attr("stroke", "black")
    .attr("stroke-width", "1");

/* draw nose of the bear */ 

let bearNose = drawing.append("polyline")
    .attr("points", closedPolygon(70 + bearX,80 + bearY,
                                  75 + bearX,80 + bearY,
                                  65 + bearX,85 + bearY,
                                  80 + bearX,85 + bearY)); /* top left, top right, bottom left, botton right
check this later, shape is not accurate */

/* draw both the arms of bear */

let bearLeftHand = drawing.append("ellipse")
    .attr("cx", 50 + bearX)
    .attr("cy", 167.5 + bearY)
    .attr("rx", 40)
    .attr("ry", 47.5)
    .attr("fill", "black");

let bearRighttHand = drawing.append("ellipse")
    .attr("cx", 100 + bearX)
    .attr("cy", 167.5 + bearY)
    .attr("rx", 40)
    .attr("ry", 47.5)
    .attr("fill", "black");

/* draw left and right leg of bear */

let bearLeftLeg = drawing.append("rect")
    .attr("x", 40 + bearX)
    .attr("y", 215 + bearY)
    .attr("width", 30)
    .attr("height", 60)
    .attr("fill", "#cbcbcb");

let bearRightLeg = drawing.append("rect")
    .attr("x", 80 + bearX)
    .attr("y", 215 + bearY)
    .attr("width", 30)
    .attr("height", 60)
    .attr("fill", "#cbcbcb");

let bearLeftfoot = drawing.append('polyline')
    .attr("points", closedPolygon(40 + bearX ,275 + bearY,
                                  70 + bearX,275 + bearY,
                                  50 + bearX,285 + bearY,
                                  60 + bearX,285 + bearY)) // top left, top righ, bottom left, bottom right
    .attr("fill", "#303030");
//check this later too, shape isn't accurate

// this is the right foot of bear
let bearRighfoot = drawing.append('polyline')
    .attr("points", closedPolygon(80 + bearX,275 + bearY,
                                  110 + bearX,275 + bearY,
                                  90 + bearX,285 + bearY,
                                  100 + bearX,285 + bearY)) // top left, top righ, bottom left, bottom right
    .attr("fill", "#303030");
//check this later too, shape isn't accurate

/* draw bear body */
let bearBody = drawing.append("ellipse")
    .attr("cx", 75 + bearX)
    .attr("cy", 175 + bearY)
    .attr("rx", 50)
    .attr("ry", 60)
    .attr("fill", "#cbcbcb");








