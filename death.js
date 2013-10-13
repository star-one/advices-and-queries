// Death
function updateDeath() {
var strings = [
'Be careful to make or revise your wills, and settle your outward affairs while in health.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Approach old age with courage and hope. As far as possible, make arrangements for your care in good time, so that an undue burden does not fall on others. Although old age may bring increasing disability and loneliness, it can also bring serenity, detachment and wisdom. Pray that in your final years you may be enabled to find new ways of receiving and reflecting God\'s love.<br /><em>Britain Yearly Meeting, Advices & Queries, number 29</em>',

'Are you able to contemplate your death and the death of those closest to you? Accepting the fact of death, we are freed to live more fully. In bereavement, give yourself time to grieve. When others mourn, let your love embrace them.<br /><em>Britain Yearly Meeting, Advices & Queries, number 30</em>',

'The attention of Friends is called to the propriety of conducting funerals and memorial meetings in a sincere spirit of worship. They are advised to avoid the display of floral decorations and the wearing of mourning and to adhere to our simple ceremony.<br /><em>New York Yearly Meeting, advice number 12</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var death = "<h2>Death and old age</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=death;
  
  scroll(0,0)
}