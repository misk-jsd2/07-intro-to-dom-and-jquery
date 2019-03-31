
function createLi (li,sen){
var main_heading = document.createElement("li");
     var heading_text = document.createTextNode(sen);
     main_heading.appendChild(heading_text);
       li.appendChild(main_heading);

   }

   window.onload = function(event){
 var myBottles1 = document.getElementById("new1");
 text1 = myBottles1.textContent;
 var myBottles2 = document.getElementById("new2");
text2 = myBottles2.textContent;
 var myBottles3 = document.getElementById("new3");
 text3 = myBottles3.textContent;
 var myBottles4 = document.getElementById("new4");
 text4 = myBottles4.textContent;
 var myBottles5 = document.getElementById("new5");
 text5 = myBottles5.textContent;
 var myBottles6 = document.getElementById("new6");
 text6 = myBottles6.textContent;
 var myBottles7 = document.getElementById("new7");
 text7 = myBottles7.textContent;
 
for  ( var i = 99; i>=0; i-- ){

if ( i > 2 ) {

  document.write( i + text1 + i + text2 + text3 + (i-1) + text1); 
 document.write("<br />");

}
else if ( i === 2 ) {
document.write( i + text1 + i + text2 + text3 + (i-1) + text4); 
  document.write("<br />");
}
else if ( i === 1 ) {
document.write( i + text4 + i + text7 + text3 + text6); 
  document.write("<br />");
}
else {  document.write(text5); 
} 
}
}