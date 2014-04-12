// Quaker business
function updateQuakerBusiness() {
var strings = [
'In meetings for business, and in all duties connected with them, seek the immediate leading of God. Be careful not to misuse others\' time. Keep from stubbornness and from harshness of tone or manner and admit the possibility of being in error. Jesus Christ is the Head of the Meeting, and as each individual attends to His voice within, all will be drawn into unity.<br /><em>Indiana Yearly Meeting, The Advices, The Meeting Community</em>',

'Do you give sufficient time to sharing with others in the meeting, both newcomers and long-time members, your understanding of service and commitment to Quaker witness?<br /><em>Intermountain Yearly Meeting, Service, Queries, 3</em>',

'When the meeting receives multiple requests for funds or action, how do we determine which are most pressing?<br /><em>Intermountain Yearly Meeting, Integrity, Queries, 6</em>',

'There are varieties of Gifts, but the same Spirit. There are varieties of service, but the same Lord. There are many forms of work, but all of them, in all men, are the work of the same God. In each of us the Spirit is manifested in one particular way, for some useful purpose. One man, through the Spirit, has the gift of wise speech, while another, by the power of the same Spirit, can put the deepest knowledge into words. Another, by the same Spirit, is granted faith; another, by the one Spirit, gifts of healing, and another miraculous powers; another has the gift of prophecy, and another the ability to distinguish true spirits from false; yet another has the gift of ecstatic utterance of different kinds, and another the ability to interpret it. But all these gifts are the work of one and the same Spirit, distributing them separately to each individual at will. (1 Corinthians 12:4-11)<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting</em>',

'We are the Monthly Meeting, the Regional Meeting, and Intermountain Yearly Meeting. Each functions best when each of us contributes what gifts we have...we cannot expect others to serve these to us. (Adapted from Ross Worley, 2003)<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting</em>',

'Giving is not buying. God asks us to give because it is good for us, not because it is good for the person or cause to whom we give it. (Chris Viavant in Continuing Committee, IMYM, 2005)<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting</em>',

'The vitality of our meetings depends upon the many and varied gifts of those who take part in their activities. When each member and attender participates actively, the whole meeting is enriched. The Holy Spirit moves through us as we speak in meeting, care for one another, teach First Day school, work on committees, and testify to our lives in the Light. Each one of us has a responsibility for the financial support of the monthly meeting as well as for participation in the structure and function of its programs. When deciding whether to accept a service to which one is nominated, Friends are advised to understand the responsibilities required, to feel a leading to go forward, and to be willing to grow into the task. A meeting functions best when its members take their service to it seriously. Nominations are neither to be accepted, nor to be refused, casually.<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Advices, 1</em>',

'Our capabilities and possessions are not held as ends in themselves but are God\'s gifts entrusted to us. They are ours to share with others and to be used with humility, courtesy, and affection.<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Advices, 2</em>',

'In service to our meetings, we are to be careful to guard against contentiousness and the allure of power, and to be alert to the personalities and needs of others.<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Advices, 3</em>',

'Have we encouraged people in the church to use their spiritual gifts and to work together in teams for the cause of Christ?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 11</em>',
 
'What are we doing to recognize the varied skills and spiritual gifts of the members, attenders, and children among us? Are we tender and loving toward those with gifts different from the commonplace?<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Queries, 1</em>',

'Does each of us take our right share of responsibility in work and service for the meeting? What gifts do we offer? What do we hold back from offering? What do we have tied up that God has need of?<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Queries, 2</em>',

'Are younger Friends, new members, and attenders encouraged to take part in committees and to attend meetings for business? Do we encourage their participation in the meeting\'s activities? Do we encourage them to pursue membership when they are ready?<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Queries, 4</em>',

'What are we doing as individuals and as a meeting to encourage the use of members\' and attenders\' gifts?<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Queries, 5</em>',

'I always go to monthly meetings because if I don\'t, they usually end up doing some darn thing or other. (Barney Aldrich, as remembered by Phyllis Hoge, 2002)<br /><em>Intermountain Yearly Meeting, Monthly Meeting</em>',

'For it is the corporate Truth or Light for which Friends labor together, not the proof or justification of the rightness of any particular position. (Nancy Springer in North Pacific Yearly Meeting Faith and Practice, 1991)<br /><em>Intermountain Yearly Meeting, Monthly Meeting</em>',

'Friends\' way of conducting business is of central importance to the very existence of the monthly meeting. It is the Quaker way of living and working together; it is the way that creates and preserves a sense of fellowship in the meeting community. Friends must be mindful to conduct the business meeting as a meeting for worship with a concern for business. Those present help the meeting by exercising a spirit of wisdom, forbearance, and love. The right conduct of business meetings, even in routine matters, is a vital part of the worship experience. Individuals\' submitting themselves to the corporate revelation of Truth forms the basis of Friends\' approach to unity.<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Advices, 1</em>',

'All members are encouraged to attend meetings for business and to be faithful in the service of the meeting\'s affairs. Appointments of office holders and committee members are most successful when made with careful consideration of the qualifications of the nominees and of the opportunities for growth that may be afforded. This is especially important when considering young Friends. In our meetings for business and in all the duties connected with them, we are charged to make conscientious use of our gifts.<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Advices, 2</em>',

'In meetings for business, work and worship together with patience and warm affection for each other, aware of the peaceable spirit of the light of Truth. A majority decision or even consensus is not the goal. In waiting patiently for divine guidance, Friends\' experience is that the way that leads to unity will open.<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Advices, 3</em>',

'Those who speak in meetings for business are advised to feel free to express their views but to refrain from pressing them unduly, avoiding contentiousness, obstinacy, and the urge to control. Seek the leadings of the Light and admit the possibility of error. A \"third way\" may be needed in order for Truth to emerge and a sense of the meeting to be reached.<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Advices, 4</em>',

'A deep and seeking silence can help reconcile seemingly opposing points of view. Be willing to wait upon God as long as may be necessary. By holding division and disruption in the Light, meetings may shift toward stronger and more creative solutions.<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Advices, 5</em>',

'Are our monthly meetings held in the spirit of a meeting for worship in which we, in love and mutual respect, seek divine guidance?<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Queries, 1</em>',

'How well do our meetings for business lead to a corporate search for and revelation of the Light?<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Queries, 2</em>',

'How effectively do members of the meeting temper and strengthen individuals\' leadings?<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Queries, 3</em>',

'As difficult problems arise, are we careful to meet them in a spirit of love and humility with minds receptive to creative solutions? Do we avoid pressure of time, neither unnecessarily prolonging nor unduly curtailing full discussion?<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Queries, 4</em>',

'Are we aware that we speak through inaction as well as action?<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Queries, 5</em>',

'Are we prepared to let go of our individual desires and let the Holy Spirit lead us to unity? Do we accept with grace a decision of the meeting with which we are not entirely in agreement?<br /><em>Intermountain Yearly Meeting, Monthly Meeting, Queries, 6</em>',

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

'Persons ceasing to attend meetings are to be spoken to. Persons who walk disorderly are to be spoken to in private, then before two or three witnesses; then, if necessary, the matter is to be reported to the Church. The Church is to reprove them for their disorderly walking, and, if they do not reform, the case is to be sent in writing \"to some whom the Lord hath raised up in the power of the Spirit of the Lord to be fathers His children to gather in the light\" so that the thing may be known to the body and be determined in the light.<br /><em>Advices from the Elders at Balby (1656), advice number 3</em>',

'Every meeting to keep records of births, or of burials of the dead that died in the Lord. Burials to be conducted according to scripture, and not after customs of \"heathen.\"<br /><em>Advices from the Elders at Balby (1656), advice number 8</em>',

'Have we built unity for important steps of faith, asking for church-wide prayer and congregational feedback?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 4</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var quaker_business = "<h2>Quaker business</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=quaker_business;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}