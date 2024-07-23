/*const min = list => {
    let minVal = list[0]
    for (let i = 1; i < list.length; i++) {
        if (minVal > list[i + 1]) {
            minVal = list[i + 1]
        }
    }
    
    return minVal;
}

const max = list => {
    let minVal = list[0]
    for (let i = 1; i < list.length; i++) {
        if (minVal < list[i + 1]) {
            minVal = list[i + 1]
        }
    }
    
    return minVal;
}
*/


// cara sakti 
/*const min = list => list.sort((a,b) => a - b)[0]
const max = list => list.sort((a,b) => a - b)[list.length - 1]
*/

// cara sakti 
const min = (list) => Math.min(...list)
const max = (list) => Math.max(...list)

console.log(min([18,4,3,-102,5, -200]))
console.log(max([18,4,3,2000,-102,5, -200]))






















