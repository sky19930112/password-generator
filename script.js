// Assignment code here



var passwordEl = document.getElementById("password");

/* Function to generate combination of password */

function password(){
    var string = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i<= 8; i++) {
        var char = Math.floor(Math.random()
                    * characters.length + 1);
          
        string += characters.charAt(char)
    }
      
    return string;
}

function result() {
    passwordEl.innerHTML = password();
}

/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/