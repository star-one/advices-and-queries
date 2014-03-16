// Civic participation
function updateCivic() {
var strings = [
'Remember your responsibility as citizens of Aotearoa for the government of our country and for its relations with other countries, particularly our neighbours in the South Pacific. How can we help our nation to promote international peace, justice and care for the earth?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E10</em>',

'Obey the laws of the state, except when they conflict with your inner conviction. Work to amend laws that you consider unjust. If you feel called to civil disobedience, seek the guidance and support of your Meeting. Be prepared to accept the consequences cheerfully.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E4</em>',

'All those who commit crimes have that of God within them, as do those who are the victims of crime. Do you recognise or share in the work that is being done towards better conditions and rehabilitation for prisoners, towards alternatives to imprisonment, and towards meeting the needs of victims of crime?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E5</em>',

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