/*function DNAtoRNA(dna) {
    let res = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "T") {
            res += "U"
        } else {
            res += dna[i]
        }
    }
    return res
}
*/

const DNAtoRNA = dna => dna.split("").map(el => (el === "T" ? "U" : el)).join('');

console.log(DNAtoRNA("GCAU"));
