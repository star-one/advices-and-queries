// Peace
function updatePeace() {
var strings = [
'We are called to live \'in the virtue of that life and power that takes away the occasion of all wars\'. Do you faithfully maintain our testimony that war and the preparation for war are inconsistent with the spirit of Christ? Search out whatever in your own way of life may contain the seeds of war. Stand firm in our testimony, even when others commit or prepare to commit acts of violence, yet always remember that they too are children of God.<br /><em>Britain Yearly Meeting, Advices & Queries, number 31</em>',

'Bring into God\'s light those emotions, attitudes and prejudices in yourself which lie at the root of destructive conflict, acknowledging your need for forgiveness and grace. In what ways are you involved in the work of reconciliation between individuals, groups and nations?<br /><em>Britain Yearly Meeting, Advices & Queries, number 32</em>',

];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var peace = "<h2>Peace</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=peace;
}