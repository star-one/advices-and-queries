//  Study and prayer
function updateStudy() {
var strings = [
'Be diligent in the private perusal of the Holy Scriptures, and let the daily reading of them in your families be devoutly conducted.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Be careful to make a profitable and religious use of those portions of time on the first day of the week which are not occupied by our meetings for worship.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Do you try to set aside times of quiet for openness to the Holy Spirit? All of us need to find a way into silence which allows us to deepen our awareness of the divine and to find the inward source of our strength. Seek to know an inward stillness, even amid the activities of daily life. Do you encourage in yourself and in others a habit of dependence on God\'s guidance for each day? Hold yourself and others in the Light, knowing that all are cherished by God.<br /><em>Britain Yearly Meeting, Advices and Queries, number 3</em',

'Take time to learn about other people\'s experiences of the Light. Remember the importance of the Bible, the writings of Friends and all writings which reveal the ways of God. As you learn from others, can you in turn give freely from what you have gained? While respecting the experiences and opinions of others, do not be afraid to say what you have found and what you value. Appreciate that doubt and questioning can also lead to spiritual growth and to a greater awareness of the Light that is in us all.<br /><em>Britain Yearly Meeting, Advices and Queries, number 5',

'Are you convinced of the reality of God and do you respond to His Spirit at work within you? Have you individually, through repentance towards God and faith in our Lord Jesus Christ, experienced true conversion of heart? Do you depend on the help and guidance of the Holy Spirit and do you show this by your devotion to God and by your love to all people?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 1</em>',

'Do you make time, in private retirement, for meditation, prayer and thanksgiving, and do you take opportunities for reading and understanding the Bible and other writings which reveal the ways of God? Do you encourage these practices in members of your family, individually, together and in other groups?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 2</em>',

'Do you so order your life as to include reading, meditation and communion, that you may know more of the presence and guidance of the Divine Spirit? Do you remember the need to pray for others, holding them in the presence of God?<br /><em>Ohio Valley Yearly Meeting, Second query</em>',

'Do you make time for meditation, prayer and worship? Do you read the Bible, the writings of Friends, and other inspirational works, seeking new light? Do you regularly seek God\'s guidance? Are you open to guidance and support and do you give thanks for them? Do you share your spiritual insights with others and willingly receive from them in turn?<br /><em>Baltimore Yearly Meeting, The Queries, number 4</em>',

'Do you provide religious education, including study of the Bible and of Friends\' history and practices, in your Meeting? Do you ensure that schools under the care of Friends exemplify Friends\' principles? Do you support and strive to improve the public schools?<br /><em>Baltimore Yearly Meeting, The Queries, number 11</em>',

];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var study_and_prayer = "<h2>Study and prayer</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=study_and_prayer;
  
  scroll(0,0)
}