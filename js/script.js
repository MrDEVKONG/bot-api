$(document).ready(function(){
	var jqxhr = $.ajax( "bot.php" )
	.done(function(meddelande) {
		console.log( "success" );
		console.log( meddelande );
		$("#chat_log").prepend( meddelande + "<br>" );
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});

	jQuery("#meme_form").submit(function(event) {
		var user_meme = event.target[0].value;
		jQuery.ajax("bot.php", {data: {meme: user_meme}}).done(function(meddelande) {
			console.log(meddelande);
			$("#chat_log").prepend( meddelande + "<br>" );
		});
		event.target[0].value = "";
		event.preventDefault();
	});
});
