/*function hero(bullets, dragons) {
    if (bullets / 2 >= dragons) {
        return true;
    } else {
        return false
    }
}
*/

// solusi sakti
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(200, 100));
