function validateInput(){
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  var century = Number(document.getElementById("century").value);
  var genderSelect = document.getElementsByName("gender");



  function genderPicker() {
    for (var gender of genderSelect) {
      if (gender.checked){
        return gender.value;
      }
    }
  }
  var myGender = genderPicker();

  function ValidateDay () {
    if (day < 0 || day > 31) {
      alert("Date is not valid")
      return false;
    } else {
      return true;
    }
  }
  function ValidateMonth () {
    if (month < 0 || month > 12) {
      alert ("Month is not valid");
      return false;
    } else {
      return true;
    }
  }

  var checkDateValid = ValidateDay();
  var checkMonthValid = ValidateMonth();

  var dayOfWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7);


  var akanName;
  if (myGender === "male") {
    switch(dayOfWeek) {
      case 0:
      akanName = "Kwasi";
      alert("Your Akan name is"+akanName + "born on Sunday");
      break;
      case 1:
      akanName = "Kwadwo";
      alert("Your Akan name is"+akanName + "born on Monday");
      break;
      case 2:
      akanName = "Kwabena";
      alert("Your Akan name is"+akanName + "born on Tuesday");
      break;
      case 3:
      akanName = "Kwaku";
      alert("Your Akan name is"+akanName + "born on Wednesday");
      break;
      case 4:
      akanName = "Yaw";
      alert("Your Akan name is"+akanName + "born on Thursday");
      break;
      case 5:
      akanName = "Kofi";
      alert("Your Akan name is"+akanName + "born on Friday");
      break;
      case 6:
      akanName = "Kwame";
      alert("Your Akan name is"+akanName + "born on Saturday");
      break;
      default:
      alert("");
    }
  } else if (myGender = "female") {
    switch(dayOfWeek) {
      case 0:
      akanName = "Akosua";
      alert("Your Akan name is"+akanName + "born on Sunday");
      break;
      case 1:
      akanName = "Adwoa";
      alert("Your Akan name is"+akanName + "born on Monday.");
      break;
      case 2:
      akanName = "Abenaa";
      alert("Your Akan name is"+akanName + "born on Tuesday");
      break;
      case 3:
      akanName = "Akua";
      alert("Your Akan name is"+akanName + "born on Wednesday");
      break;
      case 4:
      akanName = "Yaa";
      alert("Your Akan name is"+akanName + "born on Thursday");
      break;
      case 5:
      akanName = "Afua";
      alert("Your Akan name is"+akanName + "born on Friday");
      break;
      case 6:
      akanName = "Ama";
      alert("Your Akan name is"+akanName + "born on Saturday");
      break;
      default:
      alert("");
    }
  } else {
    alert("");
  }
}
