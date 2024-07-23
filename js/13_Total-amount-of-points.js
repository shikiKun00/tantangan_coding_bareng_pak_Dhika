/*function points(games) {
    let res = 0;

    for (let i = 0; i < games.length; i++) {
        if (games[i][0] === games[i][2]) {
            res += 1;
        } else if (games[i][0] > games[i][2]) {
            res += 3;
        } 
    }

    return res;
}
*/

// cara sakti
const points = games =>
    games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);

console.log(
    points([
        "1:0", // 3
        "2:0", // 3
        "3:0", // 3
        "4:0", // 3
        "2:1", // 3
        "3:1", // 3
        "4:1", // 3
        "3:2", // 3
        "4:2", // 3
        "4:3" // 3
    ])
);
