// Assignment code here
 //prompts confirm
 //arrays
//  How many characters would you like your password to contain?
// " include special characters
// Click ok to confirm including numbers
// '' lower case characters
// "upper case characters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Ready to pop up!");
  //  How many characters would you like your password to contain?
  var pwLength = prompt ("How many characters would you like your password to contain (8-128)?");
  // " include special characters
  var pwSpecialCharactersBln = confirm("Click OK to confirm that you would like your password to contain special characters.");

// Click ok to confirm including numbers
  var pwNumbersBln = confirm("Click OK to confirm that you would like your password to contain numbers.");
  
// '' lower case characters
var pwLowerCaseBln = confirm("Click OK to confirm that you would like your password to contain lower case letters.");
  
// "upper case characters
var pwUpperCaseBln = confirm("Click OK to confirm that you would like your password to contain upper case letters.");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function () {
  console.log("ready to generatePassword!")
  return "test-pw";
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
