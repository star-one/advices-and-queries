// Community
function updateCommunity() {
var strings = [
'Live in love, as Christian brethren, ready to be helpful one to another, and sympathizing with each other in the trials and afflictions of life. Watch over one another for good, manifesting an earnest desire that each may be well grounded in the Light of Christ.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'How can we make the meeting a community in which each person is accepted and nurtured, and strangers are welcome? Seek to know one another in the things which are eternal, bear the burden of each other\'s failings and pray for one another. As we enter with tender sympathy into the joys and sorrows of each other\'s lives, ready to give help and to receive it, our meeting can be a channel for God\'s love and forgiveness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 18</em>',

'Do you give sufficient time to sharing with others in the meeting, both newcomers and long-time members, your understanding of worship, of service, and of commitment to the Society\'s witness? Do you give a right proportion of your money to support Quaker work<br /><em>Britain Yearly Meeting, Advices and Queries, number 20</em>',

'Do you cherish an understanding and forgiving spirit? Do you avoid unkind gossip and the spreading of rumour? Do you avoid damaging the reputation of others? Do you cultivate an appreciation of each individual\'s worth?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 6</em>',

'Is your meeting one to which all can feel a sense of belonging, taking their full share in its concerns and practical work? Do you as a meeting maintain a loving and watchful care over all who worship with you including those who are unable to attend?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 9</em>',

'Are love and unity fostered among you? Do you manifest a forgiving spirit and a care for the reputation of others? If differences threaten harmony among your members, is prompt action taken in a spirit of meekness and love? Do you visit one another frequently? Do you keep in touch with inactive and distant members?<br /><em>Ohio Valley Yearly Meeting, Third query</em>',

'Are love and harmony within the Meeting community fostered by a spirit of open sharing? Do you endeavor to widen your circle of friendships within the Meeting, seeking to know persons of all ages and at all stages of the spiritual journey? Does the Meeting provide for the spiritual refreshment of all members and attenders? Do Friends provide spiritual and practical care for the elderly, the lonely, and others with special needs?<br /><em>Baltimore Yearly Meeting, The Queries, number 3</em>',

'As followers of Christ do you love and respect each other? Do patience and consideration govern your interactions; and when differences arise, do you resolve them promptly in a spirit of forgiveness and understanding? Are you careful with the reputation of others?<br /><em>Northwest Yearly Meeting, Query 6</em>',

'Backbiting: Conscious of the serious harm that can be done to persons by defamatory gossip, and the tendency of such talk to create dissension and disunity, Friends of Truth are urged to watch over themselves and each other, to discourage backbiting. The order prescribed by Christ should be observed: \"If your brother sins against you, go and tell him his fault between you and him alone. If he listens to you, you have gained your brother. But if he does not listen, take one or two others along with you, that every word may be confirmed by the evidence of two or three witnesses. If he refuses to listen to them, tell it to the church; and if he refuses to listen even to the church, let him be to you as a Gentile and a tax collector.\"<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var community = "<h2>Community</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=community;
  
  scroll(0,0)
}