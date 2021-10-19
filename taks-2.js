const reducer = (previousValue, currentValue) => previousValue + currentValue;


let multipliedSum = function(...x) {
    return function(y) { return x.map(x => x*=y).reduce(reducer) };
}





let addSuffix = function(x) {
    return function(y) { return `${y}${x}`; };
}
const addLy = addSuffix('ly');







console.log(multipliedSum(1, 2, 3, 4)(2),
            multipliedSum(1, 2)(3), 
            multipliedSum(0)(20) ,
            addLy('hopeless'))








