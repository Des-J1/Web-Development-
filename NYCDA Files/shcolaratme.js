var btn =
document.querySelector("#login")

btn.onclick = function(){
var username = document.querySelector("#username").value
var pass = document.querySelector("#pass").value
var result = document.querySelector("#result")
var container = document.querySelector("#container")
var heading =
document.querySelector("#heading")

if(pass == "brooklyn"){
  result.innerHTML = "You have successfully logged in "

  result.style.color = "green"

    window.location.href="sctmeprofile.html"

  container.style.display = "none"

  heading.innerHTML = "Welcome to the Home Page"
}else{
  result.innerHTML = "username/password is incorrect"

result.style.color = "red"
}
}
