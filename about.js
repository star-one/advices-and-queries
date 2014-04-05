// About
function updateAbout() {
var about = "<h2>About</h2><h3>Purpose</h3><p>The purpose of this app is to give Friends around the world an insight into the wisdom that can be found outside their own Yearly Meetings - especially Yearly Meetings whose theologies and ways of worship are different from their own; to enable Friends to see that as despite our differences what joins us together as Quakers is greater than what drives us apart.</p><p>As Quakers we use our Advices and Queries as points of personal challenge, but often we find them more comforting than challenging, because the ones from our own Yearly Meeting are written in line with the YM's own theological position. Real challenge comes when we seek wisdom from outside our own communities - where Liberal Friends are challenged on their response to Christ, where Evangelical and Conservative Friends are challenged on their response to other faiths, etc</p><p>As well as using the app for personal study, it is hoped Friends will use it and share its contents in their Quaker meetings.</p><h3>Technology</h3><p>The app has been written in HTML5 and JavaScript, and compiled into phone native code using <a href=\"javascript:window.open(encodeURI(\'https://phonegap.com/\'), \'_system\');\">Phonegap</a>; the source code is available under GPL if you want to do other useful things with it at <a href=\"javascript:window.open(encodeURI(\'https://github.com/star-one/advices-and-queries\'), \'_system\');\">GitHub</a>.</p><h3>Support</h3><p>The app is free, and will always be free. If you want to support it having been made, I'd like to interest you in a few other creative projects of mine:</p><p><strong>Quaker eBooks</strong>:<input type=\"button\" value=\"So, who are these Quakers anyway?\" onClick=\"window.open(encodeURI(\'http://goo.gl/nsgFSX\'), \'_system\');\" /><input type=\"button\" value=\"Quaker Faith and Practice around the world\" onClick=\"window.open(encodeURI(\'http://goo.gl/AknkdH\'), \'_system\');\" /><br /><strong>Music</strong>:<input type=\"button\" value=\"The Winterval Conspiracy\" onClick=\"window.open(encodeURI(\'http://goo.gl/Ievpjx\'), \'_system\');\" /><br /><strong>Web</strong>:<input type=\"button\" value=\"Online Meeting for Worship\" onClick=\"window.open(encodeURI(\'http://goo.gl/DxY1T2\'), \'_system\');\" /></p><h3>Feedback</h3><p>To suggest additional Yearly Meetings to the pool, or to correct mistakes I've made in categorisation please feel free to <a href=\"mailto:simon@star-one.org.uk?subject=Advices%20and%20Queries%20feedback\">email me</a>.</p><hr />";

  var txt=document.getElementById("query")
  txt.innerHTML=about;
  
  scroll(0,0)
}