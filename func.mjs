import { odd, even } from './var1.mjs';
checkOddOrEven1 = (num) => {
    if (num % 2) {	//	홀수이면
        return odd;
    }
    return even;
}
export default checkOddOrEven1;