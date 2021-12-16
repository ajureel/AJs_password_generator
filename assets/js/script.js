// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordCriteria() {
  //clear pw box
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordText.placeholder="Your Secure Password";

  //set a flag to check data validation
  var validCriteriaBln = true;

  //*** prompt for criteria ***//
  //  How many characters would you like your password to contain?
  var pwLength = prompt("How many characters would you like your password to contain (8-128)?");

  // " include special characters
  var pwSpecialCharactersBln = confirm("Click OK to confirm that you would like your password to contain special characters.");

  // Click ok to confirm including numbers
  var pwNumbersBln = confirm("Click OK to confirm that you would like your password to contain numbers.");

  // '' lower case characters
  var pwLowerCaseBln = confirm("Click OK to confirm that you would like your password to contain lower case letters.");

  // "upper case characters
  var pwUpperCaseBln = confirm("Click OK to confirm that you would like your password to contain upper case letters.");

  //validate the input
  if (pwLength < 8 || pwLength > 128) {validCriteriaBln = false};
  console.log(validCriteriaBln);
  if (pwSpecialCharactersBln == false && pwNumbersBln == false && pwLowerCaseBln == false && pwUpperCaseBln == false) 
    {validCriteriaBln = false};
  console.log(validCriteriaBln);    
  if (validCriteriaBln == false){
    //invalid criteria
    console.log ("gotta return");
    alert("You must enter a valid length and contain at least one type of character.  Please try again.");
    return;
  }; 

  // We have good criteria, good to generate the password
  console.log("good to go");

  // some debugging code to write the input to the console
  // varToConsole(Object.keys({pwLength})[0], pwLength);
  // varToConsole(Object.keys({pwSpecialCharactersBln})[0], pwSpecialCharactersBln);
  // varToConsole(Object.keys({pwNumbersBln})[0], pwNumbersBln);
  // varToConsole(Object.keys({pwLowerCaseBln})[0], pwLowerCaseBln);
  // varToConsole(Object.keys({pwUpperCaseBln})[0], pwUpperCaseBln);
  
  var password = generatePassword();
  
  passwordText.value = password;

}

var varToConsole = function (myVar, myVal){
  console.log (myVar +": " + myVal);
}

var generatePassword = function () {
  console.log("ready to generatePassword!")
  return "test-pw";
};
// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);
