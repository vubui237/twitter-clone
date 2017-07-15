$(document).ready(function () { //Wohoo, We're using jQuery!

    //Let's make the tweet button and char count hidden. We target tweet-compose, to bring back the button/count.
    $('#tweet-controls').hide();
    $('.tweet-compose').on('click', function(e) {
        $('#tweet-controls').show();
        $(this).css('height','5em');
    });
    //Ok, let's count the chars typed and then change the color to red when it is >10. 
    $('.tweet-compose').on('keyup keydown', function(e) {
        var maxChars = 140;
        //Let's get a value of the length typed.
        var counts = $(this).val().length;
        var char = maxChars - counts;
        if(counts>=maxChars) {
            $('#char-count').text("Limit Reached n00b").css('color','red');
            $('#tweet-submit').hide();
        }
        else if(counts>=maxChars-10) {
            $('#char-count').text(char).css('color','red');
            $('#tweet-submit').show();
        }
        else {
            $('#char-count').css('color','black');
            $('#char-count').text(char);
            $('#tweet-submit').show();
        }
        
    });
    //ZOMGZ Tweet button implementation!!!
    var listo = [];
    var Task = function(task) { //Create an object to push into array.
       this.task = task;
        this.id = 'new';
    }
    var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);

		$('.tweet-compose').val('');

		 $('#main').prepend(
             '<div class="tweet">' +
						'<div class="content">'+
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">Kool Kat </strong>' +
							'<span class="username"> @KitKats</span>' +
							'<p class="tweet-text">' + task.task + '</p>' +
							'<div class="tweet-actions">'+
								'<ul>' +
									'<li><span class="icon action-reply"></span>Reply</li>' +
									'<li class="retweeted"><span class="icon action-retweet"></span> Retweet</li>' +
									'<li class="favorited"><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span>' + 'More</li>' +
								'</ul>' +
							'</div>' +
							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +
										'<img src="img/damenleeturks.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +
								'<div class="time"> 1:04 PM - 19 Sep 13 </div></div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>' 
                        
        
                        
                       
                    );

	    }

    };
    $('#tweet-submit').on('click', function(e){
        e.preventDefault();
        var task = $('.tweet-compose').val().trim();
        addTask(task);
    });

    //Hide tweet actions until hovered.
    $('.tweet-actions').hide();
    $('.tweet-text').bind('mouseover', function(){
        $('.tweet-actions').show();
    });
    // $('.tweet').bind('mouseleave', function(){
    //     $('.tweet-actions').hide();
    // });

    //Hide/reveal retweets/timestamps/reply
    $('.stats').hide();
    $('.reply').hide();
    $('.content').on('click', function(){
        $('.stats, .reply').fadeTo('slow',1);
    });
   //Increase favorite count
   var counter = 6;
   $('.favorited').on('click', function(){
       counter+=1;
       $('.num-favorites').text(counter);
   })
   var counterTweet = 30;
   $('.retweeted').on('click', function(){
       counterTweet+=1;
       $('.num-retweets').text(counterTweet);
   })
   //Time Last Posted
   $('.time').text(jQuery.timeago(new Date()));

   //Hover Avatars!
   $('.avatar').on('mouseenter', function() {
       $('avatar').tooltip('show'); 
   })
   $('.avatar').on('mouseleave', function() {
       $('avatar').tooltip('hide'); 
   })
    
});