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



}







/*   novalidate */

/*   const dob = document.getElementById("dob");

  dob.onblur = function () {
    if(new Date(dob.value).getTime() > new Date().getTime()) {
      console.log("No paso")
    } else {
      console.log("Paso")
    }
  } */

