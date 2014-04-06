// Quaker business
function updateQuakerBusiness() {
var strings = [
'Have we called for dedication to God of our time, talent and treasure, offering control of our money and our resources to Christ?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 12</em>',

'Come to Meeting with hearts and minds prepared to be open and faithful to the leadings of the Spirit. Then the conduct of business will lead to truth, unity, and love.<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship for Business, Advices</em>',

'When a matter is before the Meeting for Business, each person present contributes to the corporate search for a decision that accords with the will of God. Inaction is a form of action. Silent worship in the Meeting for Business contributes to the process of achieving unity.<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship for Business, Advices</em>',

'Listen attentively to others\' words and use the silence between messages to reflect carefully on what you might contribute. When you are clear, speak simply what is in your heart, without repeating what has already been offered.While making your insights clear, lay aside personal opinions and attend to what God requires.<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship for Business, Advices</em>',

'Do I attend Meeting for Business regularly? Do I speak in Meeting for Business only when I am led to speak?<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship for Business, Queries for Individuals</em>',

'Is the Meeting for Business held as a Meeting for Worship in which we seek divine guidance for our actions? Are we tender and considerate of different views, coming to a decision only when we have found unity? Do we give prayerful support for our clerks that they may be sensitive to the movement of the Spirit among us?<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship for Business, Queries for the Meeting</em>',

'Is the life of our Meeting so ordered that it helps us to simplify our lives?<br /><em>Pacific Yearly Meeting, Advices and Queries, Simplicity, Queries for the Meeting</em>',

'Our Meetings for Business are an integral part of our Quaker life. They are conducted in the spirit of worship. We seek to discern the will of God rather than reach a majority decision or consensus. Listen in the expectation that the right way will become clear. The way that opens may not be the one that seemed obvious to anyone at the start of the Meeting.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, C1</em>',

'Meeting for Worship for Business is strengthened by having the worshipful consideration of as many people as possible. Do you take your right share in Meeting for Business? Do you uphold the Meeting and its decisions, even if you cannot attend?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, C2</em>',

'Come to Meeting for Business with a willingness to listen to everyone whatever their contribution. Allow your insights and personal wishes to take their place alongside those of others, and if necessary, let them be set aside. Use as few words as possible, but as many as are needed.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, C3</em>',

'Are your meetings for church affairs held in a spirit of worship and in dependence on the guidance of God? Remember that we do not seek a majority decision nor even consensus. As we wait patiently for divine guidance our experience is that the right way will open and we shall be led into unity.<br /><em>Britain Yearly Meeting, Advices and Queries, number 14</em>',

'Do you take part as often as you can in meetings for church affairs? Are you familiar enough with our church government to contribute to its disciplined processes? Do you consider difficult questions with an informed mind as well as a generous and loving spirit? Are you prepared to let your insights and personal wishes take their place alongside those of others or be set aside as the meeting seeks the right way forward? If you cannot attend, uphold the meeting prayerfully.<br /><em>Britain Yearly Meeting, Advices and Queries, number 15</em>',

'Are you concerned with the Preparative, Monthly, Quarterly and Yearly Meetings during which the business of the Society is conducted? Are these meetings held in a spirit of worship and dependence upon the guidance of God? Do you take your right share in the service of these meetings, realising they are essential for the support and development of our corporate concerns? Do you carry out discipline, when advisable, in a sensitive and Christian manner?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 8</em>',

'Do you hold your meetings for business in a spirit of worship? Do you seek the guidance of God, rather than acceptance of a previously formed opinion? Do you help one another in your search for unity by speaking briefly and without repetition? Are you tender and considerate of differing views, coming to a decision only when you have, with Divine assistance, found a sense of unity?<br /><em>Ohio Valley Yearly Meeting, Ninth query</em>',

'Are meetings for business held in a spirit of worship, understanding and forbearance? When direction seems lacking, is this seen as a challenge to a more prayerful search for truth? Do we humbly set aside our own preconceived notions as to proper action, seeking instead Divine guidance as to the right course? Is the Meeting aware that it speaks not only through its actions but also through its failure to act?   Do you participate regularly in meetings for business, discharge faithfully your committee responsibilities, and assume your share of financial support of the Meeting?<br /><em>Baltimore Yearly Meeting, The Queries, number 2</em>',

'Do you acknowledge God\'s ownership of all that is under your care? Do you give of your time and abilities in service to church and community and gratefully use your possessions as a trust to honor God?<br /><em>Northwest Yearly Meeting, Query 4</em>',

'Friends\' business meetings are meetings for worship with a concern for business. When there seems to be disagreement, a free expression of all opinions should be encouraged. Those who speak in meetings for business are advised not to be unduly persistent in advocacy or opposition, but, after having fully expressed their views, to recognize the generally expressed sense of the meeting. A deep and seeking silence can help to reconcile seemingly opposing points of view. Meetings should be conducted in the spirit of wisdom, forbearance, and love.<br /><em>New York Yearly Meeting, advice number 16</em>',

'Persons ceasing to attend meetings are to be spoken to. Persons who walk disorderly are to be spoken to in private, then before two or three witnesses; then, if necessary, the matter is to be reported to the Church. The Church is to reprove them for their disorderly walking, and, if they do not reform, the case is to be sent in writing \"to some whom the Lord hath raised up in the power of the Spirit of the Lord to be fathers - His children to gather in the light\" so that the thing may be known to the body and be determined in the light.<br /><em>Advices from the Elders at Balby (1656), advice number 3</em>',

'Every meeting to keep records of births, or of burials of the dead that died in the Lord. Burials to be conducted according to scripture, and not after customs of \"heathen.\"<br /><em>Advices from the Elders at Balby (1656), advice number 8</em>',

'Have we built unity for important steps of faith, asking for church-wide prayer and congregational feedback?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 4</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var quaker_business = "<h2>Quaker business</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=quaker_business;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}