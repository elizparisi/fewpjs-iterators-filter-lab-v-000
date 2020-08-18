// Code your solution here

function findMatching(drivers, string){
  return drivers.filter(driver => {
    return driver === string;
  });
}