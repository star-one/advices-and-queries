// Worship
function updateWorship() {
var strings = [
'Be earnestly concerned in religious meetings to wait reverently upon the Lord, seeking to worship Him in Spirit and in Truth, and be in the frequent practice of waiting upon the Lord in private, honestly examining yourselves as to your growth in grace.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Worship is our response to an awareness of God. We can worship alone, but when we join with others in expectant waiting we may discover a deeper sense of God\'s presence. We seek a gathered stillness in our meetings for worship so that all may feel the power of God\'s love drawing us together and leading us<br /><em>Britain Yearly Meeting, Advices and Queries, number 8</em>',

'In worship we enter with reverence into communion with God and respond to the promptings of the Holy Spirit. Come to meeting for worship with heart and mind prepared. Yield yourself and all your outward concerns to God\'s guidance so that you may find \'the evil weakening in you and the good raised up\'.<br /><em>Britain Yearly Meeting, Advices and Queries, number 9</em>',

'Come regularly to meeting for worship even when you are angry, depressed, tired or spiritually cold. In the silence ask for and accept the prayerful support of others joined with you in worship. Try to find a spiritual wholeness which encompasses suffering as well as thankfulness and joy. Prayer, springing from a deep place in the heart, may bring healing and unity as nothing else can. Let meeting for worship nourish your whole life.<br /><em>Britain Yearly Meeting, Advices and Queries, number 10</em>',

'Be honest with yourself. What unpalatable truths might you be evading? When you recognise your shortcomings, do not let that discourage you. In worship together we can find the assurance of God\'s love and the strength to go on with renewed courage.<br /><em>Britain Yearly Meeting, Advices and Queries, number 11</em>',

'When you are preoccupied and distracted in meeting let wayward and disturbing thoughts give way quietly to your awareness of God\'s presence among us and in the world. Receive the vocal ministry of others in a tender and creative spirit. Reach for the meaning deep within it, recognising that even if it is not God\'s word for you, it may be so for others. Remember that we all share responsibility for the meeting for worship whether our ministry is in silence or through the spoken word.<br /><em>Britain Yearly Meeting, Advices and Queries, number 12</em>',

'Do not assume that vocal ministry is never to be your part. Faithfulness and sincerity in speaking, even very briefly, may open the way to fuller ministry from others. When prompted to speak, wait patiently to know that the leading and the time are right, but do not let a sense of your own unworthiness hold you back. Pray that your ministry may arise from deep experience, and trust that words will be given to you. Try to speak audibly and distinctly, and with sensitivity to the needs of others. Beware of speaking predictably or too often, and of making additions towards the end of a meeting when it was well left before.<br /><em>Britain Yearly Meeting, Advices and Queries, number 13</em>',

'Do you gather together at Meetings for Worship in expectant waiting on God, prepared to share experiences and insights? Are these Meetings occasions, when, by the help of the Holy Spirit you are enabled unitedly to worship God? Are you open to the promptings of the Spirit, and sensitive to one another\'s needs, whether your response be in silent worship or through the spoken word?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 3</em>',

'Do you attend meetings for worship in a spirit of willing service and of prayerful desire to make them profitable to each individual and to the assembled group? Are you prepared for worship expecting that your worship will be a source of strength and guidance? Are you careful not to disturb the spirit of the meeting by late arrival? Do you practice a waiting spiritual worship and a free and open ministry under Divine guidance?<br /><em>Ohio Valley Yearly Meeting, First query</em>',

'Are meetings for worship held in expectant waiting for Divine guidance? Are Friends encouraged to share spiritual insights? Are special gifts of ministry recognized and encouraged?  Do you come to meeting with heart and mind prepared? Are you careful not to disturb the spirit of the meeting by late arrival or in other ways?<br /><em>Baltimore Yearly Meeting, The Queries, number 1</em>',

'Are meetings for worship and business duly held, and are you regular in attending them? Do you come ready to commune with God and to fellowship with believers, willing to participate in contemplation or in spoken ministry?<br /><em>Northwest Yearly Meeting, Query 5</em>',

'From the beginnings of our Society, we have considered it necessary to assemble frequently for the purpose of public worship held in expectant waiting for divine guidance, thereby manifesting our belief in and dependence upon our creator. Meeting for worship is fundamental for us, and we should be diligent and punctual in our attendance. We seek, through communion with God, the strengthening influence of the Holy Spirit to enable us to discharge with fidelity the services we owe to God, to each other, and to all people.<br /><em>New York Yearly Meeting, advice number 1</em>',

'Friends are advised to observe our Christian testimony for a faithful ministry of the gospel under the influence of the Holy Spirit. Members are reminded that all have a responsibility in ministry.<br /><em>New York Yearly Meeting, advice number 4</em>',

'Are meetings for worship and business held in expectant waiting for divine guidance? Are we regular and punctual in attendance? Are we willing and faithful in the service of our meeting and in financial support of its activities?<br /><em>New York Yearly Meeting, query number 1</em>',

'The settled meetings to be kept each first-day. General Meetings, as a rule to be on some other day of the week.<br /><em>Advices from the Elders at Balby (1656), advice number 1</em>',

'Ministers to speak the word of the Lord from the mouth of the Lord, without adding or diminishing. If anything is spoken out of the light so that \"the seed of God\" comes to be burdened, it is to be dealt with in private and not in the public meetings, \"except there be a special moving to do so.\"<br /><em>Advices from the Elders at Balby (1656), advice number 4</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var worship = "<h2>Worship</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=worship;
  
  scroll(0,0)
}