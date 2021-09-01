var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);



var num1 = 0;

var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    if (num > num1)
       largest = num ;

    return largest;
});
console.log(largest);


var familyAge = [2,3,39,37,9];
var age= []
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(age);



var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var wordWithS = words.map(word => word.startsWith("s"));
console.log(wordWithS);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);


var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement - anotherElement);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0,3);
console.log(slice1);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(3, );
console.log(slice2);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var swords=words.filter(x =>(x[0]=='s') );
console.log(swords);
VM94:3 (3) ["seal", "scorpion", "salamander"]
undefined
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var swords=words.filter(x =>(x =='s') );
console.log(swords);
VM106:3 []
undefined
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(words[0]);
console.log(words[0][0]);
VM236:2 seal
VM236:3 s
undefined
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var swords=words.filter(x =>(x =='seal') );
console.log(swords);
VM253:3 ["seal"]
undefined
