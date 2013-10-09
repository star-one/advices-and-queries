// Lifestyle
function updateLifestyle() {
var strings = [
'Observe simplicity and moderation in your deportment and attire, in the furniture of your houses, and in your manner or style of living.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Guard watchfully against the introduction into your households of publications of a hurtful tendency, and against such companionships, indulgences, and recreations as may in anywise interfere with the growth in grace. We earnestly advise all our members to refrain from the use of tobacco in every form, and to discourage its growth and the sale of its products, as well as the use of it by their children and all under their care.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Be aware of the attitude with which you receive all the material and cultural products of your society. Seek the beautiful and worthwhile in literary and recreational pursuits, being always sensitive to the encroachment of the banal, the degrading, or the violent.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Believing that meekness, moderation, and mercy are among the distinguishing traits of the Christian character, we are concerned to caution our members against the indulgence of passion, or the exercise of cruelty, even toward the brute creation.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var lifestyle = randomString;

  var txt=document.getElementById("query")
  txt.innerHTML=lifestyle;
}