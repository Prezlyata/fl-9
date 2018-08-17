const firstSide = parseFloat(prompt('Please enter firstSide', 0));
const secondSide = parseFloat(prompt('Please enter secondSide', 0));
const angle = parseFloat(prompt('Please enter angle', 0));
const degreeRule = 180;

let calculateThirdSide = (firstSide, secondSide, angle) => {
	return Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2) - 
	2 * firstSide * secondSide * Math.cos(Math.PI / degreeRule * angle));
}

let calculatePerimeter = (firstSide, secondSide, thirdSide) => {
	return parseFloat(firstSide) + parseFloat(secondSide) + parseFloat(thirdSide);
}

let calculateSquare = (firstSide, secondSide, thirdSide, perimeter) => {
	return Math.sqrt(perimeter / 2 * ((perimeter / 2 - firstSide) * (perimeter / 2 - secondSide) * 
	(perimeter / 2 - thirdSide)));
}

let calculate = (firstSide, secondSide, angle) => {
	if(firstSide <= 0 || secondSide <= 0 || angle <= 0){
		console.log('Invalid data')
	} else {
		let newThirdSide = calculateThirdSide(firstSide, secondSide, angle).toFixed(2);
		let newPerimeter = calculatePerimeter(firstSide, secondSide, newThirdSide).toFixed(2);
		let newsQuare = Math.round(calculateSquare(firstSide, secondSide, newThirdSide, newPerimeter));

		console.log('thirdSide: ', parseFloat(newThirdSide));
		console.log('square: ', parseFloat(newsQuare));
		console.log('perimeter: ', parseFloat(newPerimeter));
	}
}

console.log(calculate(firstSide, secondSide, angle));