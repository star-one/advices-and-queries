// Acting under Concern
function updateConcern() {
var strings = [
'Respect the laws of the state but let your first loyalty be to God\'s purposes. If you feel impelled by strong conviction to break the law, search your conscience deeply. Ask your meeting for the prayerful support which will give you strength as a right way becomes clear.<br /><em>Britain Yearly Meeting, Advices and Queries, number 35</em>',

'Do you uphold those who are acting under concern, even if their way is not yours? Can you lay aside your own wishes and prejudices while seeking with others to find God\'s will for them?<br /><em>Britain Yearly Meeting, Advices and Queries, number 36</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var concern = "<h2>Acting under Concern</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=concern;
  
  scroll(0,0)
}