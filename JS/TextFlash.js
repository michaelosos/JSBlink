jQuery(document).ready(function(){
$(".flash-text").each(function( index, element ) {
		if (element.children().length == 0) {
			setInterval(function() {
			element.toggle();
		}, 1000);
	}
});
});