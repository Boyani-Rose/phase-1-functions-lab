// Code your solution in this file!
function distanceFromHqInBlocks (Blocks) {
    let Hq = 42
    let distance = Math.abs(Blocks - Hq )
    return distance

}
distanceFromHqInBlocks (43)
distanceFromHqInBlocks (50)
distanceFromHqInBlocks (34)

function distanceFromHqInFeet(Blocks) {

let distance =distanceFromHqInBlocks(Blocks)
return distance*264
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distanceInBlocks = Math.abs (destination - start)
    let distanceInFeet = distanceInBlocks*264
    return distanceInFeet

  }
  distanceTravelledInFeet ()
  distanceTravelledInFeet ()
  distanceTravelledInFeet ()

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination)
      if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return "cannot travel that far"; 
    }
  }
