// var heading1 = document.querySelector("#heading1")
// heading.style.color = red

$("#heading1").css("color", "red")
$("#heading1").html("My new paragrph 1")

$("#btn").click(function(){
  // var myName = $("#name").val()
  $("#result").html($("#name").val())
  $("#name2").val($("name").val())
})

// hide and show
$("#box1").hide(2000)
$("#box1").show(2000)


// fade out and fade in
$("#box2").fadeOut(2100)
$("#box2").fadeIn(2100)

// slideup and slidedown
$("#box3").slideUp(2000)
$("#box3").slideDown(2000)

$("#box4").animate( {
  opacity: 0.25,
  width: "70%" ,
  height: "50px"
} , 2000 );

// make it disapper
$("#box4").animate( {
  opacity: 0.25,
  width: "0%" ,
  height: "0px"
} , 2000 );
