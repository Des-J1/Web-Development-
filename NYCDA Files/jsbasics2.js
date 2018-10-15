var students = ["John", "Jane", "Mary", "Mike"]

console.log(students[1])

console.log(students[3])

var cars = [ ["Porsche", "Camero"], ["Camry", "Prius"] ];

console.log(cars[1][0]);

console.log(cars[0][1]);

var car = {make: "toyota", model: "prius", doors: 4};

console.log(car["make"]);
console.log(car ["doors"])

var j = {name: "jane", job: "developer", age: 34};
console.log(j['age']);

console.log(j["job"]);

var user = {firstName: 'Lucille', lastName: 'Bluth'};

console.log(user.firstName);

console.log (user.firstName);
console.log(user.lastName);

console.log(user.firstName +''+user.lastName);
console.log(user.firstName +','+user.lastName);

var me = {firstName: "Desmond", lastName: "Seymour", knownName: "thumper", interests: ["tech", "education", "money"], Age: 34};

console.log(me["firstName"])
console.log(me["lastName"])
console.log(me["interests"][0])
console.log(me["interests"][1])
console.log(me["interests"][2])

console.log(me.firstName + ' ' + me.lastName+ ' ' + me.knownName+ ' ' + (me.interests[0])+ ' ' +(me.interests[1])+ ' ' +(me.interests[2]));

var mary = {
  fisrtName: "Mary",
  birthday: "October 4"
};

console.log(mary.birthday+ ' is the birthday of ' + mary.firstName);

var Des = {
  firstName: "Desmond", lastName: "Seymour", codename: "AzraVega", education: ["BSPoliSci", "MSBioTech", "GradCertPubAdmin"]
};

console.log(Des.firstName+ ' was given the code name ' + Des.codename);

console.log(Des.firstName+ ' has interests in many fields but has the following education ' +(Des.education[0])+ ' '+(Des.education[1])+ ' '+(Des.education[2]))

var Zahra = {
  firstName: "Zmoney", lastName: "Thagod"
};

console.log(Zahra.firstName+ ' '+Zahra.lastName);
