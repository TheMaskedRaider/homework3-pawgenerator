// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 console.log(password.length);
 alert(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Generate password Function
function generatePassword(){
  //decleration of important variables
  var gendPassword;
  var validLength = false;
  var validSelection = false;
  var userConfirm;
  var lcTrue = false;
  var ucTrue = false;
  var nmTrue = false;
  var scTrue = false;
  var pwCharacters ='';
  const lowCase = 'abcdefghijklmnopqrstuvwxyz';
  const upCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numChars = '0123456789';
  const spChars ='!@#$%^&*-+=';


//Requests the user to input a length between 8 and 128 characters
//if null or not within bounds, exit function via gate lock.
 var usrLength = prompt("Please choose a length between 8 and 128 characters", "")
 if (usrLength >= 8 && usrLength <= 128){
   validLength = true;
alert("this is a valid character length!");
 }
 else {
 alert("That is not a valid character length!");
 validLength = false;
 //console.log(validLength);
 gendPassword = "Your Secure Password"
 }
//If the User has inputed a valid length, query user for password character components
if (validLength == true){
  alert("Time for confirmations!");
 // console.log(validLength);
  userConfirm = confirm("Use lower case letters?");
  if(userConfirm == true)
  {
    lcTrue = true;
    pwCharacters += lowCase;
   // console.log(pwCharacters);
  }
  else{
    lcTrue = false;
  }
  userConfirm = confirm("Use upper case letters?");
  if(userConfirm == true)
  {
    ucTrue = true;
    pwCharacters += upCase;
   // console.log(pwCharacters);
  }
  else{
    ucTrue = false;
   // console.log(pwCharacters);
  }
  userConfirm = confirm("Use numbers?");
  if(userConfirm == true)
  {
    nmTrue = true;
    pwCharacters+= numChars;
   // console.log(pwCharacters);
  }
  else{
    nmTrue = false;
   // console.log(pwCharacters);
  }
  userConfirm = confirm("Use special characters?");
  if(userConfirm == true)
  {
    scTrue = true;
    pwCharacters+= spChars;
   // console.log(pwCharacters);
  }
  else{
   scTrue = false;
   // console.log(pwCharacters);
  }
//if no confirms return as true exit the function. if any return as true flip gate switch to generate password.
  if( lcTrue == false && ucTrue == false && nmTrue == false && scTrue == false){
alert("You haven't selected any characters to use. Start over!")
gendPassword = "Your Secure Password"
  }
  else{
    alert("characters selected!");
    validSelection = true;
   // console.log(pwCharacters)
  }
}
//If both length and specification conditions have been met, generate password based on user input
if( validLength == true && validSelection == true){
  var rngPW = '';
  console.log(pwCharacters.length)
  for( var i = 0; i < usrLength; i++ ){
    rngPW += pwCharacters.charAt(Math.floor(Math.random() * pwCharacters.length));
  }
  console.log(usrLength)
  console.log(rngPW.length);
  gendPassword = rngPW;
}

return gendPassword;

}