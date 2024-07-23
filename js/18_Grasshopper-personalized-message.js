/*function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } 
    return 'Hello guest'
}*/

// cara sakti
const greet = (name, owner) => (name === owner) ? 'Hello boss' : 'Hello guest' 

console.log(greet('Daniel', 'Daniel'))