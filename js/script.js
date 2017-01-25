$(document).ready(function(){
	var jqxhr = $.ajax( "bot.php" )
	.done(function() {
		console.log( "success" );
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
});