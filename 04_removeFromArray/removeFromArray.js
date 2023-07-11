const removeFromArray = function(arrays, elementstodelete) {
    let array = arguments[0];
    let arraywithdeleted = [];
    for(let i = 1; i < arguments.length; i++){
        arraywithdeleted = deletefromArray(array, arguments[i]);
    }
    return cleanArray(arraywithdeleted);
};

function deletefromArray(array, param){
    for(let i = 0; i < array.length; i++){
        if(param === array[i]){
            delete array[i];
        }
    }
    return array;
}

function cleanArray(array){
    let cleaned = []
    for(let i = 0; i < array.length; i++){
        if(array[i] !== undefined){
            cleaned.push(array[i]);
        }
    }
    console.log(cleaned);
    return cleaned;
}


// Do not edit below this line
module.exports = removeFromArray;
