"use strict"

let bearX; // moves bear left or right
let bearY; // moves bear up or down

let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

document.getElementById("drawButton").onclick = drawImage;



function drawImage() {

    bearX = Number(document.getElementById("xInput").value);
    bearY = Number(document.getElementById("yInput").value); /* bearX and  bearY represent the body center.
    The center of the bear body is used as the origin point. All other parts moves together
    when the user changes X and Y */

    let hatChoice = (document.getElementById("hatChoice").value);

    drawing.selectAll(".bear").remove()

// Ears

let bearLeftEar = drawing.append("circle")
    .attr("class", "bear") /* this class label group things together 
                              as all bear parts share the same label */
    .attr("cx", 40 + bearX)
    .attr("cy", 40 + bearY)
    .attr("r", 15)
    .attr("fill", "black");

let bearRightEar = drawing.append("circle")
    .attr("class", "bear")
    .attr("cx", 110 + bearX)
    .attr("cy", 40 + bearY)
    .attr("r", 15)
    .attr("fill", "black");

// head  
let bearHead = drawing.append("circle")
    .attr("class", "bear")
    .attr("cx", 75 + bearX)
    .attr("cy", 75 + bearY)
    .attr("r", 50)
    .attr("fill", "#cbcbcb");

// Eyes
let bearLeftEye = drawing.append("ellipse")
    .attr("class", "bear")
    .attr("cx", 55 + bearX)
    .attr("cy", 65 + bearY)
    .attr("rx", 10)
    .attr("ry", 15)
    .attr("fill", "white");

 let bearRightEye = drawing.append("ellipse")
    .attr("class", "bear")
    .attr("cx", 90 + bearX)
    .attr("cy", 65 + bearY)
    .attr("rx", 10)
    .attr("ry", 15)
    .attr("fill", "white");

// Eyeballs 
let bearLeftEyeBall = drawing.append("circle")
    .attr("class", "bear")
    .attr("cx", 55 + bearX)
    .attr("cy",70 + bearY)
    .attr("r", 5)
    .attr("fill","black");

let bearRightEyeBall = drawing.append("circle")
    .attr("class", "bear")
    .attr("cx", 90 + bearX)
    .attr("cy",70 + bearY)
    .attr("r", 5)
    .attr("fill","black");

// Mouth 
let bearMouth = drawing.append("line")
    .attr("class", "bear")
    .attr("x1", 55 + bearX)
    .attr("y1",100 + bearY)
    .attr("x2",95 + bearX)
    .attr("y2",100 + bearY)
    .attr("stroke", "black")
    .attr("stroke-width", "1");

// nose 
let bearNose = drawing.append("polyline")
    .attr("class", "bear")
    .attr("points", closedPolygon(70 + bearX,80 + bearY,
                                  75 + bearX,80 + bearY,
                                  65 + bearX,85 + bearY,
                                  80 + bearX,85 + bearY)); /* top left, top right, bottom left, botton right
    check this later, shape is not accurate */


/* A HAT is drawn when the user selects "Hat" from the dropdown menu. When "No Hat" is selected,
the hat is not drawn. */

if (hatChoice == "hat") 

    {
let bearHat = drawing.append("rect")
    .attr("class", "bear")
    .attr("x", 45 + bearX)
    .attr("y", 5 + bearY)
    .attr("width", 60)
    .attr("height", 25)
    .attr("fill", "red");

let bearHat2 = drawing.append("rect")
    .attr("class", "bear")
    .attr("x", 35 + bearX)
    .attr("y", 30 + bearY)
    .attr("width", 80)
    .attr("height", 10)
    .attr("fill", "green");
    }


// hands 
let bearLeftHand = drawing.append("ellipse")
    .attr("class", "bear")
    .attr("cx", 50 + bearX)
    .attr("cy", 167.5 + bearY)
    .attr("rx", 40)
    .attr("ry", 47.5)
    .attr("fill", "black");

let bearRighttHand = drawing.append("ellipse")
    .attr("class", "bear")
    .attr("cx", 100 + bearX)
    .attr("cy", 167.5 + bearY)
    .attr("rx", 40)
    .attr("ry", 47.5)
    .attr("fill", "black");

// Legs 
let bearLeftLeg = drawing.append("rect")
    .attr("class", "bear")
    .attr("x", 40 + bearX)
    .attr("y", 215 + bearY)
    .attr("width", 30)
    .attr("height", 60)
    .attr("fill", "#cbcbcb");

let bearRightLeg = drawing.append("rect")
    .attr("class", "bear")
    .attr("x", 80 + bearX)
    .attr("y", 215 + bearY)
    .attr("width", 30)
    .attr("height", 60)
    .attr("fill", "#cbcbcb");

// Feet 
let bearLeftfoot = drawing.append('polyline')
    .attr("class", "bear")
    .attr("points", closedPolygon(40 + bearX,275 + bearY,
                                  70 + bearX,275 + bearY,
                                  50 + bearX,285 + bearY,
                                  60 + bearX,285 + bearY)) // top left, top righ, bottom left, bottom right
    .attr("fill", "#303030");
//check this later too, shape isn't accurate

let bearRighfoot = drawing.append('polyline')
    .attr("class", "bear")
    .attr("points", closedPolygon(80 + bearX,275 + bearY,
                                  110 + bearX,275 + bearY,
                                  90 + bearX,285 + bearY,
                                  100 + bearX,285 + bearY)) // top left, top righ, bottom left, bottom right
    .attr("fill", "#303030");
//check this later too, shape isn't accurate

// body
let bearBody = drawing.append("ellipse")
    .attr("class", "bear")
    .attr("cx", 75 + bearX)
    .attr("cy", 175 + bearY)
    .attr("rx", 50)
    .attr("ry", 60)
    .attr("fill", "#cbcbcb");
}
