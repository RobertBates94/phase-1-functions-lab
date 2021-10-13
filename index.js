function distanceFromHqInBlocks(someValue) {
    if (someValue > 42){
        return someValue - 42;
    }
    else {
        return 42 - someValue;
    }
}

function distanceFromHqInFeet(someValue) {
    if (someValue > 42){
        return (someValue - 42)*264;
    }
    else {
        return (42 - someValue)*264;
    }
}

function distanceTravelledInFeet(x, y) {
    if (y < x){
        return (x - y)*264;
    }
    else {
        return (y-x)*264;
    }
}

function calculatesFarePrice(x, y) {

    const fare = distanceTravelledInFeet(x, y)
    if (fare <= 400) {
        return 0;
    }
    else if (fare > 400 && fare <= 2000){
        return (fare - 400)*.02
    }
    else if (fare > 2000 && fare <=2500) {
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}