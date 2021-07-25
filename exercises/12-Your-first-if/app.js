var total = prompt("How many km are left to go?");

// Your code below:
function reply(total){
    let answer;
    if (total > 100) {
    answer= "Are we there yet?";
    } else if (total <= 100 && total > 50) {
    answer= "We'll be there in 5 minutes";
    } else {
    answer= "I'm parking, I see you right now";
    }
    return answer;
}
console.log(reply(total))