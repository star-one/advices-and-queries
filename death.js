// Death
function updateDeath() {
var strings = [
'Face with courage transitions such as illness and aging, both for yourself and for those dear to you. As outward activity lessens, your seasoned thought and prayer may liberate love and power in others. Make provision for the settlement of your affairs while in health so that others may not be burdened.<br /><em>Indiana Yearly Meeting, The Advices, Home and Family</em>',

'Life, then, is a gift of time. For each of us the days are numbered. I am grateful for each day I have to walk this beautiful earth. And I do not fear the return to the earth, for I know... that it is part of myself. (Elizabeth Watson, Guests of My Life, 1979)<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement</em>',

'New opportunities present themselves at every stage of life. Approach the aging process with courage and hope. Honor that which you have been, welcoming new possibilities for wisdom, objectivity, and greater knowledge of the Spirit. Realize that as time passes, new ways of receiving and reflecting God\'s love will open.<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Advices, 1</em>',

'Inspect your finances while you are in good health, making whatever provisions are needed for the settlement of your affairs. Consider the value of a living will and other documents that express your wishes for your end of life. Make sure that those dear to you are well informed, so that you and they are freed to live more fully. Friends are advised to review these documents annually.<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Advices, 2</em>',

'Aging may bring increased disability and loneliness, so care for yourself tenderly, being aware that exercise, nutrition, and medical care are important. Determine who will help you should a need arise, and make arrangements for your care such that undue burdens do not fall on any one person.<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Advices, 3</em>',

'Tragedies can occur at any time in our lives; death does not always announce itself. Friends of any age can prepare themselves for the loss of a dear one. It is as important to prepare for the end of our life as it is to prepare for other important events. Bookstores are filled with books that describe stages of life, death, and dying. It is helpful to know what lies ahead and to be ready for it.<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Advices, 4</em>',

'Children\'s grief is frequently unseen. We need to be mindful that their sorrow is as real as adults\' sorrow and needs to be equally expressed and accepted. Other losses, such as that of a beloved pet, impart sorrow as well. Friends must be careful not to minimize the extent of heartache that such losses cause. The meeting can be especially helpful to children when their parents are also grieving.<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Advices, 5</em>',

'Meetings need to let members and attenders know whom to contact in time of serious illness or death. It is useful for Meetings to have information available on the laws of their state regarding burials and cremation as well as which funeral homes and cemeteries are sympathetic to Friends\' wishes for simplicity.<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Advices, 6</em>',

'Are we aware of those in our meeting who endure tragedy or loss? Do we seek to understand their needs and to comfort them? Do we, in loving concern, extend assistance to those who require it?<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Queries, 1</em>',

'Have I prepared for my own death and for the deaths of those I love with the same care as for other events in my life? Have I learned what I can about the aging and dying process? If not, what prevents me from learning about these topics? Do I fully discuss and share this information within my family?<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Queries, 2</em>',

'Are my personal papers and finances up to date and in good order? Have documents been prepared that will help those I love in the event of my serious illness or death: a will, a living will, powers of attorney, and a description of the type of care I desire in the case of a serious, debilitating event or illness? Have I discussed these matters with those close to me?<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Queries, 3</em>',

'Should my vision, hearing, balance, or thought processes deteriorate, what steps will I take to prevent having an accident? When will I be willing to relinquish my car keys?<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Queries, 4</em>',

'How can the meeting help me find clearness about the difficult questions surrounding aging and dying? Do I know whom to contact when I am in need of spiritual support or material assistance? What am I willing to ask of the meeting? Am I willing to accept what the meeting has to give?<br /><em>Intermountain Yearly Meeting, Ageing, Death, and Bereavement, Queries, 5</em>',

'Be careful to make or revise your wills, and settle your outward affairs while in health.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Approach old age with courage and hope. As far as possible, make arrangements for your care in good time, so that an undue burden does not fall on others. Although old age may bring increasing disability and loneliness, it can also bring serenity, detachment and wisdom. Pray that in your final years you may be enabled to find new ways of receiving and reflecting God\'s love.<br /><em>Britain Yearly Meeting, Advices & Queries, number 29</em>',

'Are you able to contemplate your death and the death of those closest to you? Accepting the fact of death, we are freed to live more fully. In bereavement, give yourself time to grieve. When others mourn, let your love embrace them.<br /><em>Britain Yearly Meeting, Advices & Queries, number 30</em>',

'The attention of Friends is called to the propriety of conducting funerals and memorial meetings in a sincere spirit of worship. They are advised to avoid the display of floral decorations and the wearing of mourning and to adhere to our simple ceremony.<br /><em>New York Yearly Meeting, advice number 12</em>',

'Members are affectionately reminded of the importance of keeping correct and clear accounts pertaining to all outward affairs. It is important to make wills, or revisions of them, while still in health of mind and body, and free from any feeling of resentment. Delay, or neglect to secure competent legal advice, may cause some unexpected hindrance in the proper execution of one\'s bequests.<br /><em>Ohio Yearly Meeting (Conservative), General Advices & Queries, advice number 12</em>',

'In bereavement, allow yourself to grieve fully. Allow others to mourn: let your caring embrace them. Through our acceptance of the fact of death, we are freed to live more fully. Are you able to contemplate your own death, and the death of those closest to you?<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, D19</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var death = "<h2>Death and old age</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=death;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}