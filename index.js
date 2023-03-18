const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(drivers){
    let newDrivers=drivers.slice(0,2)
    return newDrivers
}

const returnLastTwoDrivers = function(drivers){
    let newDrivers=drivers.slice(-2)
    return newDrivers
}

 const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

 function createFareMultiplier(number){
    return function(fareMultiplier){
        return fareMultiplier*number
    }
 }

 const fareDoubler=function(fareMultiplier){
        return createFareMultiplier(2)(fareMultiplier);
 }

 const fareTripler=function(fareMultiplier){
    return createFareMultiplier(3)(fareMultiplier);
 }

 function selectDifferentDrivers(arrayOfDrivers, drivers){
    return drivers(arrayOfDrivers)
 }

 selectDifferentDrivers(['Antonio', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
selectDifferentDrivers(['Antonio', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);





