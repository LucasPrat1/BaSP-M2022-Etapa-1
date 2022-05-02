window.onload = function () {

  var email = document.getElementById("email");
  var emailDiv = document.getElementById("emailDiv");
  var password = document.getElementById("pass")
  var passDiv = document.getElementById("passDiv");
  var signIn = document.getElementById("b-signin");
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var modalText = document.getElementById("modalText");

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

  function signInClick(e) {
    e.preventDefault()
    var url = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${password.value}`
    console.log(url)
    if (!mailIsValid) {
      modal.classList.remove('hide')
      modalText.innerHTML = email.value + " Email incorrect";
    } else if (!passIsValid) {
      modal.classList.remove('hide')
      modalText.innerHTML = password.value + " Password incorrect";
    } else if (mailIsValid && passIsValid) {
      fetch(url)
        .then(function (response) {
          return response.json()
        })
        .then((response) => {
          modal.classList.remove('hide')
          modalText.innerHTML = `<h2>MESSAGE:</h2><li>${response.msg}</li>`;
        })
        .catch((responseError) => {
          modal.classList.remove('hide')
          modalText.innerHTML = `<h2>FATAL ERROR:</h2><li>${responseError}</li>`;
        })
    }
  }

  email.addEventListener("focus", emailFocus);
  email.addEventListener("blur", emailBlur);
  password.addEventListener("focus", passwordFocus);
  password.addEventListener("blur", passwordBlur);
  signIn.addEventListener("click", signInClick);

  // ----- close modal -----
  span.onclick = function () {
    modal.classList.add('hide');
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.add('hide');
    }
  }
}
