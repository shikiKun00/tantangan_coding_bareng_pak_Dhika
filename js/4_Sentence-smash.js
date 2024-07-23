/* function smash(words) {
    let res = "";
    for (let i = 0; i < words.length; i++) {
        res += words[i];
        if (i != words.length - 1) res += ' '
    }

    return res;
}
*/

// versi sakti
const smash = words => words.join(" ");

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
