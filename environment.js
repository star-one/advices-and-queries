// The environment
function updateEnvironment() {
var strings = [
'We need to respect, revere and cooperate with other life systems on our planet. The earth\'s diverse riches are not ours to exploit. Seek reverence for life and a sense of wonder at God\'s continuing presence in all of creation. Do you work to conserve the earth\'s beauty and resources, both now and in the future, for the many people who depend on this planet and the many other species that share it?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E14</em>',

'We do not own the world, and its riches are not ours to dispose of at will. Show a loving consideration for all creatures, and seek to maintain the beauty and variety of the world. Work to ensure that our increasing power over nature is used responsibly, with reverence for life. Rejoice in the splendour of God\'s continuing creation.<br /><em>Britain Yearly Meeting, Advices and Queries, number 42</em>',

'Do you endeavor to live in harmony with nature, avoiding pollution and the destruction of our environment? What are you doing about your use of the world\'s irreplaceable resources? Are you concerned for family and population planning so that future generations will be able to live on the resources available to them?<br /><em>Ohio Valley Yearly Meeting, Tenth query</em>',

'Are you concerned for responsible use of natural resources and their nurture for future generations? Do you try to avoid wasteful consumption and pollution? Do you seek to preserve the beauty and balance of God\'s world?<br /><em>Baltimore Yearly Meeting, The Queries, number 12</em>',

'As a Christian steward, do you treat the earth with respect and with a sense of God\'s splendor in creation, guarding it against abuse by greed, misapplied technology, or your own carelessness?<br /><em>Northwest Yearly Meeting, Query 19</em>',

'Do we support measures to avoid pollution of air and water? Do we support measures to establish the conservation and right use of natural resources?<br /><em>New York Yearly Meeting, query number 10</em>',

'All life is interrelated. Each individual plant and animal has its own needs, and is important to others. Many species in Australia and worldwide are now extinct and many more are endangered. Do you treat all life with respect, recognizing a particular obligation to those animals we breed and maintain for our own use and enjoyment? In order to secure the survival of all, including ourselves, are you prepared to change your ideas about who you are in relation to your environment and every living thing in it?<br /><em>Australia Yearly Meeting, Advices and Queries, number 44</em>',

'The land of Australia is not our possession. We are no more than temporary guardians of it; neither the first nor, probably, the last. In the brief time of European settlement, vast areas of this country have been damaged. Do you try to live in harmony with the land, knowing that you are part of it? Do you protect and husband its water and other resources? Do you look with respect on the claims and rights of others to share in the wealth and freedoms of Australians?<br /><em>Australia Yearly Meeting, Advices and Queries, number 46</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var environment = "<h2>The environment</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=environment;
  
  scroll(0,0)
}