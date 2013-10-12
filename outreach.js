// Outreach
function updateOutreach() {
var strings = [
'Do you fulfil your part as a religious society and as individuals in promoting the cause of Truth and in spreading the message of Christ throughout the world?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 11</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var outreach = "<h2>Outreach</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=outreach;
  
  scroll(0,0)
}