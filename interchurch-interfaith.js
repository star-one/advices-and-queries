// Interchurch and interfaith
function updateInterchurch() {
var strings = [
'Do you work gladly with other religious groups in the pursuit of common goals? While remaining faithful to Quaker insights, try to enter imaginatively into the life and witness of other communities of faith, creating together the bonds of friendship.<br /><em>Britain Yearly Meeting, Advices and Queries, number 6</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var interchurch = "<h2>Interchurch and interfaith</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=interchurch;
  
  scroll(0,0)
}