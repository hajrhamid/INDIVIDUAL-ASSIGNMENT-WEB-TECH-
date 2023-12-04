//NAME: SITI HAJAR 'AAINAA BINTI HAMID
//MATRIC NO: 2218648
//SECTION: 1

//validate form
function validateForm() {
  if (!document.getElementById('checkBox').checked) {
    alert('Please tick the confirmation box');
    return false;
  }
  alert('Thank you for your participation!');
  return true;
}

//add option
function addOption() {
  var select = document.getElementById('kulliyyah');//get the select element
  var newOption = document.createElement('option');//create new option element
  var optionText = prompt('Enter the new option:');
  
  if (optionText) {
    newOption.value = optionText; 
    newOption.text = optionText;
    select.add(newOption);//add the new option to the select element
  }
}