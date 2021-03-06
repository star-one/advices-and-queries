// Interchurch and interfaith
function updateInterchurch() {
var strings = [
'In what ways do we cooperate with persons and groups who share our beliefs and concerns? How does our connection to the Spirit inspire and challenge us?<br /><em>Intermountain Yearly Meeting, Integrity, Queries, 4</em>',

'In what ways do we participate in the life of the interfaith community and in the wider fellowship of Friends?<br /><em>Pacific Yearly Meeting, Advices and Queries, Reaching Out, Queries for the Meeting</em>',

'Do you work gladly with other religious groups in the pursuit of common goals? While remaining faithful to Quaker insights, try to enter imaginatively into the life and witness of other communities of faith, creating together the bonds of friendship.<br /><em>Britain Yearly Meeting, Advices and Queries, number 6</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var interchurch = "<h2>Interchurch and interfaith</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=interchurch;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}