// Community
function updateCommunity() {
var strings = [
'Live in love, as Christian brethren, ready to be helpful one to another, and sympathizing with each other in the trials and afflictions of life. Watch over one another for good, manifesting an earnest desire that each may be well grounded in the Light of Christ.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'How can we make the meeting a community in which each person is accepted and nurtured, and strangers are welcome? Seek to know one another in the things which are eternal, bear the burden of each other\'s failings and pray for one another. As we enter with tender sympathy into the joys and sorrows of each other\'s lives, ready to give help and to receive it, our meeting can be a channel for God\'s love and forgiveness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 18</em>',

'Do you give sufficient time to sharing with others in the meeting, both newcomers and long-time members, your understanding of worship, of service, and of commitment to the Society\'s witness? Do you give a right proportion of your money to support Quaker work<br /><em>Britain Yearly Meeting, Advices and Queries, number 20</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var community = randomString;

  var txt=document.getElementById("query")
  txt.innerHTML=community;
}