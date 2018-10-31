var btn = document.querySelector("#login")
console.log("test")
btn.onclick = function(){
var username = document.querySelector("#username").value
var pass = document.querySelector("#pass").value
var result = document.querySelector("#result")
var container = document.querySelector("#container")
var heading = document.querySelector("#heading")

console.log(pass)

if(pass == "softball"){
  result.innerHTML = "You have successfully logged in"

  result.style.color = "green"

  // window.location.href="https://www.google.com"

  container.style.display = "none"

  heading.innerHTML = "Welcome to the Home Page"
}else{
  result.innerHTML = "username/password is incorrect"

  result.style.color = "red"
}
}
