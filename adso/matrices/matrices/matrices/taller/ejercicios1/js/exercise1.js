/*
Description: arrays
autor: karen Daniela
*/





let iterationOne;
let iterationTwo;
let acceleration;

const forces = [
	[10,5,0],
	[4,-3,2],
	[0,0,6]

];
 

const mass = [2,4,3];


for(iterationOne=0;iterationOne<forces.length; iterationOne++) {
	let values=[];
	for(iterationTwo=0;iterationTwo<forces[iterationOne].length;iteration
		//console.log(forces[iterationOne][iterationTwo] );
		acceleration=forces[iterationOne][iterationTwo]/ mass[iteration]
		values.push(acceleration);
	}

		accelerations.push(values);	
}

