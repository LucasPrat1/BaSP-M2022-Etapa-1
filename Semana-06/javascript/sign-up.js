window.onload = function () {

  var inputFName = document.getElementById("fname");
  var inputLName = document.getElementById("lname");
  var inputDni = document.getElementById("dni");
  var inputDateOfBirth = document.getElementById("dateOfBirth");
  var inputPhone = document.getElementById("phone");
  var inputAdress = document.getElementById("adress");
  var inputCity = document.getElementById("city");
  var inputPostCode = document.getElementById("postCode");
  var inputEmail = document.getElementById("email");
  var inputPassword = document.getElementById("password");
  var inputRepeatPassword = document.getElementById("repeatPassword");
  var inputBSignUp = document.getElementById("b-signup");
  var msgContainer = document.getElementsByClassName("msg-container");


  inputFName.addEventListener("blur", FNameBlur);
  inputFName.addEventListener("focus", FNameFocus);
  inputLName.addEventListener("blur", LNameBlur);
  inputLName.addEventListener("focus", LNameFocus);
  inputDni.addEventListener("blur", DniBlur);
  inputDni.addEventListener("focus", DniFocus);
  inputDateOfBirth.addEventListener("blur", DateOfBirthBlur);
  inputDateOfBirth.addEventListener("focus", DateOfBirthFocus);
  inputPhone.addEventListener("blur", PhoneBlur);
  inputPhone.addEventListener("focus", PhoneFocus);
  inputAdress.addEventListener("blur", AdressBlur);
  inputAdress.addEventListener("focus", AdressFocus);
  inputCity.addEventListener("blur", CityBlur);
  inputCity.addEventListener("focus", CityFocus);
  inputPostCode.addEventListener("blur", PostCodeBlur);
  inputPostCode.addEventListener("focus", PostCodeFocus);
  inputEmail.addEventListener("blur", EmailBlur);
  inputEmail.addEventListener("focus", EmailFocus);
  inputPassword.addEventListener("blur", PasswordBlur);
  inputPassword.addEventListener("focus", PasswordFocus);
  inputRepeatPassword.addEventListener("blur", RepeatPasswordBlur);
  inputRepeatPassword.addEventListener("focus", RepeatPasswordFocus);
  inputBSignUp.addEventListener("click", BSignUpBlur);

  // ------------ VALIDATE NAME ---------------
  function validateName(name) {
    var flag = true;
    var i = 0;

    if (name.length > 3) {
      while (i < name.length && flag === true) {
        if (!isNaN(name[i])) {
          flag = false;
        }
        i++;
      }
    } else {
      flag = false;
    }
    return flag;
  }

  // ------------ FIRST NAME ---------------
  function FNameBlur() {
    if (!validateName(inputFName.value)) {
      msgContainer[0].classList.remove('hide');
      msgContainer[0].classList.add('error');
      msgContainer[0].innerHTML = "Name incorrect";
      inputFName.style.border = "3px solid red";
    } else {
      msgContainer[0].classList.remove('error');
      inputFName.style.border = "3px solid green";
    }
  }

  function FNameFocus() {
    msgContainer[0].classList.add('hide');
    inputFName.style.border = "3px solid grey";
  }

  // ------------ LAST NAME ---------------
  function LNameBlur() {
    if (!validateName(inputLName.value)) {
      msgContainer[1].classList.remove('hide');
      msgContainer[1].classList.add('error');
      msgContainer[1].innerHTML = "Name incorrect";
      inputLName.style.border = "3px solid red";
    } else {
      msgContainer[1].classList.remove('error');
      inputLName.style.border = "3px solid green";
    }
  }

  function LNameFocus() {
    msgContainer[1].classList.add('hide');
    inputLName.style.border = "3px solid grey";
  }

  // ------------ DNI ---------------
  function validateDni() {
    var flag = true;
    var i = 0

    if (inputDni.value.length > 7) {
      while (i < inputDni.value.length && flag === true) {
        if (isNaN(inputDni.value[i])) {
          flag = false;
        }
        i++;
      }
    } else {
      flag = false;
    }
    return flag;
  }

  function DniBlur() {
    if (!validateDni()) {
      msgContainer[2].classList.remove('hide');
      msgContainer[2].classList.add('error');
      msgContainer[2].innerHTML = "DNI incorrect";
      inputDni.style.border = "3px solid red";
    } else {
      msgContainer[2].classList.remove('error');
      inputDni.style.border = "3px solid green";
    }
  }

  function DniFocus() {
    msgContainer[2].classList.add('hide');
    inputDni.style.border = "3px solid grey";
  }

  // ------------ dateOfBirth ---------------
  function validateDoF() {
    if (new Date(inputDateOfBirth.value).getTime() > new Date().getTime()) {
      return false;
    } else {
      return true;
    }
  }

  function DateOfBirthBlur() {
    if (!validateDoF()) {
      msgContainer[3].classList.remove('hide');
      msgContainer[3].classList.add('error');
      msgContainer[3].innerHTML = "Date of birth incorrect";
      inputDateOfBirth.style.border = "3px solid red";
    } else {
      msgContainer[3].classList.remove('error');
      inputDateOfBirth.style.border = "3px solid green";
    }
  }

  function DateOfBirthFocus() {
    msgContainer[3].classList.add('hide');
    inputDateOfBirth.style.border = "3px solid grey";
  }

  // ------------ Phone ---------------
  function validatePhone() {
    var flag = true;
    var i = 0

    if (inputPhone.value.length === 10) {
      while (i < inputPhone.value.length && flag === true) {
        if (isNaN(inputPhone.value[i])) {
          flag = false;
        }
        i++;
      }
    } else {
      flag = false;
    }
    return flag;
  }

  function PhoneBlur() {
    if (!validatePhone()) {
      msgContainer[4].classList.remove('hide');
      msgContainer[4].classList.add('error');
      msgContainer[4].innerHTML = "Phone number incorrect";
      inputPhone.style.border = "3px solid red";
    } else {
      msgContainer[4].classList.remove('error');
      inputPhone.style.border = "3px solid green";
    }
  }

  function PhoneFocus() {
    msgContainer[4].classList.add('hide');
    inputPhone.style.border = "3px solid grey";
  }

  // ------------ Adress ---------------
  function validateAdress() {
    indexSpace = inputAdress.value.lastIndexOf(" ");
    if (inputAdress.value.length > 4) {
      if (indexSpace > 0) {
        if (!isNaN(inputAdress.value.slice(indexSpace))) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  function AdressBlur() {
    if (!validateAdress()) {
      msgContainer[5].classList.remove('hide');
      msgContainer[5].classList.add('error');
      msgContainer[5].innerHTML = "Adress incorrect";
      inputAdress.style.border = "3px solid red";
    } else {
      msgContainer[5].classList.remove('error');
      inputAdress.style.border = "3px solid green";
    }
  }

  function AdressFocus() {
    msgContainer[5].classList.add('hide');
    inputAdress.style.border = "3px solid grey";
  }

  // ------------  CITY ---------------
  function validateCity() {
    if (inputCity.value.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  function CityBlur() {
    if (!validateCity(inputCity.value)) {
      msgContainer[6].classList.remove('hide');
      msgContainer[6].classList.add('error');
      msgContainer[6].innerHTML = "City incorrect";
      inputCity.style.border = "3px solid red";
    } else {
      msgContainer[6].classList.remove('error');
      inputCity.style.border = "3px solid green";
    }
  }

  function CityFocus() {
    msgContainer[6].classList.add('hide');
    inputCity.style.border = "3px solid grey";
  }

  // ------------ Post Code ---------------
  function validatePostCode() {
    var flag = true;
    var i = 0

    if (inputPostCode.value.length >= 4 && inputPostCode.value.length <= 5) {
      while (i < inputPostCode.value.length && flag === true) {
        if (isNaN(inputPostCode.value[i])) {
          flag = false;
        }
        i++;
      }
    } else {
      flag = false;
    }
    return flag;
  }

  function PostCodeBlur() {
    if (!validatePostCode()) {
      msgContainer[7].classList.remove('hide');
      msgContainer[7].classList.add('error');
      msgContainer[7].innerHTML = "Post code incorrect";
      inputPostCode.style.border = "3px solid red";
    } else {
      msgContainer[7].classList.remove('error');
      inputPostCode.style.border = "3px solid green";
    }
  }

  function PostCodeFocus() {
    msgContainer[7].classList.add('hide');
    inputPostCode.style.border = "3px solid grey";
  }

  // ------------ Email ---------------

  function validateEmail() {
    var mailformat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/;
    if (mailformat.test(inputEmail.value)) {
      return true;
    } else {
      return false;
    }
  }

  function EmailBlur() {
    if (!validateEmail()) {
      msgContainer[8].classList.remove('hide');
      msgContainer[8].classList.add('error');
      msgContainer[8].innerHTML = "Email incorrect";
      inputEmail.style.border = "3px solid red";
    } else {
      msgContainer[8].classList.remove('error');
      inputEmail.style.border = "3px solid green";
    }
  }

  function EmailFocus() {
    msgContainer[8].classList.add('hide');
    inputEmail.style.border = "3px solid grey";
  }

  // ------------ Password ---------------
  function validatePassword(pass) {
    var letterSum = 0;
    var numberSum = 0;

    if (pass.length < 7) {
      return false;
    } else {
      for (i = 0; i < pass.length; i++) {
        if (isNaN(pass[i])) {
          letterSum += 1;
        } else {
          numberSum += 1;
        }
      }
    }
    return (letterSum !== 0 && numberSum !== 0)
  }

  function PasswordBlur() {
    if (!validatePassword(inputPassword.value)) {
      msgContainer[9].classList.remove('hide');
      msgContainer[9].classList.add('error');
      msgContainer[9].innerHTML = "Password incorrect";
      inputPassword.style.border = "3px solid red";
    } else {
      msgContainer[9].classList.remove('error');
      inputPassword.style.border = "3px solid green";
    }
  }

  function PasswordFocus() {
    msgContainer[9].classList.add('hide');
    inputPassword.style.border = "3px solid grey";
  }

  function RepeatPasswordBlur() {
    if (!validatePassword(inputRepeatPassword.value) || inputRepeatPassword.value !== inputPassword.value) {
      msgContainer[10].classList.remove('hide');
      msgContainer[10].classList.add('error');
      msgContainer[10].innerHTML = "Password incorrect";
      inputRepeatPassword.style.border = "3px solid red";
    } else {
      msgContainer[10].classList.remove('error');
      inputRepeatPassword.style.border = "3px solid green";
    }
  }

  function RepeatPasswordFocus() {
    msgContainer[10].classList.add('hide');
    inputRepeatPassword.style.border = "3px solid grey";
  }






}







/*   ---- cartel modal w3 css modal*/


