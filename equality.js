// Equality and social justice
function updateEquality() {
var strings = [
'Are you alert to practices here and throughout the world which discriminate against people on the basis of who or what they are or because of their beliefs? Bear witness to the humanity of all people, including those who break society\'s conventions or its laws. Try to discern new growing points in social and economic life. Seek to understand the causes of injustice, social unrest and fear. Are you working to bring about a just and compassionate society which allows everyone to develop their capacities and fosters the desire to serve?<br /><em>Britain Yearly Meeting, Advices & Queries, number 32</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var equality = "<h2>Equality</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=equality;
}