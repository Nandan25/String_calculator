const add = (numberString) => {
    if (numberString === "") return 0;

    const numberArray = numberString.split(",");
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
};


console.log(add(""));
console.log(add("1"));
console.log(add("1,5"));