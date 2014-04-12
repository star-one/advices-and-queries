// Outreach
function updateOutreach() {
var strings = [
'What are we doing individually and corporately to share the experience of our faith? Do we let others know about the source of our convictions? What are we doing to make the larger community aware of our Friends meeting?<br /><em>Intermountain Yearly Meeting, Integrity, Queries, 7</em>',

'How welcoming is our meeting to newcomers? When attenders request information about Quakerism, what resources do we share with them to increase their knowledge?<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Queries, 3</em>',

'We encourage those who attend our meetings to become acquainted with Friends\' ways. When it is evident that the meeting has become a spiritual home for an individual, we encourage him or her to apply for membership.<br /><em>Intermountain Yearly Meeting, Participation in the Life of the Meeting, Advices, 4</em>',

'Have we prayed publicly and often for God to send out workers from among us into his harvest fields?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 5</em>',

'Have we witnessed effectively for Christ through our church\'s events, programs, retreats, camps, and organized evangelistic efforts? Have we assimilated new believers into our fellowship and helped them grow in the faith and knowledge of our Lord Jesus Christ?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 1</em>',

'Make it your aim to promote the cause of truth and righteousness, and to spread the Kingdom of God at home and abroad. Be ready to take your part fearlessly in declaring His message and in witnessing to His power.<br /><em>Great Plains Yearly Meeting, Advices and Queries, Truth</em>',

'Friends fellowship begins and is nurtured within the home and Meeting. It reaches greater fulfillment as we carry our beliefs into the wider community.<br /><em>Pacific Yearly Meeting, Advices and Queries, Reaching Out, Advices</em>',

'Share your Quaker faith. Take time to learn about other people\'s experiences of the Light and, as you learn, give freely from what you have gained. Respect the experiences and opinions of others, but do not be afraid to say what you value. Welcome the diversity of culture, language, and expressions of faith in your Monthly Meeting, the Yearly Meeting, and the world community of Friends. Encourage discourse with Friends of pastoral and programmed traditions, and with members of other faiths.<br /><em>Pacific Yearly Meeting, Advices and Queries, Reaching Out, Advices</em>',

'Friends have a long history of involvement in public and private education, sharing our values with the world and nurturing future generations. Be mindful of the needs of children in your community and of avenues for deepening understanding between peoples.<br /><em>Pacific Yearly Meeting, Advices and Queries, Reaching Out, Advices</em>',

'How does my life reflect Friends beliefs and thus encourage others to be interested in the Religious Society of Friends? Do I respond openly to inquiries about Quaker experience and belief?<br /><em>Pacific Yearly Meeting, Advices and Queries, Reaching Out, Queries for Individuals</em>',

'What does our Meeting do to make others aware of Friends principles and practices?<br /><em>Pacific Yearly Meeting, Advices and Queries, Reaching Out, Queries for the Meeting</em>',
 
'Do you fulfil your part as a religious society and as individuals in promoting the cause of Truth and in spreading the message of Christ throughout the world?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 11</em>',

'Do you, as the way opens, share Friends\' principles with non-Friends? Do you witness to your Quaker faith by letting your life speak? Do you make non-Friends welcome in your meetings for worship? Do you find ways to encourage their continued attendance?<br /><em>Baltimore Yearly Meeting, The Queries, number 8</em>',

'Does your inward faith turn outward? Do you pray for your friends and associates and for those engaged in spreading the Gospel? Have you examined your beliefs and prepared yourself to share them, with sensitivity and humility, as the Holy Spirit leads?<br /><em>Northwest Yearly Meeting, Query 3</em>',

'As any are brought in to the Truth new meetings are to be arranged to suit the general convenience, without respect of persons.<br /><em>Advices from the Elders at Balby (1656), advice number 2</em>',

'Have we served others by doing good? Have we proclaimed the gospel, fulfilling the Great Commission in the spirit of the Great Commandment?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 2</em>',

'Have we stayed active - personally and corporately - in sharing our faith, making disciples and developing leaders? Have we encouraged all of our people to use their unique spiritual gifts?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 7</em>',

'Have we faithfully taught the word and truth of God, including those testimonies which we as Friends have been called to uphold?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 8</em>',

'Have you verbally shared your faith in Christ this week?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 1</em>',

'Make it your aim to promote the cause of truth and righteousness, and to spread the Kingdom of God at home and abroad. Be ready to take your part fearlessly in declaring His message and in witnessing to His power.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 13</em>',

'Those who visit our meetings for worship should be given a friendly welcome and be encouraged to continue to join us in worship. Particular assistance and loving attention should be accorded new members.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 23</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var outreach = "<h2>Outreach</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=outreach;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}