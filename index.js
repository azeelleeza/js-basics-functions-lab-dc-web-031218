// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue-42);
}
function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue)*264;
}
function distanceTravelledInFeet (start,end) {
  return Math.abs(start-end)*264;
}
function calculatesFarePrice (start,end) {
  let distance = distanceTravelledInFeet(start,end)

  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
