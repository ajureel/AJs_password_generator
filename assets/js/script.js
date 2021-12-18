//*** GLOBAL STUFF ***/
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// create character set arrays for use in multiple functions
var specialCharactersAry = ["~","!","@","#","$","%","^","&","(",")","_","-","+","=","{","[","}","]","|","<",">","?","/"];
var pwNumbersAry = ["0","1","2","3","4","5","6","7","8","9"];
var alphaLowerAry = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaUpperAry = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//*** FUNCTIONS */
// Write password to the #password input
function passwordCriteria() {
  //clear pw box, this helps if the user already generated a password and the new criteria fails validation
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordText.placeholder="Your Secure Password";

  //create a flag to check data validation
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
  // check length is within range
  if (pwLength < 8 || pwLength > 128) {validCriteriaBln = false};

  //check that at least one character set is selected
  if (pwSpecialCharactersBln == false && pwNumbersBln == false && pwLowerCaseBln == false && pwUpperCaseBln == false) 
    {validCriteriaBln = false};
  console.log(validCriteriaBln);    

  //Check if that we are valid and alert the user if we are invalid
  if (validCriteriaBln == false){
    //invalid criteria
    console.log ("gotta return");
    alert("You must enter a valid length and contain at least one type of character.  Please try again.");
    return;
  }; 

  // We have good criteria, good to generate the password
  console.log("valid input; we are good to go");

  // some debugging code to write the input to the console
  // varToConsole(Object.keys({pwLength})[0], pwLength);
  // varToConsole(Object.keys({pwSpecialCharactersBln})[0], pwSpecialCharactersBln);

  // Create and build the character set which will be used to build the pw
  var charSetAry = [];
  // if the user asked for set to be included, add it to our character set
  if (pwSpecialCharactersBln) {charSetAry = charSetAry.concat(specialCharactersAry)};
  if (pwNumbersBln) {charSetAry = charSetAry.concat(pwNumbersAry)};
  if (pwLowerCaseBln) {charSetAry = charSetAry.concat(alphaLowerAry)};
  if (pwUpperCaseBln) {charSetAry = charSetAry.concat(alphaUpperAry)};
  
  // Call the function to build the password
  var password = generatePassword(pwLength, charSetAry, pwSpecialCharactersBln, pwNumbersBln, pwLowerCaseBln, pwUpperCaseBln);
 
  //display the resulting password
  passwordText.value = password;

}

// function to generate the password
var generatePassword = function (myLength, mycharSetAry, mySpecialCharactersBln, myNumbersBln, myLowerCaseBln, myUpperCaseBln) {
  console.log("ready to generatePassword!")

  const arr = [mySpecialCharactersBln, myNumbersBln, myLowerCaseBln, myUpperCaseBln];
  const myCount = arr.filter(Boolean).length;   

  var myPassword = "";
  //get length of char set to set max random number
  var setLength = mycharSetAry.length;
  var myRandomNum = 0;
  myLength = myLength - myCount;
  
  //***create a pw less reserve digits to ensure each set is included */ 
  //create a loop for lenth
  for(let i=0; i<myLength; i++ ){
    // Returns a random integer from 0 to setLength:
    myRandomNum = Math.floor(Math.random() * setLength);
    //each interval add a new char to the password
    myPassword = myPassword + mycharSetAry[myRandomNum];  
  };

  // Ensure that each set is included at least once
  if (mySpecialCharactersBln){
    setLength = specialCharactersAry.length;
    myRandomNum = Math.floor(Math.random() * setLength);
    myPassword = myPassword + specialCharactersAry[myRandomNum]
  }
  
  if (myNumbersBln){
    setLength = pwNumbersAry.length;
    myRandomNum = Math.floor(Math.random() * setLength);
    myPassword = myPassword + pwNumbersAry[myRandomNum]
  }

  if (myLowerCaseBln){
    setLength = alphaLowerAry.length;
    myRandomNum = Math.floor(Math.random() * setLength);
    myPassword = myPassword + alphaLowerAry[myRandomNum]
  }

  if (myUpperCaseBln){
    setLength = alphaUpperAry.length;
    myRandomNum = Math.floor(Math.random() * setLength);
    myPassword = myPassword + alphaUpperAry[myRandomNum]
  }

  //return pw
  return myPassword;
};

// function for debugging
var varToConsole = function (myVar, myVal){
  console.log (myVar +": " + myVal);
};

//*** LISTENERS ***/ 
// Add event listener to generate button; this kicks off all the magic, starting with getting password criteria
generateBtn.addEventListener("click", passwordCriteria);
