var data = [1, 2, 3, 4, 5, 6, 42];

//Usage of the reduce method in JS on an array
console.log("Sum = " + data.reduce(function(a,b){
    return (a + b);
}));

//Uage of map method in JS on an array

var dataFile = [
    {name: "Viktor", born: 1832, died: 1905},
    {name: "Markus", born: 1835, died: 1905},
    {name: "Selene", born: 1834, died: 1905},
    {name: "Lucian", born: 1839, died: 1905}
];

console.log(typeof(data.join()));

var cool = dataFile.filter(function(person){
    return person.born > 1834;
});

console.log(dataFile.map(function(person){
    return person.name;
}));