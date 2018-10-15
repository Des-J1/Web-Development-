// Rep 1 Part 1
var a = 7
var b = 3
console.log(a+b)
// Rep 1 Part 2
var c = "Who? "
var d = "Mike Jones"
console.log(c + d)

// Rep 2
// stand out rap groups ranked
var rapgroups = [["outkast", "ugk"], ["clipse", "wutang"]]
  console.log(rapgroups[0][0])
  console.log(rapgroups[0][1])
  console.log(rapgroups[1][1])
  console.log(rapgroups[1][0])

  // Rep 3
var Grade = 88
if(Grade >=100){
  console.log("Grade is A")
}else if(Grade >= 80){
  console.log("grade is B")
}else if(Grade >= 70){
  console.log("Grade is C")
}else{
  console.log("Grade is D")
}

// Rep 4
var friends = ["Zoey", "Mike", "Carla", "Mary", "Jermaine", "Te", "Relar","Big Pokie"]
for(var i = 0; i <friends.length; i++){
  console.log(friends[i] +" is my friend")
}

// Rep 5
function winaprize(door){
  if(door == "door1"){
    console.log("You have won an opportunity to live on Hoover Street")
  }else if(door == "door2"){console.log("You have won an opportunity to live on Glass Street")
}else if(door == "door3"){
  console.log("You have won an opportunity to live on Grape Street")
}else{console.log("You Homeless")}
}

winaprize("door1")
