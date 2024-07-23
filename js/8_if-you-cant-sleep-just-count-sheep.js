/*const countSheep = (num) => {
    let murmur = ''
    for (let i = 0; i < num; i++) {
        murmur += `${i + 1} sheep...`
    }
    return murmur
}
*/

// cara sakti
const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('')

console.log(countSheep(3))