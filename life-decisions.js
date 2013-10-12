// Life decisions
function updateLife() {
var strings = [
'Live adventurously. When choices arise, do you take the way that offers the fullest opportunity for the use of your gifts in the service of God and the community? Let your life speak. When decisions have to be made, are you ready to join with others in seeking clearness, asking for God\'s guidance and offering counsel to one another?<br /><em>Britain Yearly Meeting, Advices and Queries, number 27</em>',

'Every stage of our lives offers fresh opportunities. Responding to divine guidance, try to discern the right time to undertake or relinquish responsibilities without undue pride or guilt. Attend to what love requires of you, which may not be great busyness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 28</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var life_decisions = "<h2>Life decisions</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=life_decisions;
  
  scroll(0,0)
}