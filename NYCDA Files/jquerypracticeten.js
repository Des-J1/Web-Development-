

// could also use "mouseover or mouseleave"
$("#heading1").on("dblclick", function(){
$("#para1").show(1100)
})


// can make text fade in and out
$("#heading2").on("mouseleave", function(){
$("#para2").toggle(100)
})

$("#heading3").on("mouseover", function(){
$("#para3").slideDown(2100)
})


// can make text fade in and out
$("#heading4").on("click", function(){
$("#para4").toggle(100)
})

// $("#heading5").on("mouseover", function(){
// $("#para5").slideDown(2100)
// })
$("#heading5").animate( {
  opacity: 0.25,
  width: "70%" ,
  height: "50px"
} , 8900 );
$("#para5").animate( {
  opacity: 0.25,
  width: "70%" ,
  height: "50px"
} , 8900 );


// can make text fade in and out
$("#heading6").on("click, mouseleave", function(){
$("#para6").toggle(100)
})

$("#heading7").on("mouseover", function(){
$("#para7").fadeIn(5100)
})


// can make text fade in and out
$("#heading8").on("click", function(){
$("#para8").show(100)
})

$("#heading9").on("mouseover", function(){
$("#para9").slideDown(2100)
})


// can make text fade in and out
$("#heading10").on("click", function(){
$("#para10").toggle(100)
})
