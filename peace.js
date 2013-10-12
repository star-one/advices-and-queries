// Peace
function updatePeace() {
var strings = [
'We are called to live \'in the virtue of that life and power that takes away the occasion of all wars\'. Do you faithfully maintain our testimony that war and the preparation for war are inconsistent with the spirit of Christ? Search out whatever in your own way of life may contain the seeds of war. Stand firm in our testimony, even when others commit or prepare to commit acts of violence, yet always remember that they too are children of God.<br /><em>Britain Yearly Meeting, Advices & Queries, number 31</em>',

'Bring into God\'s light those emotions, attitudes and prejudices in yourself which lie at the root of destructive conflict, acknowledging your need for forgiveness and grace. In what ways are you involved in the work of reconciliation between individuals, groups and nations?<br /><em>Britain Yearly Meeting, Advices & Queries, number 32</em>',

'Do you live in that life and power which takes away the occasion of violent conflict, and with God\'s help work for reconciliation between individuals, groups and nations? Do you faithfully maintain our witness that all war, or preparation for it, is inconsistent with the spirit and teaching of Christ?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 7</em>',

'Do you live in the life and power which takes away the occasion for all wars? Do you, on Christian principles, refuse to participate in or cooperate with all military effort? Do you work actively for peace and the removal of the causes of wars? Do you endeavor to cultivate good will, mutual understanding and equal opportunities for all races, creeds and nations? Have you examined your life style and possessions to make sure that the seeds of war are not found within them?<br /><em>Ohio Valley Yearly Meeting, Eleventh query</em>',



];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var peace = "<h2>Peace</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=peace;
  
  scroll(0,0)
}