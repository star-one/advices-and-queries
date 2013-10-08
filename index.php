<html>
  <head>
    <meta name="generator"
    content="HTML Tidy for HTML5 (experimental) for Windows https://github.com/w3c/tidy-html5/tree/c63cc39" />
    <title>Quaker Advices and Queries</title><?php
    ?>
    <!-- CSS
         ================================================== -->
    <link rel="stylesheet" href="./shared/style.css" />
    <link rel="stylesheet" href="./shared/skeleton.css" />
    <link rel="stylesheet" href="./shared/layout.css" />
    <link rel="stylesheet" href="./shared/wordpress.css" />
    <link rel="stylesheet" href="./shared/metro.css" />
    <!-- Mobile Specific Metas
  ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <!--[if lt IE 9]>
                <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
	 <script src="./children.js"></script>
	 <script src="./community.js"></script>
	 <script src="./death.js"></script>
	 <script src="./diversity.js"></script>
	 <script src="./general.js"></script>
	 <script src="./integrity.js"></script>
	 <script src="./interchurch-interfaith.js"></script>
	 <script src="./life-decisions.js"></script>
	 <script src="./lifestyle.js"></script>
	 <script src="./quaker-business.js"></script>
	 <script src="./relationships.js"></script>
	 <script src="./study-and-prayer.js"></script>
	 <script src="./worship.js"></script>
  </head>
  <body>
    <div>
      <div id="page" class="hfeed">
        <div id="top-bar">
          <div class="container">
            <div class="sixteen columns">
              <header id="branding" role="banner">
                <div id="navigation">
                  <hgroup>
                    <h1 class="screen-reader-text" id="site-title">Quaker Advices and Queries</h1>
                    <h1 style="color: white; font-weight: bold;">Quaker Advices and Queries</h1>
                  </hgroup>
                </div>
              </header>
            </div>
          </div>
          <div id="menu-bar">
            <div class="container">
              <div class="sixteen columns">
                <nav>
                  <div id="access" role="navigation">
                    <h2 class="assistive-text section-heading">Main menu</h2>
                    <div class="skip-link screen-reader-text">Skip to content</div><?php include './menu.php' ?>
                  </div>
                  <!-- #access -->
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- #branding -->
    </div>
    <div class="container">
      <div id="main">
	    <div id="query">
	    </div>
	 <script>
	 function updateQuery() {
      <?php include './general.php' ?>
	    var txt=document.getElementById("query")
        txt.innerHTML=general;
	 }
	 </script>
	 <input type="button" value="New query" onClick="updateQuery()" />
     </div>
    </div>
    <!-- #main -->
    <!-- container -->
    <div id="footer-bar">
      <div class="container">
        <div class="sixteen columns">
          <footer id="colophon" role="contentinfo">
            <div id="footer">
              <p>Skeleton site presented as a work in progress</p>
            </div>
          </footer>
        </div>
        <!-- #colophon -->
      </div>
    </div>
	</div>
	</div>
    <!-- #page -->
    <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push([&#39;_setAccount&#39;, &#39;xxxxx&#39;]);
  _gaq.push([&#39;_trackPageview&#39;]);

  (function() {
    var ga = document.createElement(&#39;script&#39;); ga.type = &#39;text/javascript&#39;; ga.async = true;
    ga.src = (&#39;https:&#39; == document.location.protocol ? &#39;https://ssl&#39; : &#39;http://www&#39;) +
&#39;.google-analytics.com/ga.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
  </body>
</html>
