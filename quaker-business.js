// Quaker business
function updateQuakerBusiness() {
var strings = [
'Are your meetings for church affairs held in a spirit of worship and in dependence on the guidance of God? Remember that we do not seek a majority decision nor even consensus. As we wait patiently for divine guidance our experience is that the right way will open and we shall be led into unity.<br /><em>Britain Yearly Meeting, Advices and Queries, number 14</em>',

'Do you take part as often as you can in meetings for church affairs? Are you familiar enough with our church government to contribute to its disciplined processes? Do you consider difficult questions with an informed mind as well as a generous and loving spirit? Are you prepared to let your insights and personal wishes take their place alongside those of others or be set aside as the meeting seeks the right way forward? If you cannot attend, uphold the meeting prayerfully.<br /><em>Britain Yearly Meeting, Advices and Queries, number 15</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var quaker_business = randomString;

  var txt=document.getElementById("query")
  txt.innerHTML=quaker_business;
}