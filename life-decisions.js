// Life decisions
function updateLife() {
var strings = [
'John Woolman said, \'As Christians all we possess are the gifts of God... To turn all the treasures we possess into the channel of Universal Love becomes the business of our lives\'. The principle of stewardship applies to all we have and are. As individuals, we are called to use our time, our various abilities, our strength, our money, and our material possessions with care, managing them wisely and sharing them generously.<br /><em>Pacific Yearly Meeting, Advices and Queries, Stewardship and Vocation, Advices</em>',

'From the indwelling Seed of God, we discover our particular gifts and discern the service to which we are called. In making choices about occupation or education, consider the way that offers the fullest opportunity to develop your individual abilities and contribute to the world community while providing for yourself and your family. In daily work, manifest a spirit of justice and understanding, and thus give a living witness to the truth.<br /><em>Pacific Yearly Meeting, Advices and Queries, Stewardship and Vocation, Advices</em>',

'Be ready to limit engagements, to withdraw for a time, or even to retire from an activity that inhibits your ability to follow a higher call. Try to discern the right moment to accept new responsibilities as well as to relinquish responsibility that can pass to others. Be open to your calling in different stages of life. Meetings need the strength and vigor of young people as well as the experience and wisdom of elders.Although they may not be able to contribute great financial support, their energy and insight invigorate the community. As people begin careers and families, they may need the spiritual and experienced help of the Meeting. Later, when families are growing up and careers are established, greater participation in the Meeting and greater financial support may become possible. Welcome the approach of old age, your own and others\', as an opportunity for wisdom and greater attachment to the Light.Meetings should be ready with material and spiritual support for those suffering from unemployment or facing difficult vocational decisions.<br /><em>Pacific Yearly Meeting, Advices and Queries, Stewardship and Vocation, Advices</em>',

'How have I been faithful to the leadings of the Spirit in choosing work or vocation? What am I doing with my talents, time, money, and possessions? Am I sharing them according to the Light I am given? Is my conduct at the workplace consistent with my life as a Friend? How does my daily work enhance my spiritual life?<br /><em>Pacific Yearly Meeting, Advices and Queries, Stewardship and Vocation, Queries for Individuals</em>',

'How does the Meeting help and support members who are in job transitions?<br /><em>Pacific Yearly Meeting, Advices and Queries, Stewardship and Vocation, Queries for the Meeting</em>',

'We all have different gifts and needs. Discover, acknowledge and respond to your own, and those of other people. Free yourself from limiting ideas, for example about gender roles. When choices arise in work, leisure, interests,relationships or education, do you follow the way that provides the greatest opportunity for the development and use of your gifts in the service of God and the community? Look for the leadings of God in all circumstances, even if you seem to have no choice. Live adventurously.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D16</em>',

'Certain times of life bring energy and activity; other times bring a need for rest and renewal. Do you respond to the rhythms of your life, accepting or declining commitments without an undue sense of pride or guilt?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D17</em>',

'Approach old age with acceptance and anticipation. Like other times in life, it can be a time for growing. Try to discern the right moment for relinquishing long-term responsibilities, and look for new opportunities for involvement. As outward activity lessens, your thoughts and prayer may liberate love and power in others.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D18</em>',

'Do you apply the principles of Quaker decisionmaking in your home, in your work, and in other areas of your life?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, C4</em>',

'Do you use the guidance of the Spirit when seeking truth?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, A4</em>',

'Live adventurously. When choices arise, do you take the way that offers the fullest opportunity for the use of your gifts in the service of God and the community? Let your life speak. When decisions have to be made, are you ready to join with others in seeking clearness, asking for God\'s guidance and offering counsel to one another?<br /><em>Britain Yearly Meeting, Advices and Queries, number 27</em>',

'Every stage of our lives offers fresh opportunities. Responding to divine guidance, try to discern the right time to undertake or relinquish responsibilities without undue pride or guilt. Attend to what love requires of you, which may not be great busyness.<br /><em>Britain Yearly Meeting, Advices and Queries, number 28</em>',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var life_decisions = "<h2>Life decisions</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=life_decisions;
  
  scroll(0,0)
}