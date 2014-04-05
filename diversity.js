// Diversity
function updateDiversity() {
var strings = [
'We are challenged to enter into fellowship with people of all faiths and philosophies, locally, regionally and globally so that we may work or worship together and cooperate for peace, justice and care of the planet. Are you open to understanding and acceptance of Quakers of diverse traditions worldwide? Are you open to understanding and acceptance of Christians of all denominations and people with other faiths and philosophies?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E11</em>',

'We all need a sense of achievement and selfworth. Are you able to value every individual, including yourself, irrespective of occupation or financial status? Are you striving to change society\'s attitudes to work and remuneration?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E2</em>',

'Do you welcome the diversity of culture, language and expressions of faith in our yearly meeting and in the world community of Friends? Seek to increase your understanding and to gain from this rich heritage and wide range of spiritual insights. Uphold your own and other yearly meetings in your prayers.<br /><em>Britain Yearly Meeting, Advices and Queries, number 16</em>',

'Do you respect that of God in everyone though it may be expressed in unfamiliar ways or be difficult to discern? Each of us has a particular experience of God and each must find the way to be true to it. When words are strange or disturbing to you, try to sense where they come from and what has nourished the lives of others. Listen patiently and seek the truth which other people\'s opinions may contain for you. Avoid hurtful criticism and provocative language. Do not allow the strength of your convictions to betray you into making statements or allegations that are unfair or untrue. Think it possible that you may be mistaken.<br /><em>Britain Yearly Meeting, Advices and Queries, number 17',

'Respect the wide diversity among us in our lives and relationships. Refrain from making prejudiced judgments about the life journeys of others. Do you foster the spirit of mutual understanding and forgiveness which our discipleship asks of us? Remember that each one of us is unique, precious, a child of God.<br /><em>Britain Yearly Meeting, Advices and Queries, number 22</em>',

'Do you respect that of God in every person? Do you search yourself for and strive to eliminate prejudices such as those related to race, religion, gender, age, sexual orientation and economic condition? In what ways do you accept and appreciate differences among your friends and associates? Do you avoid exploiting or manipulating others to accomplish ends, however worthy?<br /><em>Baltimore Yearly Meeting, The Queries, number 7</em>',

'Within our own, and in neighbouring countries, people of goodwill seek to know and to worship God in ways other than those of Christianity. Do we listen to their insights with open hearts and minds, recognizing that we do not possess all the Truth, but only a part of it? Do we think of these neighbours with acceptance? Do we seek knowledge and understanding of their beliefs and the Light which is theirs?<br /><em>Australia Yearly Meeting, Advices and Queries, number 35</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var diversity = "<h2>Diversity</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=diversity;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}