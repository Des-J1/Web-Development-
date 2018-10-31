var btn = document.querySelector("#btn")

btn.onclick = function(){
  var name = document.querySelector("#name").value
  var address = document.querySelector("#address").value
  var email = document.querySelector("#email").value
  var phone = document.querySelector("#phone").value
  var interests = document.querySelector("#interests").value
  var male = document.querySelector("#male")
  var female = document.querySelector("#female")
  var result = document.querySelector("#result")


var gender

if(male.checked){
  gender = "male"
}
if(female.checked){
  gender = "female"
}
result.innerHTML = "Thanks for registering " + name + "<br>" +  "Here is your information: <br>" +
address + "<br>" + email + "<br>" + "Your interest is " + interests + " Gender is " + gender + " and you phone number is " + phone

}
