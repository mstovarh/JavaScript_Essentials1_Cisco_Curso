const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rosa: precio unitario:", rosePrice, ", cantidad:", numberOfRoses, ", valor:", rosesValue);
console.log("Lirio: precio unitario:", lilyPrice, ", cantidad:", numberOfLilies, ", valor:", liliesValue);
console.log("Tulipán: precio unitario:", tulipPrice, ", cantidad:", numberOfTulips, ", valor:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rosa: precio unitario:", rosePrice, ", cantidad:", numberOfRoses, ", valor:", rosesValue);
console.log("Lirio: precio unitario:", lilyPrice, ", cantidad:", numberOfLilies, ", valor:", liliesValue);
console.log("Tulipán: precio unitario:", tulipPrice, ", cantidad:", numberOfTulips, ", valor:", tulipsValue);
console.log("Total: ", total);
    
    