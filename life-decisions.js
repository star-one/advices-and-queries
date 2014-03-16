// Life decisions
function updateLife() {
var strings = [
'We all have different gifts and needs. Discover, acknowledge and respond to your own, and those of other people. Free yourself from limiting ideas, for example about gender roles. When choices arise in work, leisure, interests,relationships or education, do you follow the way that provides the greatest opportunity for the development and use of your gifts in the service of God and the community? Look for the leadings of God in all circumstances, even if you seem to have no choice. Live adventurously.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D16</em>',

'Certain times of life bring energy and activity; other times bring a need for rest and renewal. Do you respond to the rhythms of your life, accepting or declining commitments without an undue sense of pride or guilt?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D17</em>',

'Approach old age with acceptance and anticipation. Like other times in life, it can be a time for growing. Try to discern the right moment for relinquishing long-term responsibilities, and look for new opportunities for involvement. As outward activity lessens, your thoughts and prayer may liberate love and power in others.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D18</em>',

'Do you apply the principles of Quaker decisionmaking in your home, in your work, and in other areas of your life?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, C4</em>',

'Do you use the guidance of the Spirit when seeking truth?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, A4</em>',

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