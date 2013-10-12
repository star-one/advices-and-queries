// The environment
function updateEnvironment() {
var strings = [
'We do not own the world, and its riches are not ours to dispose of at will. Show a loving consideration for all creatures, and seek to maintain the beauty and variety of the world. Work to ensure that our increasing power over nature is used responsibly, with reverence for life. Rejoice in the splendour of God\'s continuing creation.<br /><em>Britain Yearly Meeting, Advices and Queries, number 42</em>',

'Do you endeavor to live in harmony with nature, avoiding pollution and the destruction of our environment? What are you doing about your use of the world\'s irreplaceable resources? Are you concerned for family and population planning so that future generations will be able to live on the resources available to them?<br /><em>Ohio Valley Yearly Meeting, Tenth query</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var environment = "<h2>The environment</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=environment;
  
  scroll(0,0)
}