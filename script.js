var generateBtn = document.querySelector("#generate");

// Add length console logs (or functions ?) for message generators. One for length of the password-
// (8 characters and no more than 128 characters), One for choosing between lowercase,
// uppercase, numeric,  and/or special characters, one that validates the criteria, and 
// one that generates the password prompts then options. 

function generatePassword() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()_+~";
  var numbers = "0123456789"
  var count = parseInt(prompt('Please choose a password of at least 8 characters and up to 128 characters'));
  if (count < 8 || count > 128 || isNaN(count)) {
    alert('Please choose a value between 8 characters and 128 characters to move on');
    return generatePassword()
  }
  var hasLetters = confirm('Do you want to use lowercase Characters?');
  var hasUpperLetters = confirm('Do you want to use uppercase Characters?');
  var hasSpecialLetters = confirm('Do you want to use special Characters?');// fix grammar here ***
  var hasNumbers = confirm('Do you want to use Numbers?');
  var possibleCharacters = '';


  if (!hasLetters && !hasUpperLetters && !hasSpecialLetters && !hasNumbers) {
    alert('Please choose confirm for one or more of the criteria options');
    return generatePassword()
  }

  if (hasLetters) {

    possibleCharacters += letters;

  }

  if (hasUpperLetters) {

    possibleCharacters += uppercase;
  }

  if (hasSpecialLetters) {

    possibleCharacters += special
  }

  if (hasNumbers) {

    possibleCharacters += numbers
  }

  var genPassword = "";


  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * possibleCharacters.length);
    genPassword += possibleCharacters[random];
  }

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var genPassword = generatePassword();
  var genPasswordText = document.querySelector("#genPassword");

  genPasswordText.value = genPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
