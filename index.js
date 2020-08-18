// Code your solution here

function findMatching(drivers, string){
  return drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(driver => {
    return driver.sclice(0, 1) === string.slice(0, 1);
  });
}