let Answer1= document.getElementById("Answear1");
let Answer2= document.getElementById("Answear2");
let Answer3= document.getElementById("Answear3");
let Answer4= document.getElementById("Answear4");
let Answer5= document.getElementById("Answear5");
let button = document.getElementById("btn");
let result = document.getElementById("Result");

button.addEventListener("click", function(){
  let A1 = Answer1.value;
  let A2 = Answer2.value;
  let A3 = Answer3.value;
  let A4 = Answer4.value;
  let A5 = Answer5.value;
  if (A1 === "" || A2 === "" || A3 === "" || A4 === "" || A5 === ""){
  result.textContent="Please Answer The Empty Question."
  return;
  }
  if (A1 === "Neil Armstrong" && A2 === "Tibet" && A3 === "Isaac Newton" && A4 == 28 && A5 == 80){
    result.textContent ="Congrata, You Answered all The Questions Right!";
  }else{
    result.textContent = "Please Check Your Wrong Answers Or Wrong Written Answers.";
  }
});