// Quaker business
function updateQuakerBusiness() {
var strings = [
'Are your meetings for church affairs held in a spirit of worship and in dependence on the guidance of God? Remember that we do not seek a majority decision nor even consensus. As we wait patiently for divine guidance our experience is that the right way will open and we shall be led into unity.<br /><em>Britain Yearly Meeting, Advices and Queries, number 14</em>',

'Do you take part as often as you can in meetings for church affairs? Are you familiar enough with our church government to contribute to its disciplined processes? Do you consider difficult questions with an informed mind as well as a generous and loving spirit? Are you prepared to let your insights and personal wishes take their place alongside those of others or be set aside as the meeting seeks the right way forward? If you cannot attend, uphold the meeting prayerfully.<br /><em>Britain Yearly Meeting, Advices and Queries, number 15</em>',

'Are you concerned with the Preparative, Monthly, Quarterly and Yearly Meetings during which the business of the Society is conducted? Are these meetings held in a spirit of worship and dependence upon the guidance of God? Do you take your right share in the service of these meetings, realising they are essential for the support and development of our corporate concerns? Do you carry out discipline, when advisable, in a sensitive and Christian manner?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 8</em>',

'Do you hold your meetings for business in a spirit of worship? Do you seek the guidance of God, rather than acceptance of a previously formed opinion? Do you help one another in your search for unity by speaking briefly and without repetition? Are you tender and considerate of differing views, coming to a decision only when you have, with Divine assistance, found a sense of unity?<br /><em>Ohio Valley Yearly Meeting, Ninth query</em>',

'Are meetings for business held in a spirit of worship, understanding and forbearance? When direction seems lacking, is this seen as a challenge to a more prayerful search for truth? Do we humbly set aside our own preconceived notions as to proper action, seeking instead Divine guidance as to the right course? Is the Meeting aware that it speaks not only through its actions but also through its failure to act?   Do you participate regularly in meetings for business, discharge faithfully your committee responsibilities, and assume your share of financial support of the Meeting?<br /><em>Baltimore Yearly Meeting, The Queries, number 2</em>',

];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var quaker_business = "<h2>Quaker business</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=quaker_business;
  
  scroll(0,0)
}