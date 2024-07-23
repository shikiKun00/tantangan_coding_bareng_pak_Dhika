/*const reverseSeq = n => {
    let res = [];
    for (let i = n; i >= 1; i--) {
        res.push(i);
    }
    return res;
};
*/

// solusi sakti
const reverseSeq = n => [...Array(n)].map((el,i) => n - i);

console.log(reverseSeq(5));
