// Civic participation
function updateCivic() {
var strings = [
'Remember your responsibilities as a citizen for the conduct of local, national, and international affairs. Do not shrink from the time and effort your involvement may demand.<br /><em>Britain Yearly Meeting, Advices and Queries, number 34</em>',

'Do you exercise your civic responsibilities and support acceptable legislation? Do you pray for those in authority? Are you careful to avoid defrauding the public treasury? In or out of court do you affirm instead of taking oaths?<br /><em>Northwest Yearly Meeting, Query 17</em>',

'Do we participate actively and intelligently in the political life of our country? Are we conscientious in fulfilling all obligations of state and society that are not contrary to the leading of God? Do we do all in our power to secure civil rights for all? Do we emphasize the single standard of truth, and are we free from the use of oaths?<br /><em>New York Yearly Meeting, query number 9</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var civic = "<h2>Civic participation</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=civic;
  
  scroll(0,0)
}