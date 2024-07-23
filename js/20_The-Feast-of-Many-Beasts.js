/*function feast(beats, dish) {
    if (beats[0] === dish[0] && beats[beats.length - 1] === dish[dish.length - 1]) {
        return true;
    }
    
    return false;
}
*/

// cara sakti
const feast = (beats, dish) =>
    beats[0] === dish[0] && beats[beats.length - 1] === dish[dish.length - 1]

console.log(feast("great blue heron", "garlic naan"));
