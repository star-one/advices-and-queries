// Peace
function updatePeace() {
var strings = [
'Friends are advised to avoid activities and employment which involve taking human life. Take care not to nourish the seeds of war in your attitudes or in your possessions. Support Friends who suffer for the Truth that war is incompatible with the spirit of the gospel of Jesus Christ.<br /><em>Indiana Yearly Meeting, The Advices, Peace and Reconciliation</em>',

'Every human being is precious in the eyes of God, and has been given a measure of God\'s light (John 1:9). Seek to live in the virtue of that Life which takes away the occasion of war. Overcome evil with good.<br /><em>Indiana Yearly Meeting, The Advices, Peace and Reconciliation</em>',

'A good end cannot sanctify evil means; nor must we ever do evil, that good may come of it.... It is as great presumption to send our passion upon God\'s errands, as it is to palliate them with God\'s name.... We are too ready to retaliate, rather than forgive, or gain by love and information. And yet we could hurt no man that we believe loves us. Let us then try what Love will do: for if men did once see we love them, we should soon find they would not harm us. Force may subdue, but Love gains: and he that forgives first, wins the laurel. (William Penn, 1693, in Quaker Faith & Practice of Britain Yearly Meeting, 24.03)<br /><em>Intermountain Yearly Meeting, Peace</em>',

'As Friends, we are urged to identify the seeds of war within ourselves individually and in our way of life. Any element of fear, restlessness, discontent, unhappiness, and poverty of spirit can lead to violence and war. We are cautioned not to bury these feelings, but to acknowledge their presence, pinpoint their sources, and transform pain and anger into the power of positive action. Thus, we heal ourselves and become free and able stewards in the healing of others.<br /><em>Intermountain Yearly Meeting, Peace, Advices, 2</em>',

'We refuse to join in actions that denigrate others or lead to their victimization. Friends are also advised not to join in actions that lead to destruction and death. We actively seek ways to strengthen the bonds of unity, refusing to participate in conduct that makes for war. We teach our children that it is possible to overcome evil with good, to love the persecutor, and to find alternative ways to resolve conflict.<br /><em>Intermountain Yearly Meeting, Peace, Advices, 4</em>',

'Friends actively support movements that substitute teamwork and justice for coercion and dishonesty, encouraging all efforts to overcome prejudices based on race, nationality, class, and other characteristics. Friends are encouraged to use and teach nonviolent communication.<br /><em>Intermountain Yearly Meeting, Peace, Advices, 5</em>',

'To what extent is our personal life in accord with Friends\' principles? Do we \"live in the virtue of that life and power that takes away the occasion of all wars\"? How would others recognize that? Where there is animosity, division, and conflict, do we facilitate healing and reconciliation? Do we care for our own health so that we are more able to help others care for theirs? Does the meeting support us in this work?<br /><em>Intermountain Yearly Meeting, Peace, Queries, 2</em>',

'When those among us disclose opinions that differ greatly from our own, are we able to listen to them without judgment or derision? Are we able to support tenderly those whose views differ from our own, knowing that the Light shines in them also? When unpopular or even illegal stands are taken by Friends, are these held in the Light for discernment by the meeting?<br /><em>Intermountain Yearly Meeting, Peace, Queries, 3</em>',

'Have we taught and practiced non-violence? Have we placed the kingdom of God above the kingdom of this world, honoring the convictions of those who are conscientious objectors to war? Have we made every effort to live in peace with everyone, including those who have hurt us or with whom we disagree?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 14</em>',

'Be faithful in maintaining your testimony against all war as inconsistent with the Spirit and teaching of Christ. Live in the Life and Power that takes away the occasions of all wars and strife. Seek to take your part in the ministry of reconciliation between individuals, groups, and nations. Let the law of kindness know no limits. Show a loving consideration for all people.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Peace</em>',

'Do we live in the life and power which takes away the occasion of all wars? Do we, on Christian principles, refuse to participate in or to cooperate with the military effort? Do we work actively for peace and the removal of the causes of war? Do we endeavor to cultivate good will, mutual understanding, and equal opportunities for all people?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Peace</em>',

'Friends oppose all war as inconsistent with God\'s will. As every person is a child of God, we recognize God\'s Light also in our adversaries. Violence and injustice deny this reality and violate the teachings of Jesus and other prophets.<br /><em>Pacific Yearly Meeting, Advices and Queries, Peace, Advices</em>',

'Friends challenge their governments and take personal risks in the cause of peace.We urge one another to refuse to participate in war as soldiers, or as arms manufacturers.We seek ways to support those who refrain from paying taxes that support war. We work to end violence within our own borders, our homes, our streets, and our communities. We support international order, justice, and understanding.<br /><em>Pacific Yearly Meeting, Advices and Queries, Peace, Advices</em>',

'Become an instrument of peace. At every opportunity, be peacemakers in your homes, workplaces and communities. Steep yourself in the power of the universal Spirit. Examine your actions for the seeds of violence, degradation and destructiveness. Overcome the emotions that lie at the root of violence and nurture instead a spirit of reconciliation and love. Come to know the oneness of all creation and oppose the destruction of the natural world.<br /><em>Pacific Yearly Meeting, Advices and Queries, Peace, Advices</em>',

'Do I live in the virtue of that life and power that takes away the occasion of all wars? How do I nourish peace within myself as I work for peace in the world? Do I confront violence wherever it occurs, even when my personal relationships are involved? Where there is distrust, injustice, or hatred, how am I an instrument of reconciliation and love?<br /><em>Pacific Yearly Meeting, Advices and Queries, Peace, Queries for Individuals</em>',

'What are we doing to remove the causes of war and destruction of the planet, and to bring about lasting peace? Do we reach out to all parties in a conflict with courage and love?<br /><em>Pacific Yearly Meeting, Advices and Queries, Peace, Queries for the Meeting</em>',
 
'Our peace testimony invites us to live \'in the virtue of that life and power which takes away the occasion of all wars\'. Consider whether your way of life might in some way benefit from or rely on violence. What are you doing to build a more peaceful world?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E12</em>',

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

'Be faithful in maintaining your testimony against all war as inconsistent with the Spirit and teaching of Christ. Live in the Life and Power that takes away the occasions of all wars and strife. Seek to take your part in the ministry of reconciliation between individuals, groups, and nations. Let the law of kindness know no limits. Show a loving consideration for all people.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 2</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var peace = "<h2>Peace</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=peace;
  
  scroll(0,0)
}