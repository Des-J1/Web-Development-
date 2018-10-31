

$("#click-me").on("click", function(){
 var age = parseInt($("#age").val())
 var max = parseInt($("#max-age").val())
 var drink = $("#item").val()
 var num = $("#num-per-day").val()

 var total = (max-age) * num * 365

 $("#solution").html(total)
 $("#drink").html(drink)

})
