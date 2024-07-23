/*const getAverage = marks => {
    let res = 0;
    for (let i = 0; i < marks.length; i++) {
        res += marks[i]
    }
    
    return Math.floor(res / marks.length)
};
*/

// cara sakti
const getAverage = marks =>
    Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);

console.log(getAverage([1, 2, 3, 4, 5])); // 3
