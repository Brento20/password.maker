// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//pseudo code
//create and array that include the data sets "upper/lower/special"
//create random value generator that has a var that a user can input password length into
//create a an error for "<8" and ">128"
// make boolean statements for "use upper/lower/special characters:"



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
