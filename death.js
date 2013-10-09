// Death
function updateDeath() {
var strings = [
'Be careful to make or revise your wills, and settle your outward affairs while in health.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var death = "<h2>Death</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=death;
}