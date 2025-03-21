const add = (numberString) => {
    if (numberString === "") return 0;

    const numberArray = numberString.split(",");
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
};


console.log(add(""));  //0
console.log(add("1"));  //1
console.log(add("1,5"));  //6
console.log(add("1,5,6"));  //12 
console.log(add("1,5,6,4"));  //16