/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom() {
    var numRandom = Math.floor((Math.random()*9) + 1);
    return numRandom;
}
console.log(generateRandom())