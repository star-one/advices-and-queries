// Outreach
function updateOutreach() {
var strings = [
'Do you fulfil your part as a religious society and as individuals in promoting the cause of Truth and in spreading the message of Christ throughout the world?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 11</em>',

'Do you, as the way opens, share Friends\' principles with non-Friends? Do you witness to your Quaker faith by letting your life speak? Do you make non-Friends welcome in your meetings for worship? Do you find ways to encourage their continued attendance?<br /><em>Baltimore Yearly Meeting, The Queries, number 8</em>',

'Does your inward faith turn outward? Do you pray for your friends and associates and for those engaged in spreading the Gospel? Have you examined your beliefs and prepared yourself to share them, with sensitivity and humility, as the Holy Spirit leads?<br /><em>Northwest Yearly Meeting, Query 3</em>',

'As any are brought in to the Truth new meetings are to be arranged to suit the general convenience, without respect of persons.<br /><em>Advices from the Elders at Balby (1656), advice number 2</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var outreach = "<h2>Outreach</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=outreach;
  
  scroll(0,0)
}