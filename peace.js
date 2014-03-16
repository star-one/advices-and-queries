// Peace
function updatePeace() {
var strings = [
'Our peace testimony invites us to live “in the virtue of that life and power which takes away the occasion of all wars”. Consider whether your way of life might in some way benefit from or rely on violence. What are you doing to build a more peaceful world?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E12</em>',

'Seek to recognise in yourself the emotions that lie at the root of conflict. In industrial strife, racial enmity and international tension, work to foster understanding between individuals, groups and nations. Stand firm against people who commit or prepare to commit violence. Seek that of God in those who oppose you.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E13</em>',

'We are called to live \'in the virtue of that life and power that takes away the occasion of all wars\'. Do you faithfully maintain our testimony that war and the preparation for war are inconsistent with the spirit of Christ? Search out whatever in your own way of life may contain the seeds of war. Stand firm in our testimony, even when others commit or prepare to commit acts of violence, yet always remember that they too are children of God.<br /><em>Britain Yearly Meeting, Advices & Queries, number 31</em>',

'Bring into God\'s light those emotions, attitudes and prejudices in yourself which lie at the root of destructive conflict, acknowledging your need for forgiveness and grace. In what ways are you involved in the work of reconciliation between individuals, groups and nations?<br /><em>Britain Yearly Meeting, Advices & Queries, number 32</em>',

'Do you live in that life and power which takes away the occasion of violent conflict, and with God\'s help work for reconciliation between individuals, groups and nations? Do you faithfully maintain our witness that all war, or preparation for it, is inconsistent with the spirit and teaching of Christ?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 7</em>',

'Do you live in the life and power which takes away the occasion for all wars? Do you, on Christian principles, refuse to participate in or cooperate with all military effort? Do you work actively for peace and the removal of the causes of wars? Do you endeavor to cultivate good will, mutual understanding and equal opportunities for all races, creeds and nations? Have you examined your life style and possessions to make sure that the seeds of war are not found within them?<br /><em>Ohio Valley Yearly Meeting, Eleventh query</em>',

'Do you endeavor to live "in virtue of that life and power which takes away the occasion of all wars"? Do you work to make your peace testimony a reality in your life and in your world? Do you weigh your day-to-day activities for their effect on peace-keeping, conflict resolution and the elimination of violence? Are you working toward eliminating aggression at all levels, from the personal to the international?<br /><em>Baltimore Yearly Meeting, The Queries, number 10</em>',

'Do you observe and teach the Friends testimony against military training and service, making clear that war is incompatible with the spirit and teachings of the Gospel? Do you find appropriate ways to work for peace?<br /><em>Northwest Yearly Meeting, Query 20</em>',

'War and Violence: It was the belief of the early Christians, and also the testimony of the Society of Friends, that war and fighting are forbidden to the subjects of Christ\'s peaceable reign. We too reject participation in war, whether offensive or defensive, along with activities that contribute to war, such as the making of weapons, and membership in or trading with military organizations. In the light of Christ\'s commandment to love our neighbors, including our enemies, we are to show respect for the life and well-being of all people and to refrain from doing violence to anyone, with or without the sanction of civil government. If wronged we should not indulge the desire for retaliation, since Christ teaches us to return good for evil.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Friends are earnestly cautioned against the taking of arms against any person, since \"all outward wars and strife and fightings with outward weapons\" are contrary to our Christian testimony. Friends should beware of supporting preparations for war even indirectly, and should examine in this light such matters as non-combatant military service, cooperation with conscription, employment or investment in war industries, and voluntary payment of war taxes. When their actions are carefully considered, Friends must be prepared to accept the consequences of their convictions. Friends are advised to maintain our testimony against war by endeavoring to exert an influence in favor of peaceful principles and the settlement of all differences by peaceful methods. They should lend support to all that strengthens international friendship and understanding and give active help to movements that substitute cooperation and justice for force and intimidation.<br /><em>New York Yearly Meeting, advice number 14</em>',

'Do we maintain Friends\' testimony against war? Do we \"live in the virtue of that life and power which takes away the occasion of all wars\"? Are we exerting our influence in favor of settlement of all differences by truly nonviolent methods? Do we strive to transmit to everyone an understanding of the basis of our peace testimony?<br /><em>New York Yearly Meeting, query number 13</em>',

'Do we live in the life and power which takes away the occasion of all wars? Do we, on Christian principles, refuse to participate in or to cooperate with the military effort? Do we work actively for peace and the removal of the causes of war? Do we endeavor to cultivate good will, mutual understanding, and equal opportunities for all people?<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, 6th query</em>',

'Be faithful in maintaining your testimony against all war as inconsistent with the Spirit and teaching of Christ. Live in the Life and Power that takes away the occasions of all wars and strife. Seek to take your part in the ministry of reconciliation between individuals, groups, and nations. Let the law of kindness know no limits. Show a loving consideration for all people.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 2</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var peace = "<h2>Peace</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=peace;
  
  scroll(0,0)
}