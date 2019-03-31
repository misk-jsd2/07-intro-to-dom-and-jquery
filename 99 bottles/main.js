

    var songArray = [];
   
for (var a = 99; a >= 0; a--){
   
    if (a < 100 && a > 1){
        var a1 = (a + " bottles of coke on the wall, " + a + " bottles of coke. Take one down and pass it around, " + (a-1) + " bottles of coke on the wall."); 
        songArray.push(a1);
      
                
    } else if (a < 2 && a > 0) {
    var b = (a + " bottle of coke on the wall, " + a +  " bottle of coke. Take one down and pass it around, no more bottles of coke on the wall.");
    songArray.push(b);
   
    
} else if (a < 1){
  var c = ("No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall.");
  songArray.push(c);
    
    
}

// console.log();

}

var myList = document.getElementById('fav-list');
for(var array of songArray){
    var newLine = document.createElement('li');
    newLine.textContent = array;

    myList.appendChild(newLine);
}
