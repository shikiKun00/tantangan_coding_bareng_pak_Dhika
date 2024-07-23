/*function grow(x) {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res *= x[i];
    }
    return res;
}

console.log(grow([1, 2, 3, 4]));
*/

// solusi lain "sakti
const grow = x => {
    return x.reduce((acc, curr) => acc * curr);
};
console.log(grow([2, 2, 2, 2, 2, 2]));
