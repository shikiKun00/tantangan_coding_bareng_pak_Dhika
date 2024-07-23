/*function doubleChar(str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        res += str[i] + str[i]
    }
    
    return res
}
*/

const doubleChar = str =>
    str
        .split("")
        .map(el => el + el)
        .join("");

console.log(doubleChar("Adidas"));
