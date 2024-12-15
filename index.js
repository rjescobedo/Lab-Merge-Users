//Step 6: Import datejs
require('datejs');

//Step 2: Create CombineUsers Function
function combineUsers(...args) {
  //Step 3: Initialize a return object
  const combinedObject = {
    users: []
  };
  //Step 4: Loop through args
  for (const userArray of args) {
    //Step 5: Merge arrays
    combinedObject.users = [...combinedObject.users, ...userArray];
  }
  //Step 6: Get today's date and add it to the merged object
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  //Step 7: Return object
  return combinedObject;
}

// Example data:
// const users1 = ["Jim3","Pam5","Dwight77"];
// const users2 = ["Michael6","Eleanor22","Chidi202"];
// const users3 = ["Jack_jack","Julia_Oreo", "Bill_bore"];

// const result = combineUsers(users1, users2, users3);
// console.log(result);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};