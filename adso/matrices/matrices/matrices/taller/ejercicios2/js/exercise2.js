/*
	Name exercise: Vector Addition
	Description: Sum of vector forces and calculation of 
	total: acceleration description
	Autor: Karen Daniela Holguin Cruz 
	Date: march 25th 2025
*/

const forces = [
[5,0],
[-2,3],
[1,-1]
];

const mass = 2;

let totalForce = forces.reduce((acc,forces) => {
          return [acc[0] + forces[0],acc[1] + forces[1]];
}, [0,0]);

let acceleration = [totalForce[0] / mass, totalForce[1] / mass];

console.log("Total de fuerzas :" + totalForce);
console.log ("Aceleracion : "+ acceleration);