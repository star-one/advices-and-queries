// Civic participation
function updateCivic() {
var strings = [
'Have we prayed for those in authority? Have we encouraged people to vote and to carry out civic responsibilities in the name of Christ?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 13</em>',

'Do you exercise your civic responsibilities and support acceptable legislation? Do you pray for those in authority? Are you careful to avoid defrauding the public treasury? In or out of court do you affirm instead of taking oaths?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

'We value our part in shaping the laws of our country. Our task is to see that laws serve God\'s purposes and build a just social order. Our first allegiance should be to God, and if this conflicts with any compulsion of the state, we serve our country best by remaining true to our higher loyalty.<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Advices</em>',

'If, by divine leading, our attention is focused on a law that is contrary to God\'s law, we must proceed with care. Before acting, Friends should pray for further guidance and speak with the Meeting, family members, and all those who might be affected by the decision. If a decision involves disobedience to the law, we should make the grounds of our action clear to all concerned and be prepared to suffer any penalties without evasion. As a community, we must care for those who suffer for conscience\'s sake.<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Advices</em>',

'What am I doing to carry my share of responsibility for the government of our community, nation, and world? Am I persistent in my efforts to promote constructive change?<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Queries for Individuals</em>',

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