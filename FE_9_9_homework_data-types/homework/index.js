//1//
let findType = (n) => {
    return typeof n;
}


//2//
function forEach(arr,f){
	for(let i = 0; i < arr.length; i++){
		f(arr[i]);
	}	
}


//3//
function map(arr,f){
	let newarr = [];
	forEach(arr,function(el){
		newarr.push(f(el))
	});
	return newarr;
}


//4//
function filter(arr,f) {
	let newarr = [];
	forEach(arr,function(el){
			if(f(el)){
				newarr.push(el);
			}
		})
	return newarr;
}


//5//
function getAdultAppleLovers(arr){
	let results = filter(arr,function(person){
		return person.age >= 18 && person.favoriteFruit === 'apple';
	})
	let names = map(results, function(object){
		return object.name;
  });
	return names;
}


//6//
function keys(object){
let arrayOfKeys = [];
	for(let key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			arrayOfKeys.push(key);
		}
	}
  return arrayOfKeys;
}


//7//
function keysNumber(object){
	let arrayOfKeys = [];
	for(let key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			arrayOfKeys.push(object[key]);
		}
	}
  return arrayOfKeys;
}


//8//
function f(date) {
  let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
	let day = date.getUTCDate();
  let monthNumber = date.getMonth();
  let month = months[monthNumber];
  let year = date.getFullYear();
  return `It is ${day} of ${month}. ${year}`;
}
