const sumAll = function(begin, end) {
    if(typeof(begin) !== "number" || typeof(end) !== "number"){
        return "ERROR"
    }
    if(begin < 0 || end < 0){
        return "ERROR"
    }
    if(begin > end){
        return sum(end, begin);
    }
    return sum(begin, end);
};

function sum(begin, end){
    let sum = 0;
    for(let i = begin; i <= end; i++){
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
