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






}
