let ageInput = document.querySelector(".ageInput");
let numInput = document.querySelector(".numInput");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


// 1. Create an arrow function called calculateSupply with two parameters. One called age and the other numPerDay.
          {

// 2. Declare a maxAge variable and set it equal to 100.
  
  

  // 3. Declare a totalNeeded variable and set it equal to the numPerDay parameter multiplied by 365 and then that amount is multiplied by the maxAge variable - the age parameter.

  

  // 4. Update the result div's inner html to show the total needed and max age. Use string interpolation to create the message: "You will need _________ cups of tea to last until the ripe old age of ___________!"
  

}



equalsButton.addEventListener("click", () => {

  // 5. Declare an userAgeInput variable and set it equal to the value of the ageInput. This needs to be a number, not a string! Be sure to place that inside our Number() method!

  
  // 6. Declare a userNumInput variable and set it equal to the value of the numInput. This needs to be a number, not a string! Be sure to place that inside our Number() method!
  
  

  // 7. Call the calculateSupply function. Be sure to include the userAgeInput variable  and the userNumInput variable as the two parameters!

  
})




//Do Not Touch This Code
clearButton.onclick = function() {
  ageInput.value = "";
  numInput.value = "";
  result.innerHTML = "";

}
