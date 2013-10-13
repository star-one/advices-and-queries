// Relationships
function updateRelationships() {
var strings = [
'Take care in your relationships with others that you respect and cherish each person, for people of all races and nationalities have that of God within their beings which unites them. Take care also, therefore, to maintain a consistent witness to peace, opposition to war, and to all acts of violence or coercion, that you may remain in accord with the timeless guidance of the Inner Light.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Let early care be taken to advise such as appear inclinable to marry without sufficient reflection; in contemplating the engagement let all look principally to that which will help you on your spiritual journey. Pay filial regard to the judgment of your parents. Bear in mind the vast importance in such a union of an accordance in religious principles and practice. Ask counsel of God, desiring above all temporal considerations that your union may be owned and blessed of Him.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Do you cherish your friendships, so that they grow in depth and understanding and mutual respect? In close relationships we may risk pain as well as finding joy. When experiencing great happiness or great hurt we may be more open to the working of the Spirit.<br /><em>Britain Yearly Meeting, Advices and Queries, number 21</em>',

'Marriage has always been regarded by Friends as a religious commitment rather than a merely civil contract. Both partners should offer with God\'s help an intention to cherish one another for life. Remember that happiness depends on an understanding and steadfast love on both sides. In times of difficulty remind yourself of the value of prayer, of perseverance and of a sense of humour.<br /><em>Britain Yearly Meeting, Advices and Queries, number 23</em>',

'A long-term relationship brings tensions as well as fulfilment. If your relationship with your partner is under strain, seek help in understanding the other\'s point of view and in exploring your own feelings, which may be powerful and destructive. Consider the wishes and feelings of any children involved, and remember their enduring need for love and security. Seek God\'s guidance. If you undergo the distress of separation or divorce, try to maintain some compassionate communication so that arrangements can be made with the minimum of bitterness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 25</em>',

'Do you conduct yourself in a manner that supports and preserves the sanctity and permanence of marriage? Do you who are married yield to each other in decisions and build up each other as individuals, always cherishing your common bond?<br /><em>Northwest Yearly Meeting, Query 9</em>',

'In the contemplation of marriage, Friends should seek divine guidance. Marriage is a life-long union of spiritual as well as temporal concerns and presents considerations of vital importance. When two persons are united in their religious faith, they are likely to find not only a firmer bond of union but also greater strength in fulfilling all of life\'s undertakings. Therefore, Friends contemplating marriage should early acquaint their families and meetings with their intentions, seeking their approval, that they may avoid the far-reaching consequences of hasty and ill-considered action. It is tenderly recommended that Friends keep to the simple and solemn form of our marriage ceremony.<br /><em>New York Yearly Meeting, advice number 11</em>',

'Intentions of marriage to be made known to the Children of Light, especially those of the meeting where the parties are members. The marriage to be solemnized in the fear of the Lord, and before many witnesses, after the example of scripture, and a record to be made in writing, to which the witnesses may subscribe their names.<br /><em>Advices from the Elders at Balby (1656), advice number 7</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var relationships = "<h2>Relationships</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=relationships;
  
  scroll(0,0)
}