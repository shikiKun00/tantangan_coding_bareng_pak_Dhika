/*function updateLight(current) {
    if (current === "green") return "yellow";
    if (current === "yellow") return "red";
    return 'green'
}
*/

// cara sakti
/*const updateLight = current =>
    current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
*/

// cara lebij sakti
const updateLight = current =>
    ({ green: "yellow", yellow: "red", red: "green" })[current];

console.log(updateLight("red")); // yellow
