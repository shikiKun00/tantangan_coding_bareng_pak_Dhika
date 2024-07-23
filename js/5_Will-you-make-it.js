/*const zeroFuel = (dtp, mpg, fuelLeft) => {
    return dtp / mpg <= fuelLeft;
};
*/

const zeroFuel = (dtp, mpg, fuelLeft) => dtp / mpg <= fuelLeft;


console.log(zeroFuel(50, 25, 3));
