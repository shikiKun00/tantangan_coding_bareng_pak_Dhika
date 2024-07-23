/*const areaOrPerimeter = (w, l) => {
    if (w === l) {
        return w * l;
    }

    return 2 * (w + l);
};
*/

// cara sakti
const areaOrPerimeter = (w, l) => (w === l ? w * l : 2 * (w + l));

console.log(areaOrPerimeter(6, 10)); // 9
