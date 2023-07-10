const reverseString = function(strings) {
    let reversedString = "";
    for(let i = strings.length; i >= 0; i--){
        reversedString += strings[i];
    }
    return reversedString.substring(9); //reversedString
};

// Do not edit below this line
module.exports = reverseString;
