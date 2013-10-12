// Diversity
function updateDiversity() {
var strings = [
'Do you welcome the diversity of culture, language and expressions of faith in our yearly meeting and in the world community of Friends? Seek to increase your understanding and to gain from this rich heritage and wide range of spiritual insights. Uphold your own and other yearly meetings in your prayers.<br /><em>Britain Yearly Meeting, Advices and Queries, number 16</em>',

'Do you respect that of God in everyone though it may be expressed in unfamiliar ways or be difficult to discern? Each of us has a particular experience of God and each must find the way to be true to it. When words are strange or disturbing to you, try to sense where they come from and what has nourished the lives of others. Listen patiently and seek the truth which other people\'s opinions may contain for you. Avoid hurtful criticism and provocative language. Do not allow the strength of your convictions to betray you into making statements or allegations that are unfair or untrue. Think it possible that you may be mistaken.<br /><em>Britain Yearly Meeting, Advices and Queries, number 17',

'Respect the wide diversity among us in our lives and relationships. Refrain from making prejudiced judgments about the life journeys of others. Do you foster the spirit of mutual understanding and forgiveness which our discipleship asks of us? Remember that each one of us is unique, precious, a child of God.<br /><em>Britain Yearly Meeting, Advices and Queries, number 22</em>',

'Do you respect that of God in every person? Do you search yourself for and strive to eliminate prejudices such as those related to race, religion, gender, age, sexual orientation and economic condition? In what ways do you accept and appreciate differences among your friends and associates? Do you avoid exploiting or manipulating others to accomplish ends, however worthy?<br /><em>Baltimore Yearly Meeting, The Queries, number 7</em>',

];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var diversity = "<h2>Diversity</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=diversity;
  
  scroll(0,0)
}