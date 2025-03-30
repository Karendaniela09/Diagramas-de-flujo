Name exercise: vector
Description: sum vector forces
total:acceleration
Autor:Karen Daniela Holguin Cruz
Date: march 25 th 2025




const acceleration = [2,-1];
const initialVelocity = [4,0];
const initialPosition = [0,0];
const steps = 5;
let position = [];

const calculatePositions = (ax,ay,vx,vy,x0,y0,timeMax) => {
       for (let time = 0; time <= timeMax; time ++){
       let positionOne = x0+ vx * time + 0.5 * ax * time ** 2;
       let positionTwo = y0+ vy * time + 0.5 * ay * time ** 2;
       position.push ({time,positionOne,positionTwo});
} 
   return position;
};

const result =  calculatePositions(...acceleration,...initialVelocity,...initialPosition,steps);
console.log ("Position Matrix :");
console.table (result);