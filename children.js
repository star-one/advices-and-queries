// Children and family
function updateChildren() {
var strings = [
'Watch with Christian tenderness over the opening minds of your children; give them examples of Christian freedom and discipline in your own lives; carefully instruct them in a knowledge of Holy Scriptures; seek for ability to imbue their hearts with the love of their Heavenly Father, their Redeemer, and their Sanctifier.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'For although we recognize the children of our members as objects of our care, and partakers of the outward privileges of Christian fellowship, we would earnestly remind all that such recognition cannot constitute them members of the Lord’s Spiritual Israel. Nothing can effect this but the power of the Holy Spirit working repentance toward God and faith toward our Lord Jesus Christ. Therefore, let the words of our Holy Redeemer have due place with us all, "Ye must be born again." May all of our members become such on the ground of true conversion, and be prepared in their several places to bring forth fruit unto God.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Rejoice in the presence of children and young people in your meeting and recognise the gifts they bring. Remember that the meeting as a whole shares a responsibility for every child in its care. Seek for them as for yourself a full development of God\'s gifts and the abundant life Jesus tells us can be ours. How do you share your deepest beliefs with them, while leaving them free to develop as the spirit of God may lead them? Do you invite them to share their insights with you? Are you ready both to learn from them and to accept your responsibilities towards them?<br /><em>Britain Yearly Meeting, Advices and Queries, number 19</em>',

'Children and young people need love and stability. Are we doing all we can to uphold and sustain parents and others who carry the responsibility for providing this care?<br /><em>Britain Yearly Meeting, Advices and Queries, number 24</em>',

'Do you, who are parents, and others having children in your care, seek by prayerful endeavour and example to lead them to a knowledge of the Truth as it is in Jesus Christ? Do you make opportunities for all, especially the young people in the meeting, to learn of essential Christian truth and to understand the basis of Quaker experience and witness?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 10</em>',

'Do you make your home a place of affection where God\'s presence is felt? Do you practice family prayer? Do you share your deepest beliefs and interests with all in the family? Do you grow together through sharing prosperity and adversity? Can you keep a sense of humor and avoid taking yourself too seriously? Do you establish family standards including the mutual obligations of children and adults?   Are you as children learning to be accountable for your own actions? Do you as parents help your children to grow in independence and responsibility? Do you consider the needs of grandparents and older members of the family circle?<br /><em>Baltimore Yearly Meeting, The Queries, number 6</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var children = "<h2>Children and family</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=children;
  
  scroll(0,0)
}