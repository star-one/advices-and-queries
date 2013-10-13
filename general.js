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

'Do you give generous financial support to the work of Friends? Do you contribute regularly to the ministry of your church and to the wider outreach of the Yearly Meeting? Are you and your meeting aware of those likely to require material aid, and do you give freely to those in need?<br /><em>Northwest Yearly Meeting, Query 7</em>',

'Use of the Creation: We should keep our consumption of material things down to what we need, avoiding vanity, luxury, waste, and all unhealthful indulgences. Plainness in our diet, clothing, home furnishings and other possessions is appropriate to followers of Jesus. We should be open-hearted in contributing to the material needs of others, especially those of church members, and all are urged to request material aid openly when they need it. Dependence of church members on civil government for material support should be avoided if possible, especially where such dependence would interfere with the Christian\'s freedom to testify to the government of Christ.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Opinions: We must resist the temptation to be possessively attached to our own ideas. Christ will teach us what we need to know to perform his service, but not to satisfy our curiosity or to encourage us in building theories. We are advised to bear in mind that what we think we know is often influenced by hearsay, faulty memory, or the climate of opinion among our immediate associates. Opinions should be held modestly if at all, and they should not become the occasion of arguments. In speaking what we feel God has led us to assert, we should speak forthrightly, but avoid laying stress on our personal claim to revelation, allowing the power of Truth to accompany its own message.<br /><em>Friends of Truth / Glenside Friends Meeting, Christian Conduct</em>',

'Do we partake of the joy of the love of God and make our lives a celebration of the sharing of this love? Do our daily lives so demonstrate Friends\' testimonies as to commend them to others?<br /><em>New York Yearly Meeting, query number 15</em>',

'Dearly beloved Friends, these things we do not lay upon you as a rule or form to walk by, but that all, with the measure of light which is pure and holy, may be guided: and so in the light walking and abiding, these may be fulfilled in the Spirit, not from the letter, for the letter killeth, but the Spirit giveth life.<br /><em>Advices from the Elders at Balby (1656), Postscript</em>',

];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var general = "<h2>General</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=general;
  
  scroll(0,0)
}
