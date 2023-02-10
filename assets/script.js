// Assignment code here

//Variable Declarations
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = " !#$%&'()*+,-./:;<=>?@[^_`{|}~";
var charNumber = 0; //Defines number of characters specified by user as 0 to allow user to select in the do {} while (charNummber between 8 and 128) below

console.log(charNumber); //Log number of characters selected by user

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write function to generate password
function generatePassword() {
  //Prompts user to answer how many characters between 8 and 128
  do {
    charNumber = prompt(
      "Please specify number of characters between 8 and 128."
    );
    if (charNumber === null) {
      return; //terminates function and returns to main page on 'cancel'
    }

    //requires a resubmit if the user input doesn't meet the specified criteria
    if (charNumber < 8) {
      alert("You must choose a number of characters greater than 8.");
    } else if (charNumber > 128) {
      alert("You mus choose a number of characters less than 129.");
    }
  } while (charNumber < 8 || charNumber > 128);

  console.log(charNumber); //Testing user input

  var charSet = ""; //Declare variable with empty string value to hold character set the password will generate from

  //Prompts user to confirm whether or not they want to use lowercase letters, uppercase letters, numbers, and special characters in the password

  // Answer stored in corresponding variables as boolean values
  var lowYN = confirm(
    "Use lowercase letters? \n Press confirm for yes and cancel for no"
  );
  var uppYN = confirm(
    "Use uppercase letters? \n Press confirm for yes and cancel for no"
  );
  var numYN = confirm(
    "Use numbers? \n Press confirm for yes and cancel for no"
  );
  var specYN = confirm(
    "Use special characters? \n Press confirm for yes and cancel for no"
  );

  //Use conditional statements to define what full character set the password generator will be pulling characters from
  if (lowYN == true) {
    charSet += lowercase;
  }
  if (uppYN == true) {
    charSet += uppercase;
  }
  if (numYN == true) {
    charSet += numbers;
  }
  if (specYN == true) {
    charSet += special;
  }
  console.log(charSet); //Logs full character set to be used when generating the password

  //Declare pw variable (currently formed password) as an empty string value to start
  var pw = "";

  //Declare addition as empty string array to hold the values that will be added to the password in each cycle of the for loop below
  var addition = [""];

  //Generates password using a for loop adding each loop's addition to the current combined password (pw string)
  for (i = 0; i < charNumber; i++) {
    addition[i] = charSet[Math.floor(Math.random() * charSet.length)];
    console.log(addition[i]);
    pw += addition[i];
  }
  console.log(pw); //logs pw
  return pw; //returns function output of pw
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
