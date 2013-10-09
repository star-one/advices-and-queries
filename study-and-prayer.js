//  Study and prayer
function updateStudy() {
var strings = [
'Be diligent in the private perusal of the Holy Scriptures, and let the daily reading of them in your families be devoutly conducted.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Be careful to make a profitable and religious use of those portions of time on the first day of the week which are not occupied by our meetings for worship.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Do you try to set aside times of quiet for openness to the Holy Spirit? All of us need to find a way into silence which allows us to deepen our awareness of the divine and to find the inward source of our strength. Seek to know an inward stillness, even amid the activities of daily life. Do you encourage in yourself and in others a habit of dependence on God\'s guidance for each day? Hold yourself and others in the Light, knowing that all are cherished by God.<br /><em>Britain Yearly Meeting, Advices and Queries, number 3</em',

'Take time to learn about other people\'s experiences of the Light. Remember the importance of the Bible, the writings of Friends and all writings which reveal the ways of God. As you learn from others, can you in turn give freely from what you have gained? While respecting the experiences and opinions of others, do not be afraid to say what you have found and what you value. Appreciate that doubt and questioning can also lead to spiritual growth and to a greater awareness of the Light that is in us all.<br /><em>Britain Yearly Meeting, Advices and Queries, number 5',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var study_and_prayer = randomString;

  var txt=document.getElementById("query")
  txt.innerHTML=study_and_prayer;
}