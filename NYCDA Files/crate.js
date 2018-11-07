var buyBtn = document.querySelector("#buy")

buyBtn.onclick = function(){
  var item = document.querySelector("#robohand").innerHTML
  var price = document.querySelector("#robohandprice").innerHTML
  var priceValue = parseFloat(price)
  var qty = document.querySelector("#qty").value
  var cost = parseInt(qty) * priceValue

  var result = document.querySelector("#result")
  result.innerHTML = "Here is your C Rate: <br>" + qty + " " + item + " for " + cost.toFixed(2)
}
