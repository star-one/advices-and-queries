// Lifestyle
function updateLifestyle() {
var strings = [
'Be on your guard, dear Friends, lest the love of pleasure take too strong a hold upon you. Choose such recreations as are pure and healthful. Let them be in harmony with your service to God and man; and in that service be ready at any time to lay them aside when called upon.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Simplicity</em>',

'Try to live simply. A simple lifestyle freely chosen is a source of strength. Do not be persuaded into buying what you do not need or cannot afford.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Simplicity</em>',

'Do we regard our possessions as given to us in trust, and do we part with them freely for the needs of others?<br /><em>Great Plains Yearly Meeting, Advices and Queries, Simplicity</em>',

'From early days Friends have opposed gambling and practices based on chance. These activities profit from the inevitable loss of others, promote greed, and conflict with good stewardship. Public lotteries have not furthered their purported benefit to the public good. All addictions are of concern. As the use of alcohol and tobacco all too often entail serious risks to self and others, Friends who serve alcohol at home should be diligent in offering alternatives. Alcohol should not be served at Meeting gatherings.<br /><em>Pacific Yearly Meeting, Advices and Queries, Integrity and Personal Conduct, Advices</em>',

'Find recreation that brings you joy and energy. Be aware of how your choices affect yourself and others.<br /><em>Pacific Yearly Meeting, Advices and Queries, Integrity and Personal Conduct, Advices</em>',

'Is my life so filled with the Spirit that I am free from the misuse of alcohol and other drugs, and of excesses of any kind?<br /><em>Pacific Yearly Meeting, Advices and Queries, Integrity and Personal Conduct, Queries for Individuals</em>',
 
'Life is meant to be lived from a Center, a divine Center... a life of unhurried peace and power. It is simple. It is serene. It takes no time, but it occupies all our time. - Thomas R. Kelly, Testament of Devotion, 1941<br /><em>Pacific Yearly Meeting, Advices and Queries, Simplicity, Advices</em>',

'A life centered in God will be directed toward keeping communication with God open and unencumbered. Simplicity is best achieved through a right ordering of priorities, maintaining humility of spirit, avoiding self-indulgence, resisting the accumulation of unnecessary possessions, and avoiding over-busy lives.<br /><em>Pacific Yearly Meeting, Advices and Queries, Simplicity, Advices</em>',

'Elise Boulding writes in My Part in the Quaker Adventure, \'Simplicity, beauty, and happiness go together if they are a byproduct of a concern for something more important than ourselves\'.<br /><em>Pacific Yearly Meeting, Advices and Queries, Simplicity, Advices</em>',

'Do I center my life in an awareness of God’s presence so that all things take their rightful place? Do I live simply, and promote the right sharing of the world’s bounty? Do I keep my life uncluttered with things and activities, avoiding commitments beyond my strength and light? How do I maintain simplicity, moderation, and honesty in my speech, my manner of living, and my daily work? Do I recognize when I have enough?<br /><em>Pacific Yearly Meeting, Advices and Queries, Simplicity, Queries for Individuals</em>',

'Do you strive to understand the challenges and choices offered by modern communications and technology? Do you take into account their impact, positive and negative, on the lives of people and the environment?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E6</em>',

'Are you careful that your use of financial resources is in accordance with our values of integrity, peace, equality, simplicity, and concern for other people and for the environment?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E7</em>',

'Be selective in the lifestyle you choose. Take care of your body and your own well-being. Consider the harm you may cause to yourself and others with unhealthy substances or selfish practices. Be aware that the mass media and other social pressures can dull your vision.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D13</em>',

'Aim to live simply. A simple lifestyle freely chosen is a source of strength. Value beauty in all its forms. Share what you have.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D14</em>',

'Observe simplicity and moderation in your deportment and attire, in the furniture of your houses, and in your manner or style of living.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Are you careful to live within your income? Do you avoid involving yourself in business beyond your ability to manage or in highly speculative ventures? Are you willing to accept a lower economic standard rather than compromise Christian values?<br /><em>Northwest Yearly Meeting, Query 14</em>',

'Have you succumbed to a bad habit, personal addiction or kept any kind of idol in your heart, such as greed for money? Have you abstained from the use of harmful substances such as alcohol, tobacco, illegal drugs and from the abuse of good things, such as food and medications?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 9</em>',

'Friends are advised to be mindful of their conduct and conversation and to observe the testimonies of simplicity and moderation.<br /><em>New York Yearly Meeting, advice number 3</em>',

'Guard watchfully against the introduction into your households of publications of a hurtful tendency, and against such companionships, indulgences, and recreations as may in anywise interfere with the growth in grace. We earnestly advise all our members to refrain from the use of tobacco in every form, and to discourage its growth and the sale of its products, as well as the use of it by their children and all under their care.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Be aware of the attitude with which you receive all the material and cultural products of your society. Seek the beautiful and worthwhile in literary and recreational pursuits, being always sensitive to the encroachment of the banal, the degrading, or the violent.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Believing that meekness, moderation, and mercy are among the distinguishing traits of the Christian character, we are concerned to caution our members against the indulgence of passion, or the exercise of cruelty, even toward the brute creation.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Consider which of the ways to happiness offered by society are truly fulfilling and which are potentially corrupting and destructive. Be discriminating when choosing means of entertainment and information. Resist the desire to acquire possessions or income through unethical investment, speculation or games of chance.<br /><em>Britain Yearly Meeting, Advices and Queries, number 39</em>',

'In view of the harm done by the use of alcohol, tobacco and other habit-forming drugs, consider whether you should limit your use of them or refrain from using them altogether. Remember that any use of alcohol or drugs may impair judgment and put both the user and others in danger.<br /><em>Britain Yearly Meeting, Advices and Queries, number 40</em>',

'Try to live simply. A simple lifestyle freely chosen is a source of strength. Do not be persuaded into buying what you do not need or cannot afford. Do you keep yourself informed about the effects your style of living is having on the global economy and environment?<br /><em>Britain Yearly Meeting, Advices and Queries, number 41</em>',

'Is your way of life in keeping with the teaching of Jesus? Do you watch against conformity to commonly-accepted standards, and against the love of ease and self-indulgence which hinders your spiritual growth and service for Christ?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 4</em>',

'Do you keep to simplicity and moderation in your speech, your manner of living, and your pursuit of business? Are you careful to keep your business and your outward activities from absorbing time and energy that should be given to spiritual growth and to the service of your religious society? Are you just in your dealings and careful to fulfill your promises? Do you take care of such members as need aid, and assist them, when possible, to become self-supporting?<br /><em>Ohio Valley Yearly Meeting, Fourth query</em>',

'Do you examine thoroughly your behavior in regard to work, leisure, diet and the use of drugs, alcoholic beverages and tobacco, thus trying to avoid and to discourage practices that interfere with health, sensitivity or social responsibility? Remembering the parable of the talents, do you exercise fully those that God has given you? Do you endeavor to minister humbly and sensitively to the needs of others that they may attain their full potential?<br /><em>Ohio Valley Yearly Meeting, Fifth query</em>',

'Do you live in accordance with your spiritual convictions? Do you seek employment consistent with your beliefs and in service to society? Do you practice simplicity in speech, dress and manner of living, avoiding wasteful consumption? Are you watchful that your possessions do not rule you? Do you strive to be truthful at all times, avoiding judicial oaths?  Do you strive to develop your physical, emotional and mental capacities toward reaching your Divinely given potential? Do you cultivate healthful and moderate habits, avoiding the hazards of drugs, intoxicants, and over-indulgence generally? Do you try to direct such emotions as anger and fear in creative ways?<br /><em>Baltimore Yearly Meeting, The Queries, number 5</em>',

'Do you and your family use your free time in ways that refresh the spirit and benefit mind and body, that encourage creativity and friendliness? Is your home a pleasant, peaceful place?<br /><em>Northwest Yearly Meeting, Query 12</em>',

'Is your life marked by simplicity? Are you free from the burden of unnecessary possessions? Do you avoid waste? Do you refuse to let the prevailing culture and media dictate your needs and values?<br /><em>Northwest Yearly Meeting, Query 13</em>',

'Do you discipline your mind and body to serve as instruments of the Lord? Do you avoid pornography? Do you abstain from harmful, addictive, and unnecessary drugs-including alcoholic beverages, tobacco, marijuana, and cocaine-and from profiting through their use? Do you refrain from gambling and taking part in lotteries?<br /><em>Northwest Yearly Meeting, Query 16</em>',

'Christian Conduct: Christ is a teacher of righteousness and holiness. He teaches both individuals and his community, and as we respond in obedience we are led into a way of life that testifies to him. The love of God and of our neighbor are the basic principles of this way, but Christ also gives us specific teachings about what this means in practice. In setting forth rules of conduct appropriate to a Christian people, we would not want anyone to think that a mere literal conformity to these things is sufficient; rather "unless your righteousness exceeds that of the scribes and Pharisees, you will never enter the kingdom of heaven." Our inner nature must be transformed by Christ, as we submit ourselves to him in each day\'s circumstances, trusting him for the power to do his will and not our own. The subjection of our decisions to God\'s guidance is a mark of the disciple\'s life.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Work and Livelihood: In choosing a means of livelihood we should seek an occupation that meets some legitimate human need and does not involve us in wrongdoing. We should avoid jobs which serve vain or destructive purposes. To keep the gospel ministry free of economic motivation, we do not give or receive financial reward for preaching or pastoral services, and we expect that members will normally have a secular means of livelihood. However, the church may provide financial aid where it recognizes that Christ\'s leading has called a member away from his or her usual occupation, and it may reimburse for expenses incurred in ministry, such as travel costs.  We should be cautious about taking jobs that demand rigid schedules and/or great amounts of time and attention, considering whether this is the work Christ wants us to do or whether he may have other work for us that would be crowded out by such a job. A sacrifice of income or job status may be required of us to keep our priorities in right order.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Recreations: Remembering that our time is to be at God\'s disposal, we should avoid recreations that are unduly time consuming, dangerous or expensive, or that tend to draw our minds away from God. Since the purpose of recreation is relaxation and refreshment, and individuals differ in the form and amount of recreation that they need, we should avoid contributing to situations that place social pressure on some to join in the recreations of others.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Friends are earnestly advised to refrain from practices that are detrimental to the body or the mind, for example, the use of intoxicants and tobacco, and the misuse of drugs.<br /><em>New York Yearly Meeting, advice number 8</em>',

'Care should be taken that all of our members avoid participation in lotteries, gambling, and betting, including such schemes of chance that appeal as benevolences. Friends should refrain from hazardous speculation and are cautioned against engaging in business that may be questionable. They are responsible for the manner of acquiring, using, and disposing of their possessions.<br /><em>New York Yearly Meeting, advice number 9</em>',

'Do we keep to moderation and simplicity in our daily lives? Have we allowed the acquisition of possessions to interfere with God\'s purpose for us? Are our homes places where the presence of God is felt by those who live there and those who visit there? Do we choose such recreations as are wholesome and consistent with Christian character? Are we careful in our choice of ways to use our time and energy?<br /><em>New York Yearly Meeting, query number 5</em>',

'Do our vocations provide constructive and beneficial service? Do we observe integrity in our business transactions? Do we avoid involving ourselves beyond our ability to manage? Are we careful to conduct our affairs punctually, justly, and honorably? Do we avoid participation in lotteries, betting, and gambling?<br /><em>New York Yearly Meeting, query number 7</em>',

'Have we confronted our own decisions about our use of alcohol, tobacco, and other drugs, and do we encourage others to do likewise? Have we considered the cost in human suffering that might result from such use?<br /><em>New York Yearly Meeting, query number 8</em>',

'Believing our bodies to be the temple of God, are we concerned to attain a high level of physical and mental health? To this end are our lives examples of temperance in all things? Do we avoid and discourage the use and handling of intoxicants, tobacco, and improper use of drugs?<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, 4th query</em>',

'Do we observe simplicity in our manner of living, sincerity in speech, and modesty in apparel? Do we guard against involving ourselves in temporal affairs to the hindrance of spiritual growth? Are we just in our dealings and careful to fulfill our promises? Do we seek to make our Christian faith a part of our daily work?<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, 7th query</em>',

'Be on your guard, dear Friends, lest the love of pleasure take too strong a hold upon you. Choose such recreations as are pure and healthful. Let them be in harmony with your service to God and man; and in that service be ready at any time to lay them aside when called upon.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 5</em>',

'Avoid and discourage any kind of betting or gambling, as well as commercial speculation of a gambling character. Remember how widespread are the temptations to grow rich at the expense of others, and how apparently harmless indulgence leads often by degrees to ruin and crime.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 7</em>',

'Carefully maintain truthfulness and sincerity in your conduct, and encourage the same in your families. In your style of living, in your dress, and in the furniture of your houses, choose what is simple, useful, and good.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 10</em>',

'In view of the evils arising from the use of tobacco and intoxicating drinks, we urge all to abstain from using them, from offering them to others, and from having any part in their production, manufacture, or sale. Do not let the claims of "good fellowship" or the fear of seeming peculiar prevent you from standing by principles which you have conscientiously adopted.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 11</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var lifestyle = "<h2>Lifestyle</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=lifestyle;
  
  scroll(0,0)
}