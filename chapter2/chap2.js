//Chapter 2 - Program Structure

console.log(Math.max(2, 4, 6, 12, 3));

//break example
for(var current = 20;; current++){
    if(current == 21)
        continue;
    if(current % 7 == 0)
        break;
}
console.log(current);

//Exercise 1
for(var i="#"; i<"#######"; i+="#"){
    console.log(i);
}

//Exercise 2
for(var i=1; i<=100; i++){
    var output = "";
    if(i%3 == 0)
        output += "Fizz";
    if(i%5 == 0)
        output += "Buzz";
    console.log(output || i);
}

//Exercise 3
var board = "";
for(var i=0; i<8; i++){
    for(var j = 0; j<8; j++){
        if((i+j)%2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}
console.log(board);