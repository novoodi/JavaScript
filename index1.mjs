import { odd, even } from './var1.mjs';
import checkNumber from './func.mjs';
checkStringOddOrEven1 = (str) => {
    if (str.length % 2) {	//	홀수이면
        return odd;
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));