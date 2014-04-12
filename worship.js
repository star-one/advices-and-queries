// Worship
function updateWorship() {
var strings = [
'Every Friend has a share of responsibility for worship and ministry. Friends are advised, therefore, to be diligent in attendance at meetings for worship and in inward preparation for them. Come with mind and heart prepared for communion with God. Be obedient and faithful to the promptings of the Holy Spirit, whether by word, by song, in silent waiting or in prayer. Receive the messages of others in a tender spirit.<br /><em>Indiana Yearly Meeting, The Advices, The Meeting Community</em>',

'One powerful way revelation occurs is in silent waiting, which can be described as the amazing fact of Quaker worship. (Elizabeth Bailey, circa 1999)<br /><em>Intermountain Yearly Meeting, Worship</em>',

'The heart of the Religious Society of Friends is the meeting for worship. It calls us to offer ourselves, body, mind, and soul, to wait in active anticipation for the revelation of the Spirit.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 1</em>',

'It is in silence that we still our hearts and minds so that the Spirit of God may enter. This silencing, this waiting in expectancy, this listening for that which is deepest within—this is what Friends call worship. We seek a gathered stillness in our meetings for worship so that all may feel the power of God\'s love leading us and drawing us together.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 2</em>',

'Worship is our response to an awareness of God. We can worship alone, but when we join with others in expectant waiting, we discover a deeper sense of the Presence. When we worship together in awareness that each of us is expecting communication with the Spirit, the power of a meeting for worship is magnified.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 3</em>',

'When the meeting for worship has a central place in our lives, regular and punctual attendance occurs. When we arrive at meeting for worship on time, we help ourselves and others in the gathering wait upon the Spirit. Seeking the Spirit together, we may become aware of a willingness to give as well as to receive. Whether by speaking or by listening, each person contributes to and shares responsibility for the meeting\'s sense of worship. We thereby strengthen one another and refresh ourselves in the life of the Spirit.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 4</em>',

'It is in the rhythm of waiting and listening throughout the meeting for worship that we are enabled to sense the Inward Light and to discern its leadings. When we become preoccupied or distracted in meeting, we need to let such restless thoughts give way to our awareness of the Light among us. By so doing, we prepare ourselves to tenderly receive vocal ministry. As we reach for the meaning deep within a message, we need to recognize that even though it may not be God\'s word for us, it may be so for others.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 5</em>',

'Do not assume that vocal ministry is never to be your gift. Faithfulness and sincerity in speaking, even briefly, may open the way to fuller ministry from others. When prompted to speak, wait patiently to know that the leading and the time are right, but do not let a sense of your own unworthiness hold you back. Pray that your ministry may arise from the Spirit, and trust that words will be given to you. Speak clearly and simply, speaking neither predictably, at too great a length, nor too often. When children are present, bear in mind their understanding and experience. After a message has been given, Friends allow time to ponder and absorb its meaning before another speaks. It is important to maintain sensitivity to what is sacred.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 6</em>',

'We deepen our contribution to communal worship when we open ourselves to the Light in our daily lives. Our spirits are enriched when nourished by means of various spiritual practices, and we inevitably bring those benefits with us to the corporate meeting for worship.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 7</em>',

'From the very beginning, a fundamental practice of Friends has been to assemble publicly for the purpose of worship held in expectant waiting for divine guidance. By worshiping together, we continue to demonstrate our belief in and dependence upon the Holy Spirit. It is important, therefore, that we attend meetings for worship seeking that Spirit that enables us to be fully aware of the divine power of God within as we find our way through the disillusionments and disturbances of the world. It may be helpful to remember that the Religious Society of Friends originated during times of great disturbances. Our belief is in the power of God to lead us out of the confusions of outward violence, inner conflicts, and all forms of willfulness.<br /><em>Intermountain Yearly Meeting, Worship, Advices, 8</em>',

'How do I prepare myself for worship? Do I set aside time during the week to strengthen my spirit? What is it that I bring to the meeting for worship?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 1</em>',

'When in meeting for worship, do I clear my mind so that the Spirit has a place to enter? Do I wait in great expectancy for the Spirit to speak—through me or through another? Do I put my trust in the still small voice that I may hear?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 2</em>',

'How do I discern the source of a leading? How do I know when to speak? Do I hold myself back when moved to speak, or do I trust in the Light to lead me? Am I careful not to speak at undue length or beyond my light? Am I aware of a sense of \"rightness\" after I speak?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 3</em>',

'Does attendance at meeting for worship strengthen my spirit for the week ahead? What brings me back to center—back to my inner wisdom, home to myself — and how can I make that a regular practice?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 4</em>',

'Are meetings for worship regularly held, and is each one of us faithful and punctual in attendance? How do we encourage attendance at meeting for worship? How do we greet newcomers so as to encourage their continued attendance?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 5</em>',

'Do our meetings for worship give evidence that Friends come with hearts and minds prepared and open to the experience of God? How does the meeting help individuals and the group become gathered?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 6</em>',

'Are we careful to ensure that we leave time between spoken messages so that they may be absorbed by those for whom they are intended? How do we encourage and foster the spiritual gifts of those who attend our meeting?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 7</em>',

'Are our meetings for worship held in expectant waiting for divine guidance and openness to the Inner Light? Is there a living silence in which we feel drawn together by the power of God in our midst? In what ways do our meetings for worship provide a source of strength and guidance to those present?<br /><em>Intermountain Yearly Meeting, Worship, Queries, 8</em>',

'Are ministers, in the exercise of their gifts, careful to wait for divine ability? and are they sound in word and doctrine?<br /><em>Rocky Mountain Yearly Meeting, Queries for Ministers and Elders, 2</em>',

'Are ministers and elders diligent in the attendance of meetings for worship and discipline; and concerned to encourage their families to that religious duty?<br /><em>Rocky Mountain Yearly Meeting, Queries for Ministers and Elders, 1</em>',

'Let all be careful not to hurt their service by tones, avoiding all affectation, and those gestures, which do not comport with Christian gravity.<br /><em>Rocky Mountain Yearly Meeting, Advices to Ministers and Elders, 5</em>',

'Let all be cautious of interrupting the solemnity of meetings, by unnecessary additions towards the conclusion.<br /><em>Rocky Mountain Yearly Meeting, Advices to Ministers and Elders, 4</em>',

'Let all, in their testimonies, be cautious of using unnecessary preambles, and of asserting too positively a divine impulse; the baptizing power of truth accompanying their words, being the true evidence.<br /><em>Rocky Mountain Yearly Meeting, Advices to Ministers and Elders, 1</em>',

'Have we spent time in silent listening to the Holy Spirit in both personal and corporate worship?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 4</em>',

'Have we built loyalty for placing weekly worship as a higher priority than pleasure, youth sports, business or recreation? Have we encouraged our people to worship and serve in one congregation rather than becoming consumers of programs offered by different churches?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 2</em>',

'The heart of the Religious Society of Friends is the Meeting for Worship. In direct communion with God, we offer ourselves for God\'s will. Our daily lives are linked with the Meeting for Worship, the Meeting for Worship with our daily lives.<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship, Advices</em>',

'Come regularly to Meeting for Worship, even when you are angry, tired, or spiritually cold. Bring your joys and your hurts, and the needs of other people. Accept and support each other in the community where God dwells among us. As you do so, you may find the grace of prayer.<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship, Advices</em>',

'At times the Spirit may prompt you to speak in Meeting. Wait patiently to know that the sense and the time are right. When you are sure, have confidence that the words will be given to you. Listen to the ministry of others with an open spirit. If it is not God\'s word for you, it may be for others. After a message has been given, allow time to ponder its meaning and to let the Meeting return to silent worship. In speech and in silence, each person contributes to the Meeting.<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship, Advices</em>',

'Do I come to Meeting with heart and mind prepared for worship? In both silent and vocal ministry, do I respond to the leadings of the Holy Spirit, without pre-arrangement and in simplicity and truth? Am I careful not to speak at undue length or beyond personal spiritual experience?<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship, Queries for Individuals</em>',

'Do we meet in expectant waiting for the promptings of the Divine Spirit? Are we drawn together in a living silence by the power of God in our midst?<br /><em>Pacific Yearly Meeting, Advices and Queries, Meeting for Worship, Queries for the Meeting</em>',

'Even the mundane and the everyday can be performed as a form of worship.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B14</em>',

'All of us are at times preoccupied and distracted in Meeting. Accept these wanderings and then release them so that you can move towards the still centre of your own being and find the unity of the Meeting.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B6</em>',

'Remember that ministry – in silence, speech, and other forms – is the responsibility of everyone; and that all present contribute to the quality and depth of Meeting for Worship.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B7</em>',

'If you are prompted to speak, do not be prevented by a sense of your own unworthiness, or a fear of not finding the right words. Pray that the Spirit may guide you and that your ministry may arise from deep experience. Wait patiently to know that the sense, the occasion and the timing are right. When you are sure, have confidence that the words will be given to you. Faithfulness and sincerity in speaking may open the way to ministry from others.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B8</em>',

'Do you sometimes speak too often, too predictably, or too soon after someone else has spoken?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B9</em>',

'Be sure to take time to reach for the underlying meaning in the spoken ministry of others. Receive it in a tender and understanding spirit, and avoid hurtful criticism. What may seem of little value to one hearer may for another be the direct word of God. Do you accept that in worship God may ask hard questions of you, and challenge you to make difficult decisions?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B10</em>',

'Do not feel that your ministry must conform to that of others. You may be moved to sing, to dance, or to express something new or different. Are you prepared for worship to bring exhilaration, grieving, passion or mystery? Are you prepared for worship to bring challenge? Are you able to worship even in times of spiritual dryness, when life seems humdrum or you feel lethargic?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B11</em>',

'Come regularly to Meeting for Worship, especially at those times when you feel angry or tired, or spiritually low. Bring your joys and your hurts, your hopes and your fears, and your awareness of the needs of other people. As you do so, you may find that you see and feel things differently. In the silence ask for and accept the support of others joined with you in worship. Be open to spiritual wholeness encompassing sorrow, suffering and anguish, as well as thankfulness and joy. Prayer, springing from a deep place in the heart, may bring healing and unity as nothing else can. Let Meeting for Worship nourish your whole life.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B3</em>',

'Our Meetings for Worship, in which we join together in stillness, are the central activity of the Religious Society of Friends. In our worship, we respond to an awareness of God\'s presence. We seek to find through the stillness and quietness the mysterious and unknown. We can reflect and worship at any time, in any place. From our worship flows guidance for our daily lives. How can you best prepare yourself for worship, in heart, mind and body?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B1</em>',

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

'Have you found joy in the Lord through prayer, Bible reading, public worship, and a lifestyle of giving thanks in all circumstances? Were you in worship last Sunday, and faithful in ministry to your church this week?<br /><em>Evangelical Friends Church Southwest, Individual Accountability Questions, number 2</em>',

'Are meetings for worship well and punctually attended? Is our behavior therein conducive to meditation and communion with God? Do we maintain a waiting spiritual worship and a free gospel ministry? Do we welcome others to share this fellowship with us?<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, 1st query</em>',

'In your meetings for worship be earnestly concerned to enter reverently into communion with God. Come with minds and hearts prepared. Yield yourselves up to the influence of the Divine Presence so that you may find the evil in you weakening and the good raised up. God calls each one to the service of the meeting. Be obedient and faithful, whether by word or silent prayerful waiting; and be ready to receive the message of others in a tender spirit.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 4</em>',

'A punctual attendance at the hour appointed for Meeting for Worship is a matter of no small importance. If we hurry from outward occupation, we are in danger of two things: our thoughts may still be with that in which we have been engaged, and our late arrival may interrupt that holy silence which should prevail; however, let us welcome with open hearts all who join us no matter when they arrive.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 21</em>',

'We would urge Friends, when away from home, to attend a Meeting for Worship if such is within reach. Such attendance may well strengthen the meeting, and may bring Friends who were hitherto strangers into fellowship with one another.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 22</em>',

'When we gather together in worship, let us remember that there is committed to us, as disciples of Christ, a share in the priesthood. We should help one another, whether in silence, or through spoken word, or prayer. Let none of us assume that vocal ministry is never to be our part. If the call comes, there should be no quenching of the Spirit. The sense of our own unworthiness must not exempt us from this service, nor must the fear of being unable to find the right words, \"for it shall be given you in that same hour what ye shall speak\" (Matt. 10:19)<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 24</em>',

'We should recognize the importance of finding occasion for some united worship during the week, either at the meetinghouse, or in a private home. Such may be of great assistance, not only to the individual, but also to the life of the whole group.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 25</em>',

'Is the ministry of our meeting such as to promote the spiritual growth of our membership, building it up in the faith that is in Jesus Christ? Are we personally taking due care to see that the basic principles of Friends\' worship are kept clearly before our members?<br /><em>Ohio Yearly Meeting (Conservative), Queries for the Meetings for Ministry & Oversight, number 2</em>',

'Let all ministers abide in a simple and patient submission to the will of God for that Divine ability by which alone they may faithfully and effectively preach the Word. Remember that all acceptable worship and all Gospel ministry is performed under the immediate teaching and influence of the Holy Spirit.<br /><em>Ohio Yearly Meeting (Conservative), Advices for the Meetings for Ministry & Oversight, number 1</em>',

'Let all, in their spoken testimonies, be cautious of using unnecessary preambles, and of asserting too positively a Divine impulse--the baptizing power of Truth accompanying their words being the true evidence.<br /><em>Ohio Yearly Meeting (Conservative), Advices for the Meetings for Ministry & Oversight, number 2</em>',

'Let all be cautious of interrupting the solemnity of the meeting by too frequent speaking or by unnecessary additions toward the conclusion of their addresses.<br /><em>Ohio Yearly Meeting (Conservative), Advices for the Meetings for Ministry & Oversight, number 5</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var worship = "<h2>Worship</h2><p>" + randomString + "</p>";

var txt=document.getElementById("query")
txt.innerHTML=worship;
  
scroll(0,0)

sharetext = randomString.replace("<br /><em>", " ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}