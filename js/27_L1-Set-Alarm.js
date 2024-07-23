/*function setAlarm(employed, vocation) {
    // true true = false
    // true false = true
    // false true = false
    // false false = false
    
    if (employed || vocation) return false;
    if (employed || !vocation) return true;
    if(!employed || vocation) return false;
    return false;
    
}
*/

const setAlarm = (employed, vocation) => employed && !vocation

console.log(setAlarm(true, false))