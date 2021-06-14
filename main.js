record_array = [];

function submit() {

var student_1 = document.getElementById("name_1").value ;

var student_2 = document.getElementById("name_2").value ;

var student_3 = document.getElementById("name_3").value ;

var student_4 = document.getElementById("name_4").value ;

record_array.push(student_1);
record_array.push(student_2);
record_array.push(student_3);
record_array.push(student_4);

console.log(record_array);

document.getElementById("display_name").innerHTML = record_array;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";

};

function sorting() {

record_array.sort();

console.log("record_array");  

document.getElementById("display_name").innerHTML = record_array;

};