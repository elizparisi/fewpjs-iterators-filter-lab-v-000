// Code your solution here

function findMatching(drivers, string){
  return drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(driver => {
    let startsWith = driver.sclice(0, 1);
    return startsWith.includes(string);
  });
}