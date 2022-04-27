window.onload = function () {

  var email = document.getElementById("email");
  var emailDiv = document.getElementById("emailDiv");
  var password = document.getElementById("pass")
  var passDiv = document.getElementById("passDiv");
  var signIn = document.getElementById("b-signin");

  var mailformat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/
  var mailIsValid = false;
  var passIsValid = false;

  function emailFocus() {
    email.style.border = "3px solid grey";
    emailDiv.classList.add('hide');
  }

  function emailBlur() {
    mailIsValid = mailformat.test(email.value);
    if (!mailIsValid) {
      emailDiv.innerHTML = "The email is invalid";
      emailDiv.classList.add('error');
      email.style.border = "3px solid red";
      emailDiv.classList.remove('hide');
    } else {
      email.style.border = "3px solid green";
    }
  }

  function passwordFocus() {
    password.style.border = "3px solid grey";
    passDiv.classList.add('hide');
  }

  function passwordBlur() {
    passIsValid = validatePassword()
    if (!passIsValid) {
      passDiv.innerHTML = "The Password is invalid";
      passDiv.classList.add('error');
      password.style.border = "3px solid red";
      passDiv.classList.remove('hide')
    } else {
      password.style.border = "3px solid green";
    }
  }

  function validatePassword() {
    var letterSum = 0;
    var numberSum = 0;

    if (password.value.length < 7) {
      return false;
    } else {
      for (i = 0; i < password.value.length; i++) {
        if (isNaN(password.value[i])) {
          letterSum += 1;
        } else {
          numberSum += 1;
        }
      }
    }
    return (letterSum !== 0 && numberSum !== 0)
  }

  function signInClick() {
    if (!mailIsValid) {
      alert(email.value + " Email incorrect");
    } else if (!passIsValid) {
      alert(password.value + " Password incorrect");
    } else if (mailIsValid && passIsValid) {
      alert("Successfull login \nEmail: " + email.value + "\nPassword: " + password.value);
    }
  }
  
  email.addEventListener("focus", emailFocus);
  email.addEventListener("blur", emailBlur);
  password.addEventListener("focus", passwordFocus);
  password.addEventListener("blur", passwordBlur);
  signIn.addEventListener("click", signInClick);
}
