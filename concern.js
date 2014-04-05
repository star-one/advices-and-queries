// Acting under Concern
function updateConcern() {
var strings = [
'Obey the laws of the state, except when they conflict with your inner conviction. Work to amend laws that you consider unjust. If you feel called to civil disobedience, seek the guidance and support of your Meeting. Be prepared to accept the consequences cheerfully.<br /><em>Aotearoa/New Zealand Yearly Meeting, Advices and Queries, E4</em>',

'Respect the laws of the state but let your first loyalty be to God\'s purposes. If you feel impelled by strong conviction to break the law, search your conscience deeply. Ask your meeting for the prayerful support which will give you strength as a right way becomes clear.<br /><em>Britain Yearly Meeting, Advices and Queries, number 35</em>',

'Do you uphold those who are acting under concern, even if their way is not yours? Can you lay aside your own wishes and prejudices while seeking with others to find God\'s will for them?<br /><em>Britain Yearly Meeting, Advices and Queries, number 36</em>',

'We value our part in shaping the laws of our country. Our task is to see that laws serve God\'s purposes and build a just social order. Our first allegiance should be to God, and if this conflicts with any compulsion of the state, we serve our country best by remaining true to our higher loyalty.<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Advices</em>',

'If, by divine leading, our attention is focused on a law that is contrary to God\'s law, we must proceed with care. Before acting, Friends should pray for further guidance and speak with the Meeting, family members, and all those who might be affected by the decision. If a decision involves disobedience to the law, we should make the grounds of our action clear to all concerned and be prepared to suffer any penalties without evasion. As a community, we must care for those who suffer for conscience\'s sake.<br /><em>Pacific Yearly Meeting, Advices and Queries, Social and Civic Responsibility, Advices</em>'
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var concern = "<h2>Acting under Concern</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=concern;
  
  scroll(0,0)

sharetext = randomString.replace("<br /><em>", " - ");
sharetext = sharetext.replace("</em>", "");

return sharetext;
}