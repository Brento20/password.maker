// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  function generatePassword () {
    passwordLength = prompt("How long do you want your password to be? Password must be between 8 - 128 characters.");
    var passwordLength = parseInt(passwordLength);
    }
    
    // generatePassword();
    //=============================
if (passwordLength <= 7) {
    alert("Password too short, please try again!");
    generatePassword();
}  else if (passwordLength >= 129) {
    alert("Password too long, please try again!");
    generatePassword();
}


var characterPool = [];
  
var hasUpper = confirm("Would you like to include Uppercase characters?");
if (hasUpper == true) {
    characterPool.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
}

var hasLower = confirm("Would you like to include Lowercase characters?");
if (hasLower == true) {
    characterPool.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
}


var hasSpecial = confirm("Would you like to include Special characters?");
if (hasSpecial == true) {
    characterPool.push('~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '`', '-', '+', '{', '}', '|', '[', ']');

}

var hasNumber = confirm("Would you like to include Numeric characters?");
if (hasNumber == true) {
    characterPool.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
}

for (var i = 0; i < passwordLength; i++) {
  characterPool[
      Math.floor(Math.random() * characterPool.length)];
  Password +=
     characterPool[
         Math.floor(Math.random() * characterPool.length)
     ];
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);