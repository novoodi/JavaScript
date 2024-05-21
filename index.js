const { odd, even } = require('./var');
const checkOddOrEven = require('./func');
checkStringOddOrEven = (str) => {
    if (str.length % 2) {	//	홀수이면
        return odd;
    }
    return even;
}
console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello'));