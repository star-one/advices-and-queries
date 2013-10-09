// Integrity
function updateIntegrity() {
var strings = [
'Carefully maintain in your speech and conduct, and encourage in your families, simplicity, truthfulness, and sincerity; and endeavor to avoid worldliness in all its forms.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var integrity = "<h2>Integrity</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=integrity;
}