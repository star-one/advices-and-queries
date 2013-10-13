// Integrity
function updateIntegrity() {
var strings = [
'Carefully maintain in your speech and conduct, and encourage in your families, simplicity, truthfulness, and sincerity; and endeavor to avoid worldliness in all its forms.<br /><em>North Carolina Yearly Meeting (Conservative), Advices',

'Are you honest and truthful in all you say and do? Do you maintain strict integrity in business transactions and in your dealings with individuals and organisations? Do you use money and information entrusted to you with discretion and responsibility? Taking oaths implies a double standard of truth; in choosing to affirm instead, be aware of the claim to integrity that you are making.<br /><em>Britain Yearly Meeting, Advices and Queries, number 37</em>',

'If pressure is brought upon you to lower your standard of integrity, are you prepared to resist it? Our responsibilities to God and our neighbour may involve us in taking unpopular stands. Do not let the desire to be sociable, or the fear of seeming peculiar, determine your decisions.<br /><em>Britain Yearly Meeting, Advices and Queries, number 38</em>',

'Are you honest in your daily work and in all your personal relationships? Do you maintain integrity in your dealings with government authorities and other outward concerns? Do you guard against covetousness, remembering that the quality of life does not depend on the abundance of possessions? Do you seek to discern how much of your time, talents and resources you should devote to the service of others?<br /><em>Ireland Yearly Meeting, Queries for Serious Consideration, number 5</em>',

'Do you uphold the standards of Friends? Are you careful in appointing officers and Sunday school teachers, in calling pastors and special speakers, in sending out missionaries and recording ministers, to see that they are in harmony with the principles of Friends as stated in the Faith and Practice of Northwest Yearly Meeting?<br /><em>Northwest Yearly Meeting, Query 8</em>',

'Are you careful to live within your income? Do you avoid involving yourself in business beyond your ability to manage or in highly speculative ventures? Are you willing to accept a lower economic standard rather than compromise Christian values?<br /><em>Northwest Yearly Meeting, Query 14</em>',

'Are you honest and just in your dealings? Are you true to your promises, prompt in paying your debts, and responsible in handling money or property entrusted to you?<br /><em>Northwest Yearly Meeting, Query 15</em>',


];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var integrity = "<h2>Integrity</h2><p>" + randomString + "</p>";

  var txt=document.getElementById("query")
  txt.innerHTML=integrity;
  
  scroll(0,0)
}