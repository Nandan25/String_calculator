const add = (numberString) => {
    if (numberString === "") return 0;

    if (numberString.startsWith("//")) {

        const delimiterLineEnd = numberString.indexOf("\n");
        const delimiter = numberString.slice(2, delimiterLineEnd);
        const numbersList = numberString.slice(delimiterLineEnd + 1);


        const numberArray = numbersList.split(delimiter);
        return sumNumbers(numberArray);
    }

    const normalizedNumbers = numberString.replace(/\n/g, ",");

    const numberArray = normalizedNumbers.split(",");

    return sumNumbers(numberArray);
};

function sumNumbers(numberArray) {
    let sum = 0;

    numberArray.forEach(num => {
        const number = parseInt(num);
        if (isNaN(number)) return; // Ignore empty strings or invalid numbers

        else {
            sum += number;
        }
    });



    return sum;
}


console.log(add(""));  //0
console.log(add("1"));  //1
console.log(add("1,5"));  //6
console.log(add("1,5,6"));  //12 
console.log(add("1,5,6,4"));  //16  
console.log(add("1\n2,3"));  //6  
console.log(add("//;\n1;2"));  //3