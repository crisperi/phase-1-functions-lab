// Code your solution in this file!
const scuber = 42;


function distanceFromHqInBlocks(pickup) {

    const distanceFromPickup = scuber - pickup;
    return Math.abs(distanceFromPickup);
};

console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    const distanceInFeet = blocks * 264;
    return distanceInFeet;
};
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    const diff = start - destination;
    console.log(diff);
    const distanceInFeet = Math.abs(diff) * 264;
    console.log(distanceInFeet);
    return distanceInFeet;
}
console.log(distanceTravelledInFeet(34, 38));

function calculatesFarePrice(start, destination) {
    const calFeet = distanceTravelledInFeet(start, destination);
    if (calFeet <= 400) {
        return 0;
    } else if (calFeet > 400 && calFeet < 2000) {
        const diffInFree = calFeet - 400;
        const charge = diffInFree * 0.02;
        console.log(charge);
        return charge;
    } else if (calFeet > 2000 && calFeet < 2500) {
        return 25 ;
    } else if (calFeet > 2500) {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(34,38));
