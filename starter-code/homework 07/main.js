
$(document).ready(function(){

for (var i=99;i>=0;i--){
var $newThingLi = $('<li>');
var $list= $('#Slist'); 
var num=i;
if (i==1){
$newThingLi.text("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall");
$list.append($newThingLi);
}else if (i==0){
	$newThingLi.text("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
$list.append($newThingLi);
}else 
$newThingLi.text(num+"bottles of beer on the wall"+num+ "bottles of beer Take one down and pass it around"+ --num +"bottles of beer on the wall")
$list.append($newThingLi);


}

})