/*const sumArray = array => {
    let res = 0;

    if (!array || !array.length) {
        res = 0;
    } else if (array.length <= 1) {
        res = 0;
    }

    const sortedArr = array.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
        if (i != 0 && i != sortedArr.length - 1) {
            res += sortedArr[i];
        }
    }

    return res;
};
*/

// cara sakti
const sumArray = array =>
    array == null || array.length <= 2
        ? 0
        : array
              .sort((a, b) => a - b)
              .slice(1, -1)
              .reduce((acc, curr) => acc + curr);

console.log(sumArray([6, 2, 1, 8, 10]));
