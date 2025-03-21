const add = (numberString) => {
    if (numberString === "") return 0;

    if (numberString.startsWith("//[")) {


        const delimiter = getDelimiter(numberString);
        const formattedInput = formatInput(numberString);


        const numberArray = getNumbers(formattedInput, delimiter);
        return sumNumbers(numberArray);
    }

    const normalizedNumbers = numberString.replace(/\n/g, ",");

    const numberArray = normalizedNumbers.split(",");

    return sumNumbers(numberArray);
};

function getNumbers(string, delimiter) {
    return string.split(delimiter)
        .filter(n => n !== '')
        .map(n => parseInt(n));
}

function formatInput(input) {
    const delimiterRegExp = /^(\/\/.*\n)/;
    const matches = delimiterRegExp.exec(input);
    if (matches && matches.length > 0) {
        return input.replace(delimiterRegExp, '');
    }

    return input;
}

function getDelimiter(input) {
    const delimiters = [];
    const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g;
    let matches = multipleDelimiterRegexp.exec(input);
    while (matches !== null) {
        delimiters.push(matches[1]);
        matches = multipleDelimiterRegexp.exec(input);
    }
    if (delimiters.length > 0) {
        return new RegExp('[' + delimiters.join('') + ']');
    }
    matches = /^\/\/(.*)\n/.exec(input);
    if (matches && matches[1]) {
        return matches[1];
    }
    return /[\n,]/;

}

function sumNumbers(numberArray) {
    let sum = 0, negatives = [];

    numberArray.forEach(num => {
        const number = parseInt(num);
        if (isNaN(number)) return; // Ignore empty strings or invalid numbers
        if (number > 1000) return;
        if (number < 0) {
            negatives.push(number);
        }
        else {
            sum += number;

        }
    });

    if (negatives.length > 0) {
        throw new Error("Negative numbers not allowed: " + negatives.join(", "));
    }

    return sum;
}


console.log(add(""));  //0
console.log(add("1"));  //1
console.log(add("1,5"));  //6
console.log(add("1,5,6"));  //12 
console.log(add("1,5,6,4"));  //16  
console.log(add("1\n2,3"));  //6  
console.log(add("//;\n1;2"));  //3  
console.log(add("//[***]\n1***2***3"));  //6
console.log(add("2+1001"));  //2
console.log(add("//;\n1;2;-1"));  //Negative numbers not allowed -1

