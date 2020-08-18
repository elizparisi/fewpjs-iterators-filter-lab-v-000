// Code your solution here

function findMatching(driver, string){
  let matching = driver.filter(driver => {
    return driver === string;
  });
}