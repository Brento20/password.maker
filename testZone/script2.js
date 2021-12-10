function generatePassword () {
    passwordLength = prompt("How long do you want your password to be? Password must be between 8 - 128 characters.");
    var lengthConfirm = parseInt(passwordLength);
    }
    generatePassword(); // Calls the first function from the button click and sets the password length variable

function passwordErrorChecker() { // This function is to display errors to the customer if they enter invalid details
    if (passwordLength <= 7) {
        alert("Password too short, please try again!");
        generatePassword();
       }  else if (passwordLength >= 127) {
           alert("Password too long, please try again!");
           generatePassword();
       }
        // } else if (passwordLength = "" = isNaN) {
        //     alert("Password length contains invalid characters, please try again using only numbers!");
        //     generatePassword();
        // }
}

    passwordErrorChecker();

//========== Character Pool ===========

var characterPool = [];
var hasUpper = "'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'";
var hasLower = "'a' 'b' 'c' 'd' 'e' 'f' 'g' 'h' 'i' 'j' 'k' 'm' 'n' 'o' 'p' 'q' 'r' 's' 't' 'u' 'v' 'w' 'x' 'y' 'z'";
var hasSpecial = "'~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '`', '-', '+', '{', '}', '|', '[', ']', '\', ':', '<', '>', '?', ',' ,'. ',' /' ";
var hasNumber = "'1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ";

//========== Boolean variables to select characters ===========
  
var hasUpper = confirm("Would you like to include Uppercase characters?");
if (hasUpper == true) {
    for (var i = 0; i < hasUpper.length; i++) {
        characterPool.push(hasUpper[i]);
    }
}

var hasLower = confirm("Would you like to include Lowercase characters?");
if (hasLower == true) {
    for (var i = 0; i < hasLower.length; i++) {
        characterPool.push(hasLower[i]);
    }
}

var hasSpecial = confirm("Would you like to include Special characters?");
if (hasSpecial == true) {
    for (var i = 0; i < hasSpecial.length; i++) {
        characterPool.push(hasSpecial[i]);
    }
}

var hasNumber = confirm("Would you like to include Numeric characters?");
if (hasNumber == true) {
    for (var i = 0; i < hasNumber.length; i++) {
        characterPool.push(hasNumber[i]);
    }
}

//========== Consol log to check details and help me set up the next function ===========

    console.log(passwordLength)
    console.log(hasUpper)
    console.log(hasLower)
    console.log(hasSpecial)
    console.log(hasNumber)

// Next steps

// merge arrays for character sets that have a true boolean and use a for loop 
