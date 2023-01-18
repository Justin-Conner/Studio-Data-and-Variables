const input = require('readline-sync');
let astronautCount =  input.question("Enter the number of Astronauts: ");


let title1= "> LC04 - LAUNCH CHECKLIST"
let title2= "> ASTRONAUT INFO"
let title3= "> FUEL DATA"
let title4= "> MASS DATA"
let title5= "> FLIGHT PLAN"
let title6= "> OVERALL STATUS"

let line= "-------------------------------------"
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let space = "  "
let Area1 = [line, title1, line, date, time, space, line]

Area1.forEach(item => console.log(item));

//let astronautCount =  input.question("Enter the number of Astronauts: "); 
let count = "* count: "
let astronautStatus = "* status:   ready"
let Area2 = [title2, line, count + astronautCount, astronautStatus, space]
Area2.forEach(item => console.log(item));

let celcius = " C"
let fuelTempCelsius = ("* Fuel temp celsius: ") +-225+celcius
let fuelLevel = "* Fuel level: "+ 100 +"%"
let Area3 = [line, title3, line, fuelTempCelsius, fuelLevel, space]

Area3.forEach(item => console.log(item));

let kg = " kg"
let averageAstronautMassKg = "80.7"
let crewMassStr = "* Crew mass: "
let crewMassKg = crewMassStr + (astronautCount * averageAstronautMassKg) + kg
let crewMassOnly = (astronautCount * averageAstronautMassKg)
let fuelMassStr = "* Fuel mass: "
let fuelMassKg = fuelMassStr + 760000 + kg
let fuelMassOnly = 760000
let shuttleMassStr =  "* Shuttle mass: "
let shuttleMassKg =  shuttleMassStr + 74842.31 + kg
let shuttleMassOnly = 74842.31
let TotMass = Math.floor(fuelMassOnly + shuttleMassOnly + crewMassOnly)
let totalMassStr = "* Total mass: " + TotMass + kg
let totalMassKg = totalMassStr 


let Area4= [line, title4, line, crewMassKg, fuelMassKg, shuttleMassKg, totalMassStr ]
Area4.forEach(item => console.log(item));

//Area5
let weatherStatus = "* weather: clear"
let Area5 = [line,title5, line, weatherStatus, space, space]
Area5.forEach(item => console.log(item));

//Area6
let ClearForTakeOff = "* Clear for takeoff: YES"
let Area6 = [line, title6, line, ClearForTakeOff]
Area6.forEach(item => console.log(item));


let TotalList = [Area1, Area2, Area3, Area4, Area5, Area6]







