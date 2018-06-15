
const firstFullMoonof2000 = new Date("Friday, 21 January 2000, 00:40:24");
console.log(firstFullMoonof2000);
const firstFullMoonof2000InSeconds = firstFullMoonof2000.getTime()/1000;
console.log(firstFullMoonof2000InSeconds);

const daysAsSeconds = 60 * 60 * 24 * 29;
const hoursAsSeconds = 60 * 60 * 12;
const minutesAsSeconds = 60 * 44;
const secondsInLunarMonth = daysAsSeconds + hoursAsSeconds + minutesAsSeconds;

const tsOfEnd = new Date("Dec 31 2999, 23:59:59").getTime()/1000;
console.log(tsOfEnd);

let fullMoonArray = [];
let currentMoonTS = firstFullMoonof2000InSeconds;
while(currentMoonTS < tsOfEnd){
   fullMoonArray.push(new Date (currentMoonTS * 1000));
   currentMoonTS+= secondsInLunarMonth;
} 

// console.log(new Date(fullMoonArray[1200] * 1000));

console.log((fullMoonArray));