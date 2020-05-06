function validateInput(){
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  var century = Number(document.getElementById("century").value);
  var genderSelected = document.getElementsByName("gender");



  function genderPicker() {
    for (var gender of genderSelected) {
      if (gender.checked){
        return gender.value;
      }
    }
  }
  var genderValue = genderPicker();

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










}
