//Declaring the fields
var input = document.getElementById("Rpassword");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
input.onfocus = () =>
{
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
input.onblur = () =>
{
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
input.onkeyup = () =>
{
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(input.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(input.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(input.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(input.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//Declaring the inputs for second password field validation
var input1 = document.getElementById("cPassword");
var letter1 = document.getElementById("letter1");
var capital1 = document.getElementById("capital1");
var number1 = document.getElementById("number1");
var length1 = document.getElementById("length1");

// When the user clicks on the password field, show the message box
input1.onfocus = () =>
{
  document.getElementById("message1").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
input1.onblur = () =>
{
  document.getElementById("message1").style.display = "none";
}

// When the user starts to type something inside the password field
input1.onkeyup = () => 
{
  // Validate lowercase letters
  var lowerCaseLetters1 = /[a-z]/g;
  if(input1.value.match(lowerCaseLetters1)) {  
    letter1.classList.remove("invalid");
    letter1.classList.add("valid");
  } 
  else 
  {
    letter1.classList.remove("valid");
    letter1.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters1 = /[A-Z]/g;
  if(input1.value.match(upperCaseLetters1)) 
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
  var numbers1 = /[0-9]/g;
  if(input1.value.match(numbers1)) 
  {  
    number1.classList.remove("invalid");
    number1.classList.add("valid");
  } 
  else 
  {
    number1.classList.remove("valid");
    number1.classList.add("invalid");
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

const loginText = document.querySelector(".title-text .login");
      const loginForm = document.getElementById("login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>
      {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });