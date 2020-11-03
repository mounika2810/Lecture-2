//It is an example of TIght-Coupling as if we change variable id's in HTML must be change in.js file also.
//low cohesion - one function does 3 fairly unreleated things


var student = {
  name : "",
  type : "student"
};

document.addEventListener('DOMContentLoaded', ContentLoaded);

function ContentLoaded(event){
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput(){
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for(var i=0;i<student.name.length;i++){
    totalNameValue += student.name.charCodeAt(i);
  }

  //Insert result into Page
  var output = "Total Numeric Value of Person's Name Is : " + totalNameValue;
  document.getElementById('output').innerText = output;
}
