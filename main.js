//Declaring the password fields being validated
var input = document.getElementById("Rpassword");
var input1 = document.getElementById("cPassword");

//Declaring the values for the first password field validation
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special=document.getElementById("special");

//Declaring the values for second password field validation
var letter1 = document.getElementById("letter1");
var capital1 = document.getElementById("capital1");
var number1 = document.getElementById("number1");
var special1=document.getElementById("special1");
var length1 = document.getElementById("length1");

//Declaring the matching values
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// // When the user clicks on the 1st password field, show the message box
// input.onfocus = () =>
// {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// input.onblur = () =>
// {
//   document.getElementById("message").style.display = "none";
// }

// When the user starts to type something inside the 1st password field
input.onkeyup = () =>
{
  // Validate lowercase letters
  if(input.value.match(lowerCaseLetters)) 
  {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } 
  else 
  {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  if(input.value.match(upperCaseLetters)) 
  {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else 
  {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  if(input.value.match(numbers)) 
  {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else 
  {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(input.value.length >= 8) 
  {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  else 
  {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  //Validating special characters
  if(input.value.match(specialChars)) 
  {  
    special.classList.remove("invalid");
    special.classList.add("valid");
  } 
  else 
  {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
}

// When the user clicks on the 2nd password field, show the message box
input1.onfocus = () =>
{
  document.getElementById("message1").style.display = "block";
}

// When the user clicks outside of the 2nd password field, hide the message box
input1.onblur = () =>
{
  document.getElementById("message1").style.display = "none";
}

// When the user starts to type something inside the password field
input1.onkeyup = () => 
{
  // Validate lowercase letters
  if(input1.value.match(lowerCaseLetters)) 
  {  
    letter1.classList.remove("invalid");
    letter1.classList.add("valid");
  } 
  else 
  {
    letter1.classList.remove("valid");
    letter1.classList.add("invalid");
  }
  
  // Validate capital letters
  if(input1.value.match(upperCaseLetters)) 
  {  
    capital1.classList.remove("invalid");
    capital1.classList.add("valid");
  } 
  else 
  {
    capital1.classList.remove("valid");
    capital1.classList.add("invalid");
  }

  // Validate numbers
  if(input1.value.match(numbers)) 
  {  
    number1.classList.remove("invalid");
    number1.classList.add("valid");
  } 
  else 
  {
    number1.classList.remove("valid");
    number1.classList.add("invalid");
  }
  //Validating special characters
  if(input1.value.match(specialChars)) 
  {  
    special1.classList.remove("invalid");
    special1.classList.add("valid");
  } 
  else 
  {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
  // Validate length
  if(input1.value.length >= 8) 
  {
    length1.classList.remove("invalid");
    length1.classList.add("valid");
  } 
  else 
  {
    length1.classList.remove("valid");
    length1.classList.add("invalid");
  }
}

// const register=()=>
// {
//   if(input.value==input1.value)
//   {
//     alert("The passwords match");
//   }
//   else
//   {
//     alert("The passwords do not match");
//     document.getElementById("Rpassword").focus();
//   }
// }