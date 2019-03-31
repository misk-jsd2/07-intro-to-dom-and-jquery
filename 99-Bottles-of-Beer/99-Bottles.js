


function addToList(list, newBottles) {
    var list = document.createElement('li');
    var newBottlesText = document.createTextNode(newBottles);
    list.appendChild(newBottlesText);
    document.body.appendChild(list);

  }

window.onload = function() {
    // var bottle_of = document.getElementById("Bottles_of");
    // var Bottles_of = document.createElement("Bottles");


    var bottles = 99;
    var word = 'bottles';

while (bottles > 0 ){
if (bottles == 1){
word = "bottle";
}
var A =(bottles + ' bottles of coke on the wall ', bottles +' bottles of coke. Take one down and pass it around bottle ', bottles-1 , word + ' of coke on the wall.');
bottles-- ;

if (bottles == 0){
var B =("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");
}
var Bottle_list = document.getElementById("Bottles_of");
addToList(Bottle_list,A);
 

}

var Bottle_list = document.getElementById("Bottles_of");
addToList(Bottle_list, A);
addToList(Bottle_list, B);
}

  



 
