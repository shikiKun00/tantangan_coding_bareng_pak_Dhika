// cara saya
/*const arrayPlusArray = (arr1, arr2) => {
    let res = 0;
    const gattai = [...arr1, ...arr2];
    
    for (let i = 0; i < gattai.length; i++) {
        res += gattai[i];
    }
    
    return res;
};*/

// cara mayan sakti
/*function arrayPlusArray(arr1, arr2) {
    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            res += arguments[i][j];
        }
    }
    return res;
}
*/

// cara paling sakti
const arrayPlusArray = (arr1, arr2) =>
    [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
