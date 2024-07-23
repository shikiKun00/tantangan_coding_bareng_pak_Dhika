/*function sumMix(x) {
    let res = 0;
    for (let i = 0; i < x.length; i++) {
        res += parseInt(x[i]); // +x[i]
    }

    return res;
}*/

// cara sakti
const sumMix = x => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix([9, 3, "7", "3"]));
