// Equality and social justice
function updateEquality() {
var strings = [
'Are you alert to practices here and throughout the world which discriminate against people on the basis of who or what they are or because of their beliefs? Bear witness to the humanity of all people, including those who break society\'s conventions or its laws. Try to discern new growing points in social and economic life. Seek to understand the causes of injustice, social unrest and fear. Are you working to bring about a just and compassionate society which allows everyone to develop their capacities and fosters the desire to serve?<br /><em>Britain Yearly Meeting, Advices & Queries, number 32</em>',

'Do you promote social justice and make your life a testimony to fair dealing? Do you seek to understand and appreciate differing cultures and social values? Do you support fair treatment of all regardless of race, gender, age and other differences? Are you concerned for those in our society who are disadvantaged? Do you take your full share of civic responsibility by voting and giving service? Do you oppose the use of land, labor, technology and capital for human exploitation or in ways destructive to other living things?<br /><em>Baltimore Yearly Meeting, The Queries, number 9</em>',

'Do you speak out for justice and morality, and against oppression, exploitation, and public wrong? Do you recognize the equality of persons regardless of race, gender, or economic status?<br /><em>Northwest Yearly Meeting, Query 18</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var equality = "<h2>Equality and social justice</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=equality;
  
  scroll(0,0)
}