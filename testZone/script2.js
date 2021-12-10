function generatePassword () {
    passwordLength = prompt("How long do you want your password to be? /n Password must be between 8 - 128 characters.");
    var lengthConfirm = parseInt(passwordLength);
    }
  

// function setRequirements () {
//    var hasUpper = confirm("Would you like to include Uppercase characters? For NO please select CANCEL.")
//    var hasLower = confirm("Would you like to include Lowercase characters For NO please select CANCEL.?")
//    var hasSpecial = confirm("Would you like to include Special characters? For NO please select CANCEL.")
//    var hasNumber = confirm("Would you like to include Numbers? For NO please select CANCEL.")
// }
var characterPool = [];
var hasUpper = "'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'";
  
var hasUpper = confirm("Would you like to include Uppercase characters? For NO please select CANCEL.");
if (hasUpper == true) {
    for (var i = 0; i < hasUpper.length; i++) {
        console.log("yes");
    }
}


generatePassword();


console.log(passwordLength);

  
setRequirements ();

console.log(setRequirements);
console.log(hasUpper);

// if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
//     alert ("Choice is invalid, please select a password length between 8 - 128.");