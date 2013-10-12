// General
function updateGeneral() {
var strings = [
'Take heed, dear Friends, we entreat you, to the convictions of the Holy Spirit, who leads us, through unfeigned repentance and living faith in the Son of God, to reconciliation with our Heavenly Father and to the blessed hope of eternal life, brought to us in the sacrifice of our Lord and Savior Jesus Christ.<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Finally, dear Friends, let your whole conduct and conversation be such as becometh the Gospel. Exercise yourselves to have a conscience void of offense toward God and toward all persons. Be faithful and steadfast in your allegiance and service to your Lord; continue in His love, endeavoring to keep the unity of the Spirit in the bond of Peace<br /><em>North Carolina Yearly Meeting (Conservative), Advices</em>',

'Do you recognise the needs and gifts of each member of your family and household, not forgetting your own? Try to make your home a place of loving friendship and enjoyment, where all who live or visit may find the peace and refreshment of God\'s presence.<br /><em>Britain Yearly Meeting, Advices and Queries, number 26</em>',

'Take heed, dear Friends, to the promptings of love and truth in your hearts. Trust them as the leadings of God whose Light shows us our darkness and brings us to new life.<br /><em>Britain Yearly Meeting, Advices and Queries, number 1</em>',

'Bring the whole of your life under the ordering of the spirit of Christ. Are you open to the healing power of God\'s love? Cherish that of God within you, so that this love may grow in you and guide you. Let your worship and your daily life enrich each other. Treasure your experience of God, however it comes to you. Remember that Christianity is not a notion but a way.<br /><em>Britain Yearly Meeting, Advices and Queries, number 2</em>',

'The Religious Society of Friends is rooted in Christianity and has always found inspiration in the life and teachings of Jesus. How do you interpret your faith in the light of this heritage? How does Jesus speak to you today? Are you following Jesus\' example of love in action? Are you learning from his life the reality and cost of obedience to God? How does his relationship with God challenge and inspire you?<br /><em>Britain Yearly Meeting, Advices and Queries, number 4',

'Be aware of the spirit of God at work in the ordinary activities and experience of your daily life. Spiritual learning continues throughout life, and often in unexpected ways. There is inspiration to be found all around us, in the natural world, in the sciences and arts, in our work and friendships, in our sorrows as well as in our joys. Are you open to new light, from whatever source it may come? Do you approach new ideas with discernment?<br /><em>Britain Yearly Meeting, Advices and Queries, number 7',

'Do you make your homes places of love and hospitality? Do you make a place in your daily family life for reading, meditation and prayer? Do you share your deepest beliefs with your children, while encouraging them to develop their own spiritual lives? Do you encourage their interests in constructive, creative activities and their reading of the Bible and other inspirational literature? Do you maintain a constant companionship within your families by sincere and honest communication? When unsatisfactory relationships exist within a family, is the loving, sympathetic counsel of responsible and qualified persons made available to its members?<br /><em>Ohio Valley Yearly Meeting, Sixth query</em>',

'Do you fulfill the responsibility of membership in our religious society by regular attendance and support of its meetings? What are you doing to strengthen the spiritual life of the meeting and to invite others to share in its fellowship? Do you recognize and encourage the development of the spiritual gifts of your members? Are you active in advancing the religious principles of our Society and in applying the social and political implications of those principles?<br /><em>Ohio Valley Yearly Meeting, Seventh query</em>',

'Do you encourage and support the educational activities of Friends? Are you interested in the schools of your community and concerned to establish practices in these consistent with the values you cherish as Friends? What efforts are you making to increase your understanding of your Quaker and other religious heritages and their relation to other religions?<br /><em>Ohio Valley Yearly Meeting, Eighth query</em>',

'Do you regard your possessions as given you in trust and do you part with them freely for the needs of others? Are your means of livelihood in keeping with your ideals as Friends? Are you concerned that your business be primarily a service to people? What are you doing to foster upright practices in business relations? Do you maintain strict integrity in all business transactions? Do you bear a faithful testimony against all forms of gambling?<br /><em>Ohio Valley Yearly Meeting, Twelfth query</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var general = "<h2>General</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=general;
  
  scroll(0,0)
}
