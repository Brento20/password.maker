// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
  
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

function generatePassword () {
  var passwordLength = window.prompt("How long do you want your password to be? /n Password must be between 8 - 128 characters.");
}

generatePassword();

// //pseudo code


// //create and array that include the data sets "upper/lower/special"===== May learn a better way to write an array??/

// var upperCaseSet = "'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'";
// var lowerCaseSet = "'a' 'b' 'c' 'd' 'e' 'f' 'g' 'h' 'i' 'j' 'k' 'm' 'n' 'o' 'p' 'q' 'r' 's' 't' 'u' 'v' 'w' 'x' 'y' 'z'";
// var specialCaseSet = "'~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '`', '-', '+', '{', '}', '|', '[', ']', '\', ':', '<', '>', '?', ',' ,'. ',' /' ";

// //create random value generator that has a var that a user can input password length into
// //create a an error for "<8" and ">128"

// if (passwordLength <8 ||
//   passwordLength <128 || isNaN) {
//     alert ("The response you entered is invalid," /n + "please enter a number between 8 and 128.")
//   }

// // make boolean statements for "use upper/lower/special characters:"

// confirm("Would you like to include Uppercase characters?")

// confirm("Would you like to include Lower characters?")

// confirm("Would you like to include Special characters?")



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
