//Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-3517537-9', 'auto');
ga('send', 'pageview');

//Jquery 

$(document).ready(function() {
	$('#menu li').click(function () {
		$('header').velocity({scale: 2}, {duration : 1000 });
		setTimeout(function() {
			$('header').velocity({scale: 1}, {duration : 1000});
		}, 10);
	})
});
