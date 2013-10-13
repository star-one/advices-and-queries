// Civic participation
function updateCivic() {
var strings = [
'Remember your responsibilities as a citizen for the conduct of local, national, and international affairs. Do not shrink from the time and effort your involvement may demand.<br /><em>Britain Yearly Meeting, Advices and Queries, number 34</em>',

'Do you exercise your civic responsibilities and support acceptable legislation? Do you pray for those in authority? Are you careful to avoid defrauding the public treasury? In or out of court do you affirm instead of taking oaths?<br /><em>Northwest Yearly Meeting, Query 17</em>',

'Do we participate actively and intelligently in the political life of our country? Are we conscientious in fulfilling all obligations of state and society that are not contrary to the leading of God? Do we do all in our power to secure civil rights for all? Do we emphasize the single standard of truth, and are we free from the use of oaths?<br /><em>New York Yearly Meeting, query number 9</em>',

'Any called before outward powers of the nation are to obey.<br /><em>Advices from the Elders at Balby (1656), advice number 13</em>',

'\"That if any be called to serve the Commonwealth in any public service which is for the public wealth and good, that with cheerfulness it be undertaken and in faithfulness discharged unto God, that therein patterns and examples in the thing that is righteous yet may be to those that are without.\"<br /><em>Advices from the Elders at Balby (1656), advice number 14</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var civic = "<h2>Civic participation</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=civic;
  
  scroll(0,0)
}