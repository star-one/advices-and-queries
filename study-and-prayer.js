//  Study and prayer
function updateStudy() {
var strings = [
'Dear Friends, attend to the promptings of love and truth in your hearts, which are the leadings of God. Do not resist God\'s strivings within you. Make a quiet place in your daily life for prayer and communion with God. Read the Bible and devotional literature with constancy. Look to your meeting for guidance and spiritual growth.<br /><em>Indiana Yearly Meeting, The Advices, Spiritual Life</em>',

'When we find ourselves teaching ... can we draw upon that respect for one another and faith in one another\'s potential that will enable the other to feel taller and more capable? At Rufus Jones\' memorial meeting, one of his students simply said: \"He lit my candle.\" That is a high aim for us all to aspire to in educating ourselves and our young people. (Barbara Windle, 1988 in Quaker Faith & Practice of Britain Yearly Meeting, 1993)<br /><em>Intermountain Yearly Meeting, Religious Education</em>',

'The Bible and other religious literature is the rightful heritage of us all. The study of sacred books expands and deepens our awareness of our own spiritual heritage and that of others. What we read means little unless it helps us understand our own personal religious experience, the work of the Spirit behind the words. It helps to know that our search for truth can include a multitude of experiences.<br /><em>Intermountain Yearly Meeting, Religious Education, Advices, 1</em>',

'All adults in meeting can benefit from religious education in the form of Quaker Studies programs, spiritual formation groups, prayer groups, worship-sharing groups, or adult First Day school classes. Like a garden, the spirit within must be tended and nurtured. The meeting is enriched when all those participating care for their own spirits.<br /><em>Intermountain Yearly Meeting, Religious Education, Advices, 3</em>',

'In what ways does our meeting help develop the spiritual lives of our children and adult members and attenders? Do we provide our children and young adults with a framework for active, ongoing participation in meeting? Do we welcome their presence among us?<br /><em>Intermountain Yearly Meeting, Religious Education, Queries, 1</em>',

'How does our meeting educate its members of all ages about the Bible, other sacred writings, our Christian heritage, and the history and principles of Friends?<br /><em>Intermountain Yearly Meeting, Religious Education, Queries, 2</em>',

'Let all read the Holy Scriptures frequently, and be careful neither to misquote nor misapply them.<br /><em>Rocky Mountain Yearly Meeting, Advices to Ministers and Elders, 2</em>',

'Have we taught and practiced spiritual disciplines – Bible reading, prayer, fasting, witnessing, service, worship, silence, solitude?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 7</em>',

'Has our congregational life together revealed an intense desire to obey the written and living word of God?<br /><em>Evangelical Friends Church Southwest, Congregation Accountability Questions, 3</em>',

'The life of the spirit gains depth and vigor through devotional practices, prayer, study and meditation. Take time regularly for individual and family worship, discussions, readings from sacred texts, and other spiritual refreshment in order to live a more centered life and to bring a deeper presence to the Meeting for Worship.<br /><em>Pacific Yearly Meeting, Advices and Queries, Spiritual life, Advices</em>',

'Friends believe that the spiritual path is best found in community. Create opportunities in your Meetings for people of all ages to explore and express their evolving relationship with the Divine, their spiritual highs and their doubts. If different metaphors and language interfere with communication, listen more deeply, honoring the Spirit in which the thought and words have their beginnings.<br /><em>Pacific Yearly Meeting, Advices and Queries, Spiritual life, Advices</em>',

'Do I live in thankful awareness of God\'s constant presence in my life? Am I sensitive and obedient to the leadings of the Holy Spirit? When do I take time for contemplation and spiritual refreshment? What steps am I taking to center my life and to stay open to continuing revelation?<br /><em>Pacific Yearly Meeting, Advices and Queries, Spiritual life, Queries for Individuals</em>',

'Do we share our spiritual lives with others in the Meeting, seeking to know one another in that which is eternal? Does the Meeting provide religious education including study of the Bible and Friends\' history and practices?<br /><em>Pacific Yearly Meeting, Advices and Queries, Spiritual life, Queries for the Meeting</em>',

'Prayer springs from a deep place in the heart. The spirit of prayer will be active in a gathered Meeting. Vocal prayer, though it may be expressed in imperfect words, can draw those present into communion with God and with one another.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B12',

'Bring everything that concerns you into the light, so that you feel a weakening of what is unworthy in you, and a strengthening of what is good. Accept and support each other in love.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B13',

'To widen our vision and deepen our experience, we all need times of solitary quietness for worship and reflection, as well as times for joining together in worship.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, B2',

'Consider the means of spiritual growth in your life. Do you make time for regular meditation, prayer and reflection? Are you gaining insights and inspiration from the Bible, from other writings including the literature of other faiths,and from the religious experiences of Friends and others,past and present?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, A7</em>',

'Be diligent in the private perusal of the Holy Scriptures, and let the daily reading of them in your families be devoutly conducted.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Be careful to make a profitable and religious use of those portions of time on the first day of the week which are not occupied by our meetings for worship.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Do you try to set aside times of quiet for openness to the Holy Spirit? All of us need to find a way into silence which allows us to deepen our awareness of the divine and to find the inward source of our strength. Seek to know an inward stillness, even amid the activities of daily life. Do you encourage in yourself and in others a habit of dependence on God\'s guidance for each day? Hold yourself and others in the Light, knowing that all are cherished by God.<br /><em>Britain Yearly Meeting, Advices and Queries, number 3</em',

'Take time to learn about other people\'s experiences of the Light. Remember the importance of the Bible, the writings of Friends and all writings which reveal the ways of God. As you learn from others, can you in turn give freely from what you have gained? While respecting the experiences and opinions of others, do not be afraid to say what you have found and what you value. Appreciate that doubt and questioning can also lead to spiritual growth and to a greater awareness of the Light that is in us all.<br /><em>Britain Yearly Meeting, Advices and Queries, number 5',

'Are you convinced of the reality of God and do you respond to His Spirit at work within you? Have you individually, through repentance towards God and faith in our Lord Jesus Christ, experienced true conversion of heart? Do you depend on the help and guidance of the Holy Spirit and do you show this by your devotion to God and by your love to all people?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 1</em>',

'Do you make time, in private retirement, for meditation, prayer and thanksgiving, and do you take opportunities for reading and understanding the Bible and other writings which reveal the ways of God? Do you encourage these practices in members of your family, individually, together and in other groups?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 2</em>',

'Do you so order your life as to include reading, meditation and communion, that you may know more of the presence and guidance of the Divine Spirit? Do you remember the need to pray for others, holding them in the presence of God?<br /><em>Ohio Valley Yearly Meeting, Second query</em>',

'Do you make time for meditation, prayer and worship? Do you read the Bible, the writings of Friends, and other inspirational works, seeking new light? Do you regularly seek God\'s guidance? Are you open to guidance and support and do you give thanks for them? Do you share your spiritual insights with others and willingly receive from them in turn?<br /><em>Baltimore Yearly Meeting, The Queries, number 4</em>',

'Do you provide religious education, including study of the Bible and of Friends\' history and practices, in your Meeting? Do you ensure that schools under the care of Friends exemplify Friends\' principles? Do you support and strive to improve the public schools?<br /><em>Baltimore Yearly Meeting, The Queries, number 11</em>',

'Do you cultivate your spiritual growth through prayer and Bible reading and through attendance at meetings for worship and study? Are you finding joy in the Lord?<br /><em>Northwest Yearly Meeting, Query 2</em>',

'Friends are advised to read frequently the Scriptures and such other books as will inspire and instruct, and to encourage the practice by their families and others.<br /><em>New York Yearly Meeting, advice number 2</em>',

'Do we make opportunity in our daily lives for communion with God and the opening of our hearts to an awareness of the Christ Within? Are we thankful for each day as an opportunity for a new adventure of life with God?<br /><em>New York Yearly Meeting, query number 2</em>',

'Are we careful that our ministry is under the leading of the Holy Spirit? Are we concerned to take time for the study of Scripture and other writings of spiritual value? Are we concerned for the spiritual growth of one another?<br /><em>New York Yearly Meeting, query number 3</em>',

'The elders made by the Holy Ghost are to feed the flock, taking the oversight willingly, not as lords, but as examples to the flock.<br /><em>Advices from the Elders at Balby (1656), advice number 19</em>',

'Have we prayerfully listened for the voice of the Good Shepherd, discerned what God was doing and guided our church body where its Head, our Lord Jesus Christ, led us?<br /><em>Evangelical Friends Church Southwest, Leaders Accountability Questions, number 1</em>',

'Remember the special opportunities for refreshment of spirit and for service which the first day of the week affords; use them faithfully, as befits the Friends of the Master.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 15</em>',

'Seek for your children that full development of God\'s gifts which true education can bring about. Remember that the service to which we are called needs healthy bodies, trained minds, high ideals, and an understanding of the laws and purposes of God. Give of your best to the study of the Bible, and the understanding of the Christian faith. Be open-minded, ready constantly to receive new light.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 18</em>',

'Be zealous that education shall be continued throughout life. Willingness to be used in mind as well as in body, and to be equipped in both, is a needful part of Christian character. Our service to God is incomplete without the contribution of the intellect.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 19</em>',

'Let all read the Holy Scriptures frequently, and be careful to seek for Divine guidance in interpreting their meaning.<br /><em>Ohio Yearly Meeting (Conservative), Advices for the Meetings for Ministry & Oversight, number 3</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var study_and_prayer = "<h2>Study and prayer</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=study_and_prayer;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}