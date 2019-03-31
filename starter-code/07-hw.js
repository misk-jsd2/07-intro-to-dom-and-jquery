

  var $getmyli = document.getElementById('#id01');


$( document ).ready( function(){
  for (var i = 99; i >= 0; i--) {
if (i > 1){
console.log(i,"Bottles of Coke on the Wall",i,"bottles of coke. Take one down and pass it around",i-1,"bottles of coke on the wall.");
}else if (i == 1) {
console.log(i," bottle of coke on the wall,",i," bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.");
}else{
console.log("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");
}}
});
