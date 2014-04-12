// Jesus
function updateJesus() {
var strings = [
'Pattern your life after Jesus who proclaimed the Kingdom of God in both word and deed. We follow a Lord who came to serve, not to be served. Find opportunities to meet the material needs of those around you and to show compassion toward persons in all walks of life. Let love be genuine.<br /><em>Indiana Yearly Meeting, The Advices, Outreach</em>',

'Friends find their essential unity in the profound and exhilarating belief that Jesus Christ is our Risen Lord, present with us and able to teach his people himself. Obedience to the direct leading of God, through the Holy Spirit, is the obligation of faith. As Friends attempt to discern the will of God, they rely on the teachings of scripture and learn from Christ within as well as the continuing experience of the faith community. Reading the Advices is intended to help us keep all aspects of our lives under Divine guidance by reminding us how God has led Friends up to now.<br /><em>Indiana Yearly Meeting, The Advices, Introduction</em>',

'Watch with Christian tenderness over the opening minds of your children. Help them to understand the teachings of Jesus. Seek to awaken in them the love of Christ, and through example and training in self-control, to bring them to obedience to the law of God in their own hearts, that they may be joyful and willing in his service.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

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