// Equality and social justice
function updateEquality() {
var strings = [
'Have we honored and protected those neglected by society – the unborn, poor, prisoners, orphans, widows, abandoned, disabled, disadvantaged, addicted, institutionalized, homeless, and/or hungry? Since we cannot do everything, have we done something?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 6</em>',

'Do you speak out for justice and morality, and against oppression, exploitation, and public wrong? Do you recognize the equality of persons regardless of race, gender, or economic status?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Equality</em>',

'Do we reverence that of God in every human being with concern for the needs of each individual? Are we seeking to rectify existing social injustice and racial discrimination in our local communities and in the world at large?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Equality</em>',

'In the words of William Penn, \'True godliness doesn\'t draw men out of the world, but enables them to live better in it and excites their endeavors to mend it\'. Elsewhere he commented: \'It is a reproach to religion and government to suffer so much poverty and excess\'.<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Advices</em>',

'Poverty within a wealthy society is unjust, cruel, and often linked to skin color, gender, and language. We must examine our own privilege and role in the economic order that deepens this disparity. Friends should be alert to oppression and injustice, and persistent in working against them.<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Advices</em>',

'How do we attend to the suffering of others in our local community, in our state and nation, and in the world community? Do we try to understand the causes of suffering, and do we address them as a Meeting? How do we, individually and as a Meeting, support the organizations that work to bring the testimonies of Friends into reality in our society?<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Queries for the Meeting</em>',

'Do not be content to accept society as it is. Seek to discover the causes of social unrest, injustice, poverty and fear. Bear witness to the humanity of all people. Try to discern the new growing points in society. Are you alert to practices here and throughout the world that discriminate against people on the basis of who or what they are or because of their beliefs? Do you work for a social, constitutional and economic order which will allow each person to develop fully and cooperation by all?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E8</em>',

'Remember our obligation to honour the status of Maori as the indigenous people of Aotearoa and partners in the Treaty of Waitangi. Seek to discover the effects of the colonial and postcolonial history of Aotearoa. Work to ensure that the sharing of power and resources in our society is a genuine partnership. Do you acknowledge the values that the Maori world can offer? How can we work together as equals, with mutual understanding and respect?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E9</em>',

'We are convinced of the equal worth and value of every individual. Do you appreciate the huge diversity of human personality? Do you take into account the different experiences that people may have had in their lives and the impact this may have on them? How can you help end social practices based on prejudice or fear, and systems which involve oppression of particular groups because of their gender, race, religion, class, age, sexual orientation or other characteristics?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E1</em>',

'Are you alert to practices here and throughout the world which discriminate against people on the basis of who or what they are or because of their beliefs? Bear witness to the humanity of all people, including those who break society\'s conventions or its laws. Try to discern new growing points in social and economic life. Seek to understand the causes of injustice, social unrest and fear. Are you working to bring about a just and compassionate society which allows everyone to develop their capacities and fosters the desire to serve?<br /><em>Britain Yearly Meeting, Advices & Queries, number 32</em>',

'Do you promote social justice and make your life a testimony to fair dealing? Do you seek to understand and appreciate differing cultures and social values? Do you support fair treatment of all regardless of race, gender, age and other differences? Are you concerned for those in our society who are disadvantaged? Do you take your full share of civic responsibility by voting and giving service? Do you oppose the use of land, labor, technology and capital for human exploitation or in ways destructive to other living things?<br /><em>Baltimore Yearly Meeting, The Queries, number 9</em>',

'Do you speak out for justice and morality, and against oppression, exploitation, and public wrong? Do you recognize the equality of persons regardless of race, gender, or economic status?<br /><em>Northwest Yearly Meeting, Query 18</em>',

'Friends are advised to work toward removing the causes of misery and suffering. They are urged to support efforts to overcome racial, social, economic, and educational discrimination; to bear testimony against all forms of oppression; to exert influence for such treatment of prisoners as may help reconstruct their lives; and to work for the abolition of the death penalty.<br /><em>New York Yearly Meeting, advice number 7</em>',

'Do we foster reverence for life? Do we strive to find, to understand, and to remove causes of misery and suffering? Do we, in loving concern, extend assistance to those who require it?<br /><em>New York Yearly Meeting, query number 11</em>',

'Do we acknowledge the oneness of humanity and foster a loving spirit toward all people? Do we honor Friends\' traditional testimony that men and women are equal? How do we work to make these ideals a reality?<br /><em>New York Yearly Meeting, query number 12</em>',

'For thousands of years before 1788, this country was lived in by various aboriginal peoples, at one with the land. Through colonization, much of their land and culture has been lost to them and their children have been taken from them; they have suffered the injustice of racism, and material, psychological and spiritual deprivation. Can we acknowledge with sorrow the loss of life and the on-going destruction of their languages, families and communities, appreciate the depth and strength of aboriginal beliefs and values and learn from aboriginal people and accept the gifts they have for all of us? Can we all as Australians work towards living together as equals, with mutual understanding and respect?<br /><em>Australia Yearly Meeting, Advices and Queries, number 18</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var equality = "<h2>Equality and social justice</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=equality;
  
  scroll(0,0)
}