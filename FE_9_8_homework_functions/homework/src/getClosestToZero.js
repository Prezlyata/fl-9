function getClosestToZero(){

    let arg = Array.prototype.slice.call(arguments);
    let res;
    let max = arg[arg.length - 1];
    
    for(let i = 0; i < arg.length; i++) {
    let el = Math.abs(0 - arg[i]);
        if (el < max) {
        max = 0;
        res = arg[i];
        }
    }
    return res;     
}