// Relationships
function updateRelationships() {
var strings = [
'Do we uphold Friends in their efforts to develop stable, loving relationships? Do we acknowledge and support all relationships that are based on love and commitment? Do we offer strength and comfort to the aging, the widowed, the separated or divorced, and others - including children - in families that have been affected by disruption or sorrow?<br /><em>Intermountain Yearly Meeting, Family, Queries, 1</em>',

'Does our home life nourish the need both for a sense of personal identity and for fully shared living? Are our homes places of friendliness, peace, and renewal, where the Light is real for those who live there and those who visit? Do we take care that our commitments outside the home do not encroach upon the time and loving attention the family needs for its health and well-being?<br /><em>Intermountain Yearly Meeting, Family, Queries, 2</em>',

'Are my sexual practices consistent with my spiritual beliefs and free of manipulation and exploitation? What barriers keep me from responding openly and lovingly to each person?<br /><em>Pacific Yearly Meeting, Advices and Queries, Personal Relationships, Queries for Individuals</em>',

'In daily relationships with others, both inside and outside the home, our lives as Friends speak immediately and lastingly. In these relationships, our faith may also be severely tested.We are called to respond to that of God in everyone: we are all children of God. Friends celebrate any union that is dedicated to mutual love and respect, regardless of the unique make-up of the family.We strive to create homes where the Spirit of the Divine resides at the center and where the individual genius of each member is respected and nurtured.<br /><em>Pacific Yearly Meeting, Advices and Queries, Personal Relationships, Advices</em>',

'Human sexuality is a divine gift, forming part of the complex union of body, mind and spirit that is our humanity. In a loving adult relationship in a context of mutual responsibility, sexuality brings delight, fulfillment and celebration.<br /><em>Pacific Yearly Meeting, Advices and Queries, Personal Relationships, Advices</em>',
 
'A loving relationship brings both fulfilment and tension, and requires long-term commitment. Do you acknowledge and explore personal differences creatively?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D11</em>',

'Sometimes, despite strong commitment, a relationship comes apart. If this happens to you, are you willing to seek help in understanding the other point of view, and in finding the right way forward? Where children are involved, do you remember their needs and vulnerability and care for them?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D12</em>',

'Every relationship brings responsibility. Remember the value of prayer, perseverance and a sense of humour. Are you careful to avoid harbouring grudges, exploiting, or belittling other people? Are you sensitive to their needs? Do you enter imaginatively into their experience?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D9</em>',

'Each individual\'s journey through life is unique. Friends in the Meeting may be in different types of relationships. These may change through choice or circumstance. Ponder on your own choices, and try to understand the choices of others. Are you inclined to make hasty judgements about other people\'s relationships? Do you support others as they work towards making their decisions?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D8</em>',

'Take care in your relationships with others that you respect and cherish each person, for people of all races and nationalities have that of God within their beings which unites them. Take care also, therefore, to maintain a consistent witness to peace, opposition to war, and to all acts of violence or coercion, that you may remain in accord with the timeless guidance of the Inner Light.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Let early care be taken to advise such as appear inclinable to marry without sufficient reflection; in contemplating the engagement let all look principally to that which will help you on your spiritual journey. Pay filial regard to the judgment of your parents. Bear in mind the vast importance in such a union of an accordance in religious principles and practice. Ask counsel of God, desiring above all temporal considerations that your union may be owned and blessed of Him.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Do you cherish your friendships, so that they grow in depth and understanding and mutual respect? In close relationships we may risk pain as well as finding joy. When experiencing great happiness or great hurt we may be more open to the working of the Spirit.<br /><em>Britain Yearly Meeting, Advices and Queries, number 21</em>',

'Marriage has always been regarded by Friends as a religious commitment rather than a merely civil contract. Both partners should offer with God\'s help an intention to cherish one another for life. Remember that happiness depends on an understanding and steadfast love on both sides. In times of difficulty remind yourself of the value of prayer, of perseverance and of a sense of humour.<br /><em>Britain Yearly Meeting, Advices and Queries, number 23</em>',

'A long-term relationship brings tensions as well as fulfilment. If your relationship with your partner is under strain, seek help in understanding the other\'s point of view and in exploring your own feelings, which may be powerful and destructive. Consider the wishes and feelings of any children involved, and remember their enduring need for love and security. Seek God\'s guidance. If you undergo the distress of separation or divorce, try to maintain some compassionate communication so that arrangements can be made with the minimum of bitterness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 25</em>',

'Do you conduct yourself in a manner that supports and preserves the sanctity and permanence of marriage? Do you who are married yield to each other in decisions and build up each other as individuals, always cherishing your common bond?<br /><em>Northwest Yearly Meeting, Query 9</em>',

'In the contemplation of marriage, Friends should seek divine guidance. Marriage is a life-long union of spiritual as well as temporal concerns and presents considerations of vital importance. When two persons are united in their religious faith, they are likely to find not only a firmer bond of union but also greater strength in fulfilling all of life\'s undertakings. Therefore, Friends contemplating marriage should early acquaint their families and meetings with their intentions, seeking their approval, that they may avoid the far-reaching consequences of hasty and ill-considered action. It is tenderly recommended that Friends keep to the simple and solemn form of our marriage ceremony.<br /><em>New York Yearly Meeting, advice number 11</em>',

'Intentions of marriage to be made known to the Children of Light, especially those of the meeting where the parties are members. The marriage to be solemnized in the fear of the Lord, and before many witnesses, after the example of scripture, and a record to be made in writing, to which the witnesses may subscribe their names.<br /><em>Advices from the Elders at Balby (1656), advice number 7</em>',

'Have you forgiven everyone who hurt you or disappointed you, seeking to resolve any conflict with love and understanding?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 4</em>',

'Have you avoided emotional or sexual intimacy outside of marriage this week? Have you engaged in lustful attitudes, pornography or sexually explicit communication?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 6</em>',

'Have you actively nourished your marriage, family and friends in Christ, making your home a pleasant, peaceful place? Have you kept marriage and family in balance with work and career?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 7</em>',

'Are we sensitive to the problems of family living? Do we offer counseling to couples both before and after marriage? How are we helping individuals, married couples and family units to strengthen and enrich their lives?<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, 9th query</em>',

'In consideration of marriage, remember that happiness depends on a deep and understanding love. Seek to be joined in a common discipleship of Jesus Christ. Ask guidance of God, desiring above all temporal considerations, that your union may be owned and blest of Him. Consider the precious responsibilities of parenthood, and do not forget the help you may draw from the loving counsel of your own parents.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 9</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var relationships = "<h2>Personal relationships</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=relationships;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}