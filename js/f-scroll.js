/*
 * jQuery Scroll animate
 *
 * Copyright (c) 2015 Feb Dao
 * licensed under MIT license.
 *
 * https://github.com/HierenFeb/f-scroll
 *
 * Version: 0.0.1
 */
(function($) {
  'use strict';
	function animated_contents() {
		$("[class*='f-scroll--']:appeared").each(function (i) {
	    var $classef = $(this).attr('class').split(/\s+/);
			var $effect = "";
	    	$.each( $classef, function(index, item){
			    if (item.indexOf("f-scroll")!= -1) {
			    	$effect = item.split("--")[1];
			    }
			});
			var $this    = $(this),
				animated = $effect;
			console.log(animated);

			setTimeout(function () {
				$this.addClass("f-show " +animated);
			}, 200 * i);
		});
	}

	$(document).ready(function() {
		$("[class*='f-scroll']").addClass("animated");
		animated_contents();
		$(window).scroll(function () {
			animated_contents();
		});
	});
})(jQuery);
