/*const quarterOf = (month) => {
    if (month <= 3) return 1;
    if (month <= 6) return 2;
    if (month <= 9) return 3;
    if (month <= 12) return 4;
    
}*/

const quarterOf = month =>
    month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : month <= 12 ? 4 : 0;

console.log(quarterOf(11)); // 3
