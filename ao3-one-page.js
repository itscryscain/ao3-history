javascript:(function(w,d,f){var v="1.3.2";if(w.jQuery===undefined||w.jQuery.fn.jquery<v){var done=false;var s=d.createElement("script");s.src="//code.jquery.com/jquery-"+v+".min.js";s.onload=s.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;console.log("loaded jQuery");f(jQuery.noConflict())}};d.getElementsByTagName("head")[0].appendChild(s)}else{f(jQuery)}})(window,document,function(jQuery){(function($){
	var lastpage = $("ol.pagination li").last().prev().text();

	var firstpage = window.location.href;
	var currentpage = 1;

	$("ol.reading").first().attr("id", "pageworks1");

	while (currentpage < lastpage) {
		currentpage++;
		$("#pageworks1").after("<ol id=\"pageworks" + currentpage + "\" />");
		$("#pageworks" + currentpage).load(firstpage + "?page=" + currentpage + " li.work");
	}
})(jQuery);});