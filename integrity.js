// Integrity
function updateIntegrity() {
var strings = [
'Are ministers and elders good examples in uprightness, temperance, and moderation, and careful to train up their families in plainness of dress and simplicity of manners, becoming our religious profession?<br /><em>Rocky Mountain Yearly Meeting, Queries for Ministers and Elders, 4</em>',

'And, lastly, let all dwell in that which gives ability to labor successfully in the Church of Christ, adorning the doctrine they deliver to others, being examples of the believers, in word, in conversation, in charity, in spirit, in faith, and in purity.<br /><em>Rocky Mountain Yearly Meeting, Advices to Ministers and Elders, 6</em>',

'Let ministers be careful how they enter upon disputed points in their testimony; or of making such objections as they do not clearly answer.<br /><em>Rocky Mountain Yearly Meeting, Advices to Ministers and Elders, 3</em>',

'When asked to swear to the truthfulness of our statements, are we careful to witness to Christ\'s command that we swear not at all, but be honest in all things? Do we avoid gambling and speculation based on the principles of chance?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

'Regard the taking of oaths as contrary to the teachings of Christ, and setting up a double standard of truthfulness; whereas sincerity and truth should be practiced in all walks of life.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

'Let your whole conduct and conversation be worthy of disciples of Christ. \"Be ye steadfast, unmovable, always abounding in the work of the Lord, forasmuch as ye know that your labor is not in vain in the Lord\" (1 Cor. 15:58).<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

'Do we observe simplicity and honesty in our manner of living? Are we careful to live within the bounds of our circumstances, punctual in keeping promises, prompt in the payment of debts, and just in all our dealings? Do we choose those activities which will strengthen our physical, mental, and spiritual life; and do we avoid those harmful to ourselves and others?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Simplicity</em>',

'Take a strong stand against any form of abuse, whether that abuse is minor or severe, and whether it is emotional, physical or sexual in nature. The terrible impact of abuse on the most vulnerable members of our families creates lifelong suffering for its victims and is a major source of violence in our society. Perpetrators are themselves usually victims of similar violence and should be approached with compassion as well as firmness.<br /><em>Pacific Yearly Meeting, Advices and Queries, Personal Relationships, Advices</em>',

'Integrity has always been a goal of Friends. It is essential to trust, to all communication between people and between people and God. Integrity grounds our beliefs, thoughts, and actions in our spiritual center and makes us whole.<br /><em>Pacific Yearly Meeting, Advices and Queries, Integrity and Personal Conduct, Advices</em>',

'Friends believe that we are called to speak the truth. A single standard of truth requires us to conduct ourselves in ways that are honest, direct, and plain, and to make our choices, both large and small, in accord with the urgings of the Spirit. It follows that we object to taking an oath, which presupposes a variable standard of truth. Be true to your word.<br /><em>Pacific Yearly Meeting, Advices and Queries, Integrity and Personal Conduct, Advices</em>',

'How do I strive to maintain the integrity of my inner and outer lives? Do I act on my principles even when this entails difficult consequences? Am I honest and truthful in all that I say and do, even when a compromise might be easier or more popular? Am I reflective about the ways I gain my wealth and income and sensitive to their impacts on others?<br /><em>Pacific Yearly Meeting, Advices and Queries, Integrity and Personal Conduct, Queries for Individuals</em>',

'Do we, in our Meeting, hold ourselves accountable to one another as do members of a healthy family?<br /><em>Pacific Yearly Meeting, Advices and Queries, Integrity and Personal Conduct, Queries for the Meeting</em>',

'We have a testimony to integrity, which includes honesty and plain speaking. Be utterly scrupulous both in personal relationships and in dealings with businesses and government departments or other public bodies. Do not be afraid to speak the truth as you discern it, with firmness and respect. Taking oaths sets a double standard of truth; ask to affirm instead.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E3</em>',

'Corruption and destructiveness can grow from very small seeds, as can courage and loving kindness. Consider the words you use, and your tone of voice. Do you refrain from verbal and psychological violence? When people attack you with angry words, do you listen for the underlying hurt?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D10</em>',

'Let others know what is valuable to you. Let your life speak.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, A6</em>',

'Carefully maintain in your speech and conduct, and encourage in your families, simplicity, truthfulness, and sincerity; and endeavor to avoid worldliness in all its forms.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Are you honest and truthful in all you say and do? Do you maintain strict integrity in business transactions and in your dealings with individuals and organisations? Do you use money and information entrusted to you with discretion and responsibility? Taking oaths implies a double standard of truth; in choosing to affirm instead, be aware of the claim to integrity that you are making.<br /><em>Britain Yearly Meeting, Advices and Queries, number 37</em>',

'If pressure is brought upon you to lower your standard of integrity, are you prepared to resist it? Our responsibilities to God and our neighbour may involve us in taking unpopular stands. Do not let the desire to be sociable, or the fear of seeming peculiar, determine your decisions.<br /><em>Britain Yearly Meeting, Advices and Queries, number 38</em>',

'Are you honest in your daily work and in all your personal relationships? Do you maintain integrity in your dealings with government authorities and other outward concerns? Do you guard against covetousness, remembering that the quality of life does not depend on the abundance of possessions? Do you seek to discern how much of your time, talents and resources you should devote to the service of others?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 5</em>',

'Do you uphold the standards of Friends? Are you careful in appointing officers and Sunday school teachers, in calling pastors and special speakers, in sending out missionaries and recording ministers, to see that they are in harmony with the principles of Friends as stated in the Faith and Practice of Northwest Yearly Meeting?<br /><em>Northwest Yearly Meeting, Query 8</em>',

'Are you honest and just in your dealings? Are you true to your promises, prompt in paying your debts, and responsible in handling money or property entrusted to you?<br /><em>Northwest Yearly Meeting, Query 15</em>',

'Oaths: Taking oaths, including those commonly used in public proceedings and documents, is an abuse of God\'s name and of honest speech, which Christ forbids (Mt. 5:33-37; Jas. 5:12).<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Conventional Insincerities: We should not conform to social conventions that dictate saying things we do not mean.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Friends are advised to observe integrity in their living and to inspect frequently the state of their temporal affairs. In their dealings with everyone they should endeavor to maintain a truly Christian character, ever bearing in mind the Golden Rule, \"Do unto others as you would have them do unto you.\"<br /><em>New York Yearly Meeting, advice number 10</em>',

'It is recommended that Friends take the opportunity, on occasions when special statements or oaths are required, to advance the cause of truth by simple affirmation, thus emphasizing that their statement is only a part of their usual integrity of speech.<br /><em>New York Yearly Meeting, advice number 13</em>',

'Friends in callings and trades are to be faithful and upright, and keep to yea and nay. Debts to be punctually paid, that nothing they may owe to any man but love one to another.<br /><em>Advices from the Elders at Balby (1656), advice number 15</em>',

'Have we obeyed the Scriptures, by giving correction to those who have gone astray?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 3</em>',

'Have you damaged another person by your words, either behind their back or face to face? Have you kept away from racist jokes and comments?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 5</em>',

'Have you given to Christ all you own and all you influence? Have you been completely above reproach in your financial dealings, prompt in paying your debts, careful to live within your income, honoring Christ with tithes and offerings?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 8</em>',

'Have you deceived anyone, told half-truths or outright lies this week?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 10</em>',

'Are we careful to use the affirmation rather than the oath? Do we avoid gambling and speculation based on the principles of chance?<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, 8th query</em>',

'Regard the taking of oaths as contrary to the teachings of Christ, and setting up a double standard of truthfulness; whereas sincerity and truth should be practiced in all walks of life.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 3</em>',

'Let your whole conduct and conversation be worthy of disciples of Christ. \"Be ye steadfast, unmovable, always abounding in the work of the Lord, forasmuch as ye know that your labor is not in vain in the Lord\" (1 Cor. 15:58)<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 26</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var integrity = "<h2>Integrity</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=integrity;
  
  scroll(0,0)
}