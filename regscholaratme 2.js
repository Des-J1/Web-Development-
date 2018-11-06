var btn = document.querySelector("#btn")

btn.onclick = function(){
  var name = document.querySelector("#name").value
  var address = document.querySelector("#address").value
  var email = document.querySelector("#email").value
  var phone = document.querySelector("#phone").value
  var gender = document.querySelector("#gender").value
  var interests = document.querySelector("#interests").value
  var bank = document.querySelector("#bank").value
  var role = document.querySelector("#role").value
  var result = document.querySelector("#result")

result.innerHTML = "Thanks for registering " + name + "<br>" +  "Here is your information: <br>" +
address + "<br>" + email + "<br>" + "Your interest is " + interests + " Gender is " + gender + " and your phone number is " + phone + " Your bank partner is " + bank + " and you are " + role

}
