// Jesus
function updateJesus() {
var strings = [
'Do you live in vital relationship with God, trusting in Jesus Christ as your saving Lord and obeying the leadings of the Holy Spirit? Is Christ\'s presence evident in your life?<br /><em>Northwest Yearly Meeting, Query 1</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var jesus = "<h2>Jesus</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=jesus;
  
  scroll(0,0)
}