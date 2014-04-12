// The environment
function updateEnvironment() {
var strings = [
'A holistic or hallowing way of life doesn\'t grow out of right views. It is born from life in the land rather than ecology; only those who live by fitting into the land can learn to fit into the land harmoniously. (Jim Corbett, Sanctuary for All Life, 2005)<br /><em>Intermountain Yearly Meeting, Harmony with Nature</em>',

'The environmental crisis is at root a spiritual and religious crisis; we are called to look again at the real purpose of being on this earth. (London Yearly Meeting, 1988 in Quaker Faith & Practice of Britain Yearly Meeting, 1993, 25.02)<br /><em>Intermountain Yearly Meeting, Harmony with Nature</em>',

'Our concern for peace and the environment arises from the recognition of the sacredness of all creation and the presence of the Divine in each person. We are called to embrace, cherish, and protect all of creation. (Genie Durland, 2006)<br /><em>Intermountain Yearly Meeting, Harmony with Nature</em>',

'The produce of the earth is a gift from our gracious creator to the inhabitants, and to impoverish the earth now to support outward greatness appears to be an injury to the succeeding age. (John Woolman, 1772 in Quaker Faith & Practice of Britain Yearly Meeting, 25.01)<br /><em>Intermountain Yearly Meeting, Harmony with Nature</em>',

'Implicit in our testimony on simplicity is an understanding that we will not take more than we need - particularly if it means depriving others, including future generations, of their basic needs.<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Advices, 1</em>',

'The earth is not in bondage to us nor are its riches ours to dispose of at will. We recognize that we are part of the natural world. Humankind is not a species to which all of creation is subservient. Rather, it is one of many interrelated and interdependent facets of a creation more vast than human understanding can grasp.<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Advices, 2</em>',

'Part of understanding one\'s place in the world is forming right relationships with things. Such relationships are as much a consequence of observation as they are the product of activity. Let us exercise our power over nature responsibly, with due reverence for life. Let us strive to show loving consideration for all creation and seek to enhance the beauty and variety that surrounds us.<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Advices, 3</em>',

'Truth is revealed in diversity if we give way for its expression. Rejoice in the splendor of the earth\'s continuing creation, for it is that of God speaking.<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Advices, 4</em>',

'How do we inform ourselves about how our style of living affects the global economy and the environment?<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Queries, 1</em>',

'How do we exercise our respect for the balance of nature? Are we careful to avoid poisoning the earth, the air, and the water? Do we use the world\'s resources with care and consideration for future generations and with respect for all life? Do we recycle all that we can?<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Queries, 2</em>',

'How do we encourage environmental responsibility within our community?<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Queries, 3</em>',

'How do we live in accord with our sense of God in all creation?<br /><em>Intermountain Yearly Meeting, Harmony with Nature, Queries, 4</em>',

'As Friends, and as members of other groups, we seek to apply the same spirit to the use and contribution of our corporate resources. We are obliged to cherish the earth and to walk gently upon it, recognizing that it is not ours to own or to dispose of at will. We are to protect all its resources in a spirit of humble stewardship, committed to the right sharing of these resources among all peoples and creatures of the world.<br /><em>Intermountain Yearly Meeting, Stewardship, Advices, 3</em>',

'Friends show a loving consideration for all living things, cherishing the beauty and wonder of God\'s creation.<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Advices, 6</em>',

'Preserving the quality of life on Earth calls forth all of our spiritual resources. Listening to and heeding the leadings of the Holy Spirit can help us develop qualities which enable us to become more sensitive to all life.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Stewardship</em>',

'We do not own the world, and its riches are not ours to dispose of at will. Show a loving consideration for all creatures, and seek to maintain the beauty and variety of the world. Work to ensure that our increasing power over nature is used responsibly, with reverence for life. Rejoice in the splendour of God\'s continuing creation.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Stewardship</em>',

'Are we concerned that humanity\'s increasing power over nature should not be used irresponsibly, but with the reverence for life and with a sense of the splendor of God\'s continuing creation?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Stewardship</em>',

'Do we endeavor to live in harmony with nature? Are we careful in our stewardship of the world\'s irreplaceable resources?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Stewardship</em>',

'How can we nurture reverence and respect for life? How can we become more fully aware of our interdependent relationship with the rest of creation?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Stewardship</em>',

'It would go a long way to caution and direct people in their use of the world, that they were better studied and knowing in the Creation of it. For how could [they] find the confidence to abuse it, while they should see the Great Creator stare them in the face, in all and every part thereof? William Penn, Some Fruits of Solitude, 1693<br /><em>Pacific Yearly Meeting, Advices and Queries, Harmony with Creation, Advices</em>',

'God is revealed in all Creation. We humans belong to the whole interdependent community of life on earth. Rejoice in the beauty, complexity, and mystery of creation, with gratitude to be part of its unfolding. Take time to learn how this community of life is organized and how it interacts. Live according to principles of right relationship and right action within this larger whole.<br /><em>Pacific Yearly Meeting, Advices and Queries, Harmony with Creation, Advices</em>',

'Be aware of the influence humans have on the health and viability of life on earth. Call attention to what fosters or harms Earth\'s exquisite beauty, balances and interdependencies. Guided by Spirit, work to translate this understanding into ways of living that reflect our responsibility to one another, to the greater community of life, and to future generations.<br /><em>Pacific Yearly Meeting, Advices and Queries, Harmony with Creation, Advices</em>',

'In what ways do I express gratitude for the wondrous expressions of life on Earth? Do I consider the damage I might do to the Earth\'s vulnerable systems in choices I make of what I do, what I buy, and how I spend my time?<br /><em>Pacific Yearly Meeting, Advices and Queries, Harmony with Creation, Queries for Individuals</em>',

'In our witness for the global environment, are we careful to consider justice and the well-being of the world\'s poorest people? Does our way of life threaten the viability of life on Earth?<br /><em>Pacific Yearly Meeting, Advices and Queries, Harmony with Creation, Queries for the Meeting</em>',
 
'We need to respect, revere and cooperate with other life systems on our planet. The earth\'s diverse riches are not ours to exploit. Seek reverence for life and a sense of wonder at God\'s continuing presence in all of creation. Do you work to conserve the earth\'s beauty and resources, both now and in the future, for the many people who depend on this planet and the many other species that share it?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E14</em>',

'We do not own the world, and its riches are not ours to dispose of at will. Show a loving consideration for all creatures, and seek to maintain the beauty and variety of the world. Work to ensure that our increasing power over nature is used responsibly, with reverence for life. Rejoice in the splendour of God\'s continuing creation.<br /><em>Britain Yearly Meeting, Advices and Queries, number 42</em>',

'Do you endeavor to live in harmony with nature, avoiding pollution and the destruction of our environment? What are you doing about your use of the world\'s irreplaceable resources? Are you concerned for family and population planning so that future generations will be able to live on the resources available to them?<br /><em>Ohio Valley Yearly Meeting, Tenth query</em>',

'Are you concerned for responsible use of natural resources and their nurture for future generations? Do you try to avoid wasteful consumption and pollution? Do you seek to preserve the beauty and balance of God\'s world?<br /><em>Baltimore Yearly Meeting, The Queries, number 12</em>',

'As a Christian steward, do you treat the earth with respect and with a sense of God\'s splendor in creation, guarding it against abuse by greed, misapplied technology, or your own carelessness?<br /><em>Northwest Yearly Meeting, Query 19</em>',

'Do we support measures to avoid pollution of air and water? Do we support measures to establish the conservation and right use of natural resources?<br /><em>New York Yearly Meeting, query number 10</em>',

'All life is interrelated. Each individual plant and animal has its own needs, and is important to others. Many species in Australia and worldwide are now extinct and many more are endangered. Do you treat all life with respect, recognizing a particular obligation to those animals we breed and maintain for our own use and enjoyment? In order to secure the survival of all, including ourselves, are you prepared to change your ideas about who you are in relation to your environment and every living thing in it?<br /><em>Australia Yearly Meeting, Advices and Queries, number 44</em>',

'The land of Australia is not our possession. We are no more than temporary guardians of it; neither the first nor, probably, the last. In the brief time of European settlement, vast areas of this country have been damaged. Do you try to live in harmony with the land, knowing that you are part of it? Do you protect and husband its water and other resources? Do you look with respect on the claims and rights of others to share in the wealth and freedoms of Australians?<br /><em>Australia Yearly Meeting, Advices and Queries, number 46</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var environment = "<h2>The environment</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=environment;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}