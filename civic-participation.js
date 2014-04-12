// Civic participation
function updateCivic() {
var strings = [
'The Religious Society of Friends challenges each of us to live a life reflective of our beliefs. We take our faith into the broader community in many ways. Some are led to do acts in full view of society; others are led to work where their service is less visible but no less valuable. Each of us holds a part of the whole. None of us could consistently do what we do, no matter how little, without drawing from the well of our faith. Among us all, we make a greater impact than we may realize as individuals.<br /><em>Intermountain Yearly Meeting, Service, Advices, 1</em>',

'Quaker service springs from our deepest convictions and is the natural expression of our beliefs in justice, equality, and community. Our service may lead us to practice a profession in which we serve others; numerous opportunities exist for those of us whose professions are not directly service related. We can work with integrity on school boards and in community associations; we may influence our families and friends to examine their consumption of natural resources and to find various ways to recycle more fully; we may help rebuild devastated homes or lives; we may soothe and comfort those with wounded souls. It is important to discern whether our service is inspired and led by the Spirit so that we do not take on tasks beyond our strength or capabilities. By ever returning to the Light within, we can trust we will find ways in which we can... \"be patterns, be examples in all countries, places, islands, nations, wherever you come, that your carriage and life may preach among all sorts of people, and to them; then you will come to walk cheerfully over the world, answering that of God in everyone.\" (George Fox, Journal, 1656)<br /><em>Intermountain Yearly Meeting, Service, Advices, 2</em>',

'Have we prayed for those in authority? Have we encouraged people to vote and to carry out civic responsibilities in the name of Christ?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 13</em>',

'Do you exercise your civic responsibilities and support acceptable legislation? Do you pray for those in authority? Are you careful to avoid defrauding the public treasury? In or out of court do you affirm instead of taking oaths?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

'What am I doing to carry my share of responsibility for the government of our community, nation, and world? Am I persistent in my efforts to promote constructive change?<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Queries for Individuals</em>',

'Remember your responsibility as citizens of Aotearoa for the government of our country and for its relations with other countries, particularly our neighbours in the South Pacific. How can we help our nation to promote international peace, justice and care for the earth?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E10</em>',

'All those who commit crimes have that of God within them, as do those who are the victims of crime. Do you recognise or share in the work that is being done towards better conditions and rehabilitation for prisoners, towards alternatives to imprisonment, and towards meeting the needs of victims of crime?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E5</em>',

'Remember your responsibilities as a citizen for the conduct of local, national, and international affairs. Do not shrink from the time and effort your involvement may demand.<br /><em>Britain Yearly Meeting, Advices and Queries, number 34</em>',

'Do you exercise your civic responsibilities and support acceptable legislation? Do you pray for those in authority? Are you careful to avoid defrauding the public treasury? In or out of court do you affirm instead of taking oaths?<br /><em>Northwest Yearly Meeting, Query 17</em>',

'Do we participate actively and intelligently in the political life of our country? Are we conscientious in fulfilling all obligations of state and society that are not contrary to the leading of God? Do we do all in our power to secure civil rights for all? Do we emphasize the single standard of truth, and are we free from the use of oaths?<br /><em>New York Yearly Meeting, query number 9</em>',

'Any called before outward powers of the nation are to obey.<br /><em>Advices from the Elders at Balby (1656), advice number 13</em>',

'\"That if any be called to serve the Commonwealth in any public service which is for the public wealth and good, that with cheerfulness it be undertaken and in faithfulness discharged unto God, that therein patterns and examples in the thing that is righteous yet may be to those that are without.\"<br /><em>Advices from the Elders at Balby (1656), advice number 14</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var civic = "<h2>Civic participation</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=civic;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}