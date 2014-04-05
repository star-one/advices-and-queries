// Jesus
function updateJesus() {
var strings = [
'The Religious Society of Friends has its roots in Christianity, and has always found inspiration in the life and teachings of Jesus. How do you interpret your faith in the light of this heritage? Are you following the example of love in action shown by Jesus? Are you learning from his life of compassion the reality and cost of obedience to God? How does his closeness to God challenge and inspire you in the way you live?<br><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, A3',

'Do you live in vital relationship with God, trusting in Jesus Christ as your saving Lord and obeying the leadings of the Holy Spirit? Is Christ\'s presence evident in your life?<br /><em>Northwest Yearly Meeting, Query 1</em>',

'The Religious Society of Friends is rooted in Christianity and has always found inspiration in the life and teachings of Jesus. How do you interpret your faith in the light of this heritage? How does Jesus speak to you today? Are you following Jesus\' example of love in action? Are you learning from his life the reality and cost of obedience to God? How does his relationship with God challenge and inspire you?<br /><em>Britain Yearly Meeting, Advices and Queries, number 4',

'Have you given Christ control of all your activities, entertainment and imagination?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 3</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var jesus = "<h2>Jesus</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=jesus;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}