// Community
function updateCommunity() {
var strings = [
'Are ministers and elders in unity one with another, and with the meetings to which they belong? manifesting a religious concern for the advancement of truth, and the support of our discipline?<br /><em>Rocky Mountain Yearly Meeting, Queries for Ministers and Elders, 3</em>',

'Have we honored the counsel of our elders and pastors? When we were not in unity, did we find the mind of Christ through discussion and prayer rather than through politicking and voting?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 9</em>',

'Have we encouraged and built each other up, speaking only what is helpful? Have we resolved conflict effectively by avoiding gossip and encouraging critics to talk with the right person in the right spirit?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 10</em>',

'Have we encouraged people in the church to use their spiritual gifts and to work together in teams for the cause of Christ?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 11</em>',
 
'Have we honored our pastors and staff with love and appreciation, making their ministry a joy, not a drudgery?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 8</em>',

'Do we cherish a forgiving spirit, and strive to "walk in love, as Christ also hath loved us"? Is each one of us careful for the reputation of others? Are we ever mindful to love our neighbor as ourselves? If differences threaten to disrupt the Christian harmony between the members, is prompt action taken?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Peace</em>',

'As followers of Christ do you love and respect each other? Do patience and consideration govern your interactions; and when differences arise, do you resolve them promptly in a spirit of forgiveness and understanding? Are you careful with the reputation of others?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Equality</em>',

'Meetings for Worship and Business are the center of our spiritual community. There, as we come to know each other in the Spirit, we build the \'beloved community\'.<br /><em>Pacific Yearly Meeting, Advices and Queries, The Meeting Community, Advices</em>',

'Mutual respect and care in the Meeting form the foundation from which we can test, support, and exercise leadings of the Spirit. At its best, the Meeting community provides a framework for us to learn and practice mutual care, which strengthens us as we act in the world.<br /><em>Pacific Yearly Meeting, Advices and Queries, The Meeting Community, Advices</em>',

'All members of the Meeting community should share in the care of one another.While respecting privacy, we must be aware of and sensitive to each other\'s needs. We must also be willing to ask for assistance when we are in need.<br /><em>Pacific Yearly Meeting, Advices and Queries, The Meeting Community, Advices</em>',

'Do I strive to be inclusive in my relationships within the Meeting? Do I care for the reputation of others, refraining from gossip or disparaging remarks? Am I committed to the difficult work of forgiveness, and affirming God\'s love for the whole community?<br /><em>Pacific Yearly Meeting, Advices and Queries, The Meeting Community, Queries for Individuals</em>',

'How are love and unity maintained among us? Do we practice the art of listening, even beyond words? How have we been sensitive to the personal needs and difficulties of members and attenders, young and old? Do we visit one another in our homes and keep in touch with distant members?<br /><em>Pacific Yearly Meeting, Advices and Queries, The Meeting Community, Queries for the Meeting</em>',
 
'Do we open our thoughts, beliefs, and deep understandings to our children and others who share our lives and our hospitality? Do we provide our children and young adults with a framework for active, ongoing participation in the Meeting?<br /><em>Pacific Yearly Meeting, Advices and Queries, Personal Relationships, Queries for the Meeting</em>',

'Do I make my home a place of friendliness, joy, and peace, where residents and visitors feel God’s presence?<br /><em>Pacific Yearly Meeting, Advices and Queries, Personal Relationships, Queries for Individuals</em>',

'What are we doing to help people of various races, cultures, and backgrounds feel at home among us and we among them? How do we encourage newcomers to return and participate in activities of the Meeting?<br /><em>Pacific Yearly Meeting, Advices and Queries, Reaching Out, Queries for the Meeting</em>',

'How can you make your home a place of friendship,refreshment and laughter, a peaceable place where the Spirit becomes more real to all who are there? Do you recognise the needs and gifts of each member of your family and household, including your own?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D15</em>',

'In our local Meeting, how can we build a community in which each person is accepted and nurtured, and newcomers are welcomed?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D3</em>',

'Both within our family of Friends and in our wider communities, we need sensitivity to each other and to our various cultural roots. What joys and what responsibilities does this bring? Do we aspire to an understanding of ourselves as people of Aotearoa/New Zealand and the South Pacific?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D4</em>',

'A caring Meeting can bring healing at times of difficulty or despair. Listen sensitively to what, although not clearly expressed, may be a cry for help. Are you available to help others, even at some cost to yourself? Are you willing to be helped, both practically and spiritually?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D5</em>',

'Cherish friendships so that you grow in depth, understanding and mutual respect. When we love, we may risk hurt as well as finding joy. When we experience great happiness or great pain, we may be more open to the working of the Spirit.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D6</em>',

'Are you patient and considerate, even towards people you don\'t like? Do you avoid and discourage unkind criticism and gossip?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D7</em>',

'Make time to learn about other people and their spiritual lives. Let your life speak. Do you use all opportunities for sharing, in a spirit of worship, what is spiritually meaningful in your life?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D1</em>',

'Be aware of each person in the Meeting. Enjoy and affirm Friends of all ages and backgrounds. Seek to move into a gathered silence in which you are open to one another.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B4</em>',

'Do we try to live as a society of friends in community with one another by acknowledging and responding to that of God in each other?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, A6</em>',

'Live in love, as Christian brethren, ready to be helpful one to another, and sympathizing with each other in the trials and afflictions of life. Watch over one another for good, manifesting an earnest desire that each may be well grounded in the Light of Christ.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'How can we make the meeting a community in which each person is accepted and nurtured, and strangers are welcome? Seek to know one another in the things which are eternal, bear the burden of each other\'s failings and pray for one another. As we enter with tender sympathy into the joys and sorrows of each other\'s lives, ready to give help and to receive it, our meeting can be a channel for God\'s love and forgiveness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 18</em>',

'Do you give sufficient time to sharing with others in the meeting, both newcomers and long-time members, your understanding of worship, of service, and of commitment to the Society\'s witness? Do you give a right proportion of your money to support Quaker work<br /><em>Britain Yearly Meeting, Advices and Queries, number 20</em>',

'Do you cherish an understanding and forgiving spirit? Do you avoid unkind gossip and the spreading of rumour? Do you avoid damaging the reputation of others? Do you cultivate an appreciation of each individual\'s worth?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 6</em>',

'Is your meeting one to which all can feel a sense of belonging, taking their full share in its concerns and practical work? Do you as a meeting maintain a loving and watchful care over all who worship with you including those who are unable to attend?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 9</em>',

'Are love and unity fostered among you? Do you manifest a forgiving spirit and a care for the reputation of others? If differences threaten harmony among your members, is prompt action taken in a spirit of meekness and love? Do you visit one another frequently? Do you keep in touch with inactive and distant members?<br /><em>Ohio Valley Yearly Meeting, Third query</em>',

'Are love and harmony within the Meeting community fostered by a spirit of open sharing? Do you endeavor to widen your circle of friendships within the Meeting, seeking to know persons of all ages and at all stages of the spiritual journey? Does the Meeting provide for the spiritual refreshment of all members and attenders? Do Friends provide spiritual and practical care for the elderly, the lonely, and others with special needs?<br /><em>Baltimore Yearly Meeting, The Queries, number 3</em>',

'As followers of Christ do you love and respect each other? Do patience and consideration govern your interactions; and when differences arise, do you resolve them promptly in a spirit of forgiveness and understanding? Are you careful with the reputation of others?<br /><em>Northwest Yearly Meeting, Query 6</em>',

'Backbiting: Conscious of the serious harm that can be done to persons by defamatory gossip, and the tendency of such talk to create dissension and disunity, Friends of Truth are urged to watch over themselves and each other, to discourage backbiting. The order prescribed by Christ should be observed: \"If your brother sins against you, go and tell him his fault between you and him alone. If he listens to you, you have gained your brother. But if he does not listen, take one or two others along with you, that every word may be confirmed by the evidence of two or three witnesses. If he refuses to listen to them, tell it to the church; and if he refuses to listen even to the church, let him be to you as a Gentile and a tax collector.\"<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'All are especially cautioned against any harshness of tone or manner when administering counsel or reproof, either privately or in meetings. Friends should speak truth with love, remembering that if they would do God\'s work, they must abide in God\'s love. Even a seeming harshness may check the beginnings of true repentance, and a lack of sympathy may cause harm where only good was intended.<br /><em>New York Yearly Meeting, advice number 15</em>',

'Are love and unity fostered among us? If differences arise, do we endeavor to reconcile them in a spirit of love and truth? Are we careful not to manipulate and exploit one another? Do we avoid talebearing, and are we careful of the reputation of others?<br /><em>New York Yearly Meeting, query number 4</em>',

'Do we make ourselves available in a tender and caring way when we sense a need for assistance in time of trouble? Do we trust each other enough to make our needs known to someone in our meeting?<br /><em>New York Yearly Meeting, query number 14</em>',

'Collections to be made for the poor, the relief of prisoners, and other necessary uses, the moneys to be carefully accounted for, and applied as made known by the overseers in each meeting.<br /><em>Advices from the Elders at Balby (1656), advice number 5</em>',

'Care to be taken \"for the families and goods of such as are called forth in the ministry, or are imprisoned for the Truth\'s sake; that no creature be lost for want of caretakers.\"<br /><em>Advices from the Elders at Balby (1656), advice number 6</em>',

'Needs of widows and fatherless to be supplied - such as can work and do not be admonished, and if they refuse to work, neither let them eat. The children of needy parents to be put to honest employment.<br /><em>Advices from the Elders at Balby (1656), advice number 12</em>',

'None to speak evil of another, nor grudge against another, nor put a stumbling-block in his brother\'s way.<br /><em>Advices from the Elders at Balby (1656), advice number 16</em>',

'None to be busybodies in others\' matters.<br /><em>Advices from the Elders at Balby (1656), advice number 17</em>',

'Christian moderation to be used towards all men.<br /><em>Advices from the Elders at Balby (1656), advice number 18</em>',

'Have we tried to squelch gossip, and instead encouraged the disgruntled to talk to the right person in the right spirit?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 5</em>',

'Have we dealt fairly with conflict and tried to bring about biblical reconciliation?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 6</em>',

'Do we cherish a forgiving spirit, and strive to \"walk in love, as Christ also hath loved us\"? Is each one of us careful for the reputation of others? Are we ever mindful to love our neighbor as ourselves? If differences threaten to disrupt the Christian harmony between the members, is prompt action taken?<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, 2nd query</em>',

'Live in love, as Christian brethren, ready to be helpful one to another. Rejoice together in the blessings of life; sympathize with each other in its trials. Know one another as fellow-workers in the things that endure. Watch over one another for good, praying that each may be a living member of the Church of Christ, and may grow in the knowledge of the love of God.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 14</em>',

];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var community = "<h2>Community</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=community;
  
  scroll(0,0)
}