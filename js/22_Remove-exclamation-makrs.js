/*function removeExlamationMarks(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "!") {
            res += s[i];
        }
    }

    return res;
}
*/

// cara sakti
const removeExlamationMarks = s => s.split('!').join('')

console.log(removeExlamationMarks("Hello World!"));
