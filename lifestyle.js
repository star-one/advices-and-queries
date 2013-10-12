// Lifestyle
function updateLifestyle() {
var strings = [
'Observe simplicity and moderation in your deportment and attire, in the furniture of your houses, and in your manner or style of living.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Guard watchfully against the introduction into your households of publications of a hurtful tendency, and against such companionships, indulgences, and recreations as may in anywise interfere with the growth in grace. We earnestly advise all our members to refrain from the use of tobacco in every form, and to discourage its growth and the sale of its products, as well as the use of it by their children and all under their care.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Be aware of the attitude with which you receive all the material and cultural products of your society. Seek the beautiful and worthwhile in literary and recreational pursuits, being always sensitive to the encroachment of the banal, the degrading, or the violent.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Believing that meekness, moderation, and mercy are among the distinguishing traits of the Christian character, we are concerned to caution our members against the indulgence of passion, or the exercise of cruelty, even toward the brute creation.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Consider which of the ways to happiness offered by society are truly fulfilling and which are potentially corrupting and destructive. Be discriminating when choosing means of entertainment and information. Resist the desire to acquire possessions or income through unethical investment, speculation or games of chance.<br /><em>Britain Yearly Meeting, Advices and Queries, number 39</em>',

'In view of the harm done by the use of alcohol, tobacco and other habit-forming drugs, consider whether you should limit your use of them or refrain from using them altogether. Remember that any use of alcohol or drugs may impair judgment and put both the user and others in danger.<br /><em>Britain Yearly Meeting, Advices and Queries, number 40</em>',

'Try to live simply. A simple lifestyle freely chosen is a source of strength. Do not be persuaded into buying what you do not need or cannot afford. Do you keep yourself informed about the effects your style of living is having on the global economy and environment?<br /><em>Britain Yearly Meeting, Advices and Queries, number 41</em>',

'Is your way of life in keeping with the teaching of Jesus? Do you watch against conformity to commonly-accepted standards, and against the love of ease and self-indulgence which hinders your spiritual growth and service for Christ?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 4</em>',

'Do you keep to simplicity and moderation in your speech, your manner of living, and your pursuit of business? Are you careful to keep your business and your outward activities from absorbing time and energy that should be given to spiritual growth and to the service of your religious society? Are you just in your dealings and careful to fulfill your promises? Do you take care of such members as need aid, and assist them, when possible, to become self-supporting?<br /><em>Ohio Valley Yearly Meeting, Fourth query</em>',

'Do you examine thoroughly your behavior in regard to work, leisure, diet and the use of drugs, alcoholic beverages and tobacco, thus trying to avoid and to discourage practices that interfere with health, sensitivity or social responsibility? Remembering the parable of the talents, do you exercise fully those that God has given you? Do you endeavor to minister humbly and sensitively to the needs of others that they may attain their full potential?<br /><em>Ohio Valley Yearly Meeting, Fifth query</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var lifestyle = "<h2>Lifestyle</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=lifestyle;
  
  scroll(0,0)
}