// console.log("js started")

var temperature = 40
if(temperature <=40){
  console.log("It is cold")
} else{
  console.log("Its is hot")
}

var grade = 60
if(grade >=90){
  console.log("Grade is A")
} else if(grade >= 80){
  console.log("Grade is B")
}else if(grade >= 70){
  console.log("Grade is C")
}else{
  console.log("Grade is D")
}

function multiply10(t){
  return t * 10
}
console.log(multiply10(3))

var word = "Coding"

// this function should console log the word word
function whichword(w){
  return "I like "  + w
}
console.log(whichword(word))

for (var i = 5; i <= 11; i++) {
  console.log("Carlos")
}

var beers = ["Guinness", "Hoegaarden", "Modelo"]
for(var i = 0; i< beers.length; i++){
  console.log(beers[i])
}

var friends = ["Jake", "John", "Samantha", "Billy"]
for(var i = 0; i < friends.length; i++){
  console.log(friends[i] + " is my friend")
}

x = 6
while(x < 10){
console.log("On number " + x)
x++;
}

var x = 15
var y = 25
var n = "Jamie"
var m = "Jackson"

function add2items(a,b){
  console.log(a+b)
}

add2items(x,y)
add2items(n, m)

var drinks = [["coke", "pepsi"], ["sprite", "polar"]]
  console.log(drinks[0][0])

var groups = [["wutang", "migos"], ["outkast", "ugk"]]
  console.log(groups[0][0])
    console.log(groups[1][0])

    var grade = 60
    if(grade >=100){
      console.log("Grade is A")
    } else if(grade >= 80){
      console.log("Grade is B")
    }else if(grade >= 70){
      console.log("Grade is C")
    }else{
      console.log("Grade is D")
    }


  var num = 80
  if(num < 100){
    console.log("Number is less than 100.")
  }else{
    console.log(num + " is NOT less than 100")
  }

  var friends = ["Rovi", "Zachia", "Chip", "Greg", "Heidi", "Shondoe", "Jevin", "Yoyo"]
  for(var i = 0; i < friends.length; i++){
    console.log(friends[i] + " is my friend")
  }

// #number 4
  var name = "Des"
  function sayMyname(name){
    console.log(name + " is your name")
  }
  sayMyname(name);

  // #number 5
  function winaprize(door){
    if(door == "door1"){
      console.log("You have won gold")
  }else if(door =="door2"){
      console.log("You have won bronze")
  }else if(door =="door3"){
    console.log("You have won silver")
  }else{console.log("You have won not a single thing")
}
  }

 winaprize("door2")
