var reactions = ['wtf','gtfo','lmfao','lol'];

function renderButtons(){
	$('#reactionsView').empty();
	for (var i = 0; i < reactions.length; i++){
		var a =$('<button>')
		a.addClass('reaction');
		a.attr('data-name', reactions[i]);
		a.text(reactions[i]);
		$('#reactionsView').append(a);
	}
}




renderButtons();

$('#addReaction').on('click',function(){
	var reaction = $('#reaction-input').val().trim();
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + reaction + "&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({url: queryURL,method:'GET'}).done(function(response){
		console.log(response);
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var reactionDiv = $('<div>');
			var p = $('<p>').text("Rating: " + results[i].rating);
			var reactionImage = $('<img>');
			reactionImage.attr('src',results[i].images.fixed_height_still.url);
			reactionImage.attr('data-animate',results[i].images.fixed_height.url);
			reactionImage.attr('data-still',results[i].images.fixed_height_still.url);

			$(function (){
				$(reactionImage).hover(
					function(){
						$(this).attr('src',$(this).data('animate'));
						$(this).attr('data-state','animate');
					},
					function(){
						$(this).attr('src',$(this).data('still'));
						$(this).attr('data-state', 'still');
					});
			});
			$(reactionDiv).append(reactionImage)
			$(reactionDiv).append(p);
			$('#gifsAppearHere').prepend(reactionDiv)
		}
	})
	reactions.push(reaction);
	renderButtons();
	$("#gifsAppearHere").empty();
	$("#reaction-input").empty();

	return false;

});
$(".reaction").on('click', function(){
	var reaction = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + reaction + "&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({url: queryURL,method:'GET'}).done(function(response){
		console.log(response);
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var reactionDiv = $('<div>');
			var p = $('<p>').text("Rating: " + results[i].rating);
			var reactionImage = $('<img>');
			reactionImage.attr('src',results[i].images.fixed_height_still.url);
			reactionImage.attr('data-animate',results[i].images.fixed_height.url);
			reactionImage.attr('data-still',results[i].images.fixed_height_still.url);

			$(function (){
				$(reactionImage).hover(
					function(){
						$(this).attr('src',$(this).data('animate'));
						$(this).attr('data-state','animate');
					},
					function(){
						$(this).attr('src',$(this).data('still'));
						$(this).attr('data-state', 'still');
					});
			});
			$(reactionDiv).append(reactionImage)
			$(reactionDiv).append(p);
			$('#gifsAppearHere').prepend(reactionDiv)
		}
	});
	$("#gifsAppearHere").empty();
	$("#reaction-input").empty();
});







		// $(document).on('click','.reaction',alertReactionName);
	// 	var reaction = $(this).attr("data-name");
	// 	var queryURL = ""
	// 	$.ajax({url:queryURL, method: 'GET'}).done(function(response)){
	// 		var reactionDiv = $('<div class = "reactionDiv">');
	// 	}