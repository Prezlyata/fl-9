let reverse_a_number = (n) => {

    let one = 1;
    if(n < 0){
         n = n + '';
      let result = n.split('').splice(1, n.split('').length - 1).reverse().join('');
      return +result * -one;
    } else {
        n = n + '';
        let result = n.split('').reverse().join('');
        return +result;
    }
}