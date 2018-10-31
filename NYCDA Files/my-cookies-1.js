var getName
var getGender

$("#btn").on('click', function(){
var name = $("#name").val()
Cookies.set("cookieName", name)
getName = Cookies.get("cookieName")
$("#getName").html(getName)

if($("#female").is(":checked")){
Cookies.set("cookieGender", "female")
getGender = Cookies.get("cookieGender")
document.body.style.backgroundColor = "pink"
console.log(getGender)
$("#message").html("we have womens shoes")
}else{
  Cookies.set("cookieGender", "male")
  getGender = Cookies.get("cookieGender")
  document.body.style.backgroundColor = "skyblue"
  console.log(getGender)
  $("#message").html("we have mens shoes")
}
getGender = Cookies.get("cookieGender")
console.log(getGender)
$("#message").html("we have mens shoes")
})


getName = Cookies.get("cookieName")
$("#getName").html(getName)

getGender = Cookies.get("cookieGender")
if(getGender == "female"){
  $("body").css("background-color", "pink")
  $("#message").html("we have womens shoes.")
}else{
  $("body").css("background-color", "skyblue")
  $("#message").html("we have mens shoes.")
}
