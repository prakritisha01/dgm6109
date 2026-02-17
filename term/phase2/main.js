"use strict"

let sleepData = [

    {
        date: "Feb 1",
        screenTime: 42, // minutes before bed
        bedTime: "12:45 AM",
        totalSleep: 7, // hours slept
        sleepQuality: 3 // 1 = very poor, 5 = very good
    }, // sleep data observation for feb 1

    {
        date: "Feb 2",
        screenTime: 15, 
        bedTime: "11:50 PM",
        totalSleep: 7.5, 
        sleepQuality: 4 
    }, // sleep data observation for feb 2

    {
        date: "Feb 3",
        screenTime: 57, 
        bedTime: "1:20 AM",
        totalSleep: 6, 
        sleepQuality: 2 
    }, // sleep data observation for feb 3

    {
        date: "Feb 4",
        screenTime: 35, 
        bedTime: "12:30 AM",
        totalSleep: 6, 
        sleepQuality: 3 
    }, // sleep data observation for feb 4

    {
        date: "Feb 5",
        screenTime: 40, 
        bedTime: "4:00 AM",
        totalSleep: 3, 
        sleepQuality: 3 
    }, // sleep data observation for feb 5

    {
        date: "Feb 9",
        screenTime: 155, 
        bedTime: "7:00 AM",
        totalSleep: 4, 
        sleepQuality: 1 
    }, // sleep data observation for feb 9

     {
        date: "Feb 10",
        screenTime: 48, 
        bedTime: "12:40 AM",
        totalSleep: 6.5, 
        sleepQuality: 3 
    }, // sleep data observation for feb 10

    {
        date: "Feb 11",
        screenTime: 62, 
        bedTime: "1:10 AM",
        totalSleep: 6, 
        sleepQuality: 2
    }, // sleep data observation for feb 11
 
    {
        date: "Feb 12",
        screenTime: 28, 
        bedTime: "12:05 AM",
        totalSleep: 7, 
        sleepQuality: 4 
    }, // sleep data observation for feb 12

    {
        date: "Feb 15",
        screenTime: 33, 
        bedTime: "12:20 AM",
        totalSleep: 7, 
        sleepQuality: 4 
    }, // sleep data observation for feb 15

    {
        date: "Feb 16",
        screenTime: 90, 
        bedTime: "12:10 AM",
        totalSleep: 9, 
        sleepQuality: 5 
    } // sleep data observation for feb 16

];


// console.log(JSON.stringify(sleepData));
showData(sleepData);
