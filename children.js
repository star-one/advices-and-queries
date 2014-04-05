// Children and family
function updateChildren() {
var strings = [
'Watch with Christian tenderness over the opening minds of your children. Help them to understand the teachings of Jesus. Seek to awaken in them the love of Christ, and through example and training in self-control, to bring them to obedience to the law of God in their own hearts, that they may be joyful and willing in his service.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

'The presence of children carries a special blessing as well as responsibility. Children bring unique spiritual gifts - wonder, resiliency, playfulness and more. Recognize and honor the Divine Light within children and treat them with the dignity and respect that is due to all people. Listen to and learn from children; share with them those values and practices that are central to our own lives. Special care must be given to resolving problems between adults and children in a manner that gives equal weight to the feelings and needs of both children and adults. Tender parenting is one of the critically important peace vocations in our society.Make every effort to offer all parents the personal and institutional support that this challenging work requires.<br /><em>Pacific Yearly Meeting, Advices and Queries, Personal Relationships, Advices</em>',

'Rejoice in the presence of children and young people in your Meeting and recognise the gifts they bring. Nurture them, remembering that the Meeting as a whole shares a responsibility for every child in its care. Do you respond to the special needs of children and young people during Meeting for Worship? When they are involved in separate activities, do you uphold them and those who are with them? How do you share your deepest beliefs with them,while leaving them free to develop as the spirit of God may lead them? They may be led along pathsyou had not anticipated. Are you ready to learn from them and to accept your responsibilities towards them? Are you aware of the example you set for children?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B5</em>',

'Watch with Christian tenderness over the opening minds of your children; give them examples of Christian freedom and discipline in your own lives; carefully instruct them in a knowledge of Holy Scriptures; seek for ability to imbue their hearts with the love of their Heavenly Father, their Redeemer, and their Sanctifier.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'For although we recognize the children of our members as objects of our care, and partakers of the outward privileges of Christian fellowship, we would earnestly remind all that such recognition cannot constitute them members of the Lord\'s Spiritual Israel. Nothing can effect this but the power of the Holy Spirit working repentance toward God and faith toward our Lord Jesus Christ. Therefore, let the words of our Holy Redeemer have due place with us all, "Ye must be born again." May all of our members become such on the ground of true conversion, and be prepared in their several places to bring forth fruit unto God.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Rejoice in the presence of children and young people in your meeting and recognise the gifts they bring. Remember that the meeting as a whole shares a responsibility for every child in its care. Seek for them as for yourself a full development of God\'s gifts and the abundant life Jesus tells us can be ours. How do you share your deepest beliefs with them, while leaving them free to develop as the spirit of God may lead them? Do you invite them to share their insights with you? Are you ready both to learn from them and to accept your responsibilities towards them?<br /><em>Britain Yearly Meeting, Advices and Queries, number 19</em>',

'Children and young people need love and stability. Are we doing all we can to uphold and sustain parents and others who carry the responsibility for providing this care?<br /><em>Britain Yearly Meeting, Advices and Queries, number 24</em>',

'Do you, who are parents, and others having children in your care, seek by prayerful endeavour and example to lead them to a knowledge of the Truth as it is in Jesus Christ? Do you make opportunities for all, especially the young people in the meeting, to learn of essential Christian truth and to understand the basis of Quaker experience and witness?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 10</em>',

'Do you make your home a place of affection where God\'s presence is felt? Do you practice family prayer? Do you share your deepest beliefs and interests with all in the family? Do you grow together through sharing prosperity and adversity? Can you keep a sense of humor and avoid taking yourself too seriously? Do you establish family standards including the mutual obligations of children and adults?   Are you as children learning to be accountable for your own actions? Do you as parents help your children to grow in independence and responsibility? Do you consider the needs of grandparents and older members of the family circle?<br /><em>Baltimore Yearly Meeting, The Queries, number 6</em>',

'Do you who have children under your care educate them for upright and useful lives? Do you nurture them toward Christian faith and commitment, giving them the Scriptures for their guide? Are you watching over your young people with loving concern and providing a place for each one in the life of the church?<br /><em>Northwest Yearly Meeting, Query 10</em>',

'Are you teaching your children the ways of Friends? Do you encourage them to participate in Friends programs and to attend Friends schools?<br /><em>Northwest Yearly Meeting, Query 11</em>',

'Education of Children: A loving care of the children who have been entrusted to us requires that we instruct them early and continually in how God has dealt with his people and how he still deals with them. Our children do not become church members by birth; but we should seek by education and example to help them become acquainted with the Spirit of Christ, and thus to open their way to enter the church by personal choice when they are mature enough to make such a commitment.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Remembering the tenderness of Jesus for children, we recommend that parents and those who have the important charge of educating youth exercise a loving and watchful care over them. Meetings are urged to help parents and children share religious experiences at home and in the meeting for worship and to give them an understanding of the principles and practices of Friends.<br /><em>New York Yearly Meeting, advice number 5</em>',

'Parents and older Friends are advised to be sensitive to the insights of younger people and to keep a close and sympathetic contact with them. Children are urged to love and respect their parents that all may be led together to the Light Within.<br /><em>New York Yearly Meeting, advice number 6</em>',

'Do our children receive the loving care of the meeting? Does the influence of the meeting promote their religious life and give them an understanding of the principles and practices of Friends? Do we offer our young people opportunities for fellowship, for service, for religious instruction, and for participation in the life of the meeting?<br /><em>New York Yearly Meeting, query number 6</em>',

'Advice to husbands and wives, as in I Peter iii:7 <em>Husbands, in the same way, show consideration for your wives in your life together, paying honour to the woman as the weaker sex, since they too are also heirs of the gracious gift of life - so that nothing may hinder your prayers</em>. Advice to parents and children, as in Ephesians vi:1-4 <em>Children, obey your parents in the Lord, for this is right. \'Honour your father and mother\' - this is the first commandment with a promise: \'so that it may be well with you and you may live long on the earth.\' And, fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord</em>.<br /><em>Advices from the Elders at Balby (1656), advice number 9</em>',

'Watch with Christian tenderness over the opening minds of your children. Help them to understand the teachings of Jesus. Seek to awaken in them the love of Christ, and through example and training in self-control, to bring them to obedience to the law of God in their own hearts, that they may be joyful and willing in his service.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 8</em>',

'Be diligent in the reading of the Bible and other spiritually helpful writings. Gather daily in your families for worship. Such times have a special value in bringing little children especially into the experience of united worship, and so preparing them for the larger meeting for worship, as they learn in the silence to bow to the power of God.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 16</em>',

'Be mindful for yourselves and for your children that you value the beauty and power of good friendships. Also, by example and precept, encourage your children to appreciate the best in literature and the arts, which is consistent with our Christian faith. By this, all your lives may be enriched and the youth with tastes thus early formed may henceforth instinctively choose the beautiful and good.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 17</em>',

'Are we sufficiently thoughtful for the spiritual awakening of the youth in our meetings? Do we concern ourselves in helping them develop and consecrate their various talents, and do we make an effort to provide opportunity for the Christian exercise of their gifts in the meeting and the community?<br /><em>Ohio Yearly Meeting (Conservative), Queries for the Meetings for Ministry & Oversight, number 4</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var children = "<h2>Children and family</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=children;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}