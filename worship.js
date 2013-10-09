// Worship
function updateWorship() {
var strings = [
'Be earnestly concerned in religious meetings to wait reverently upon the Lord, seeking to worship Him in Spirit and in Truth, and be in the frequent practice of waiting upon the Lord in private, honestly examining yourselves as to your growth in grace.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Worship is our response to an awareness of God. We can worship alone, but when we join with others in expectant waiting we may discover a deeper sense of God\'s presence. We seek a gathered stillness in our meetings for worship so that all may feel the power of God\'s love drawing us together and leading us<br /><em>Britain Yearly Meeting, Advices and Queries, number 8</em>',

'In worship we enter with reverence into communion with God and respond to the promptings of the Holy Spirit. Come to meeting for worship with heart and mind prepared. Yield yourself and all your outward concerns to God\'s guidance so that you may find \'the evil weakening in you and the good raised up\'.<br /><em>Britain Yearly Meeting, Advices and Queries, number 9</em>',

'Come regularly to meeting for worship even when you are angry, depressed, tired or spiritually cold. In the silence ask for and accept the prayerful support of others joined with you in worship. Try to find a spiritual wholeness which encompasses suffering as well as thankfulness and joy. Prayer, springing from a deep place in the heart, may bring healing and unity as nothing else can. Let meeting for worship nourish your whole life.<br /><em>Britain Yearly Meeting, Advices and Queries, number 10</em>',

'Be honest with yourself. What unpalatable truths might you be evading? When you recognise your shortcomings, do not let that discourage you. In worship together we can find the assurance of God\'s love and the strength to go on with renewed courage.<br /><em>Britain Yearly Meeting, Advices and Queries, number 11</em>',

'When you are preoccupied and distracted in meeting let wayward and disturbing thoughts give way quietly to your awareness of God\'s presence among us and in the world. Receive the vocal ministry of others in a tender and creative spirit. Reach for the meaning deep within it, recognising that even if it is not God\'s word for you, it may be so for others. Remember that we all share responsibility for the meeting for worship whether our ministry is in silence or through the spoken word.<br /><em>Britain Yearly Meeting, Advices and Queries, number 12</em>',

'Do not assume that vocal ministry is never to be your part. Faithfulness and sincerity in speaking, even very briefly, may open the way to fuller ministry from others. When prompted to speak, wait patiently to know that the leading and the time are right, but do not let a sense of your own unwotthiness hold you back. Pray that your ministry may arise from deep experience, and trust that words will be given to you. Try to speak audibly and distinctly, and with sensitivity to the needs of others. Beware of speaking predictably or too often, and of making additions towards the, end of a meeting when it was well left before.<br /><em>Britain Yearly Meeting, Advices and Queries, number 13</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var worship = randomString;

  var txt=document.getElementById("query")
  txt.innerHTML=worship;
}