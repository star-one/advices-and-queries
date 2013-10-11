// Community
function updateCommunity() {
var strings = [
'Live in love, as Christian brethren, ready to be helpful one to another, and sympathizing with each other in the trials and afflictions of life. Watch over one another for good, manifesting an earnest desire that each may be well grounded in the Light of Christ.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'How can we make the meeting a community in which each person is accepted and nurtured, and strangers are welcome? Seek to know one another in the things which are eternal, bear the burden of each other\'s failings and pray for one another. As we enter with tender sympathy into the joys and sorrows of each other\'s lives, ready to give help and to receive it, our meeting can be a channel for God\'s love and forgiveness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 18</em>',

'Do you give sufficient time to sharing with others in the meeting, both newcomers and long-time members, your understanding of worship, of service, and of commitment to the Society\'s witness? Do you give a right proportion of your money to support Quaker work<br /><em>Britain Yearly Meeting, Advices and Queries, number 20</em>',

'Do you cherish an understanding and forgiving spirit? Do you avoid unkind gossip and the spreading of rumour? Do you avoid damaging the reputation of others? Do you cultivate an appreciation of each individual\'s worth?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 6</em>',

'Is your meeting one to which all can feel a sense of belonging, taking their full share in its concerns and practical work? Do you as a meeting maintain a loving and watchful care over all who worship with you including those who are unable to attend?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 9</em>',

'Are love and unity fostered among you? Do you manifest a forgiving spirit and a care for the reputation of others? If differences threaten harmony among your members, is prompt action taken in a spirit of meekness and love? Do you visit one another frequently? Do you keep in touch with inactive and distant members?<br /><em>Ohio Valley Yearly Meeting, Third query</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var community = "<h2>Community</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=community;
}