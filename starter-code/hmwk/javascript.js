function addToList(lists, New) {
    var lists = document.createElement('ol');
    var list_value = document.createTextNode(New);
    lists.appendChild(list_value);
    document.body.appendChild(lists);
 
 }
 
 window.onload = function() {
 
    for (var i=99; i>=0; i--) {
        if (i===0) {
            var X=('No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.');
        }
        if (i===1) {
            var Y=(i + ' bottle of coke on the wall, '+ i +' bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.')
        }
        if (i===2) {
            var Z=(i + ' bottles of coke on the wall, '+ i +' bottles of coke. Take one down and pass it around, '+ (i-1) +' bottle of coke on the wall.')
        }
        if (i>2) {
            var J=(i + ' bottles of coke on the wall, '+ i +' bottles of coke. Take one down and pass it around, '+ (i-1) +' bottles of coke on the wall.')
            var main_list = document.getElementById("song");
            addToList(main_list,J);
        }
    }
    var main_list = document.getElementById("song");
    addToList(main_list,Z);
    addToList(main_list,Y);
    addToList(main_list,X);
 
 };