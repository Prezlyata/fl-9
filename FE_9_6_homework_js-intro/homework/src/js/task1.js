const price = parseFloat(prompt('Please enter your price', 0));
const discount = parseFloat(prompt('Please enter your discount', 0));

let calculateDiscount = (price, discount) => {
	return price/100*discount;
}

let calculate = (price, discount) => {
	if(price <= 0 || discount <= 0){
		alert('Invalid data');
	} else { 
		let discountPrice = calculateDiscount(price, discount);
		let priceWithDiscount = price - discountPrice;
		
		if (discountPrice % 1 === 0){
			console.log('discountPrice: ', discountPrice.toFixed(0));
		} else{
			console.log('discountPrice: ', discountPrice.toFixed(2));
		}
		
		if (priceWithDiscount % 1 === 0){
			console.log('priceWithDiscount: ', priceWithDiscount.toFixed(0));
		} else{
			console.log('priceWithDiscount: ', priceWithDiscount.toFixed(2));
		}
	}
}

console.log(calculate(price, discount));