// Assignment code here
var length = prompt("enter desired password length: (between 8-128 characters)");

var upperCase = confirm("Do you want uppercase?");

var lowerCase = confirm("Do you want lowercase?");

var number = confirm("Do you want numbers?");

var symbol = confirm("Do you want symbols?");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

   var temppass = "";
   var arr = [];
  
  function arraySetUp(temp) {
    if(upperCase){
      temp.push(0);
    }
    if(lowerCase){
      temp.push(1);
    }
    if(number){
      temp.push(2);
    }
    if(symbol){
      temp.push(3);
    }
  }

  function getlowercase() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
  }
  function getuppercase() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
  }
  function getnumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
  }
  function getsymbol() {
    const symbol ="!@#$%^&*(){}[]=<>/,.~"
    return symbol[Math.floor(Math.random() * symbol.length)];
  }
  
  for (var i=0; i< length; i++) {
    // console.log(" inside loop " + i);
    var settingpass = getRandomInt(0,3);
    // console.log(settingpass + " this is settingpass " );
    if (0 === settingpass && upperCase){
      // console.log( " meow " );  
      temppass = getuppercase() + temppass;
    }else if( 1 === settingpass && lowerCase){
      temppass += getlowercase();

    }else if(2 === settingpass && number){
      temppass += getnumber();
    }else if (3 === settingpass && symbol){
      temppass += getsymbol();
    }else{
      arraySetUp(arr);
      var temp1 = arr[getRandomInt(0, arr.length)];
      if (0 === temp1)temppass += getuppercase();
      else if (1 === temp1)temppass += getlowercase();
      else if (2=== temp1)temppass += getnumber();
      else if (3=== temp1)temppass += getsymbol();
      
    }
      
  }
console.log(temppass + " this is pass " );
return temppass;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);