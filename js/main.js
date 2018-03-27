$(document).ready(function() {
    loadQuote();
});

$("#new_quote").click( function () {
    loadQuote()
});
$("#tweet_quote").click( function () {
    tweet_qoute()
});
$("#tumblr").click( function () {
    tumblr ();
}) 

 function loadQuote(){
    $("#quote_body").empty();
    $("#quote_author").empty();

    var api="H2YE0mH3wKmshcDPCpyWTueHAXW8p1MTkozjsniSjRwYHwiQSS";
    var url="https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10";
    
    $.getJSON(url, {"mashape-key":api}, function(response){
        var $text=response.quote;
        var $qoute_author=response.author;
        console.log($text);
        console.log($qoute_author);

        $("#quote_body").append($text);
        $("#quote_author").append($qoute_author);
    });
    $('#tweet-quote').on('click', function() {
          openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + $text + '" ' + $qoute_author));
        });
}


// tweet qoute
function tweet_qoute(){
    console.log("tweet");
}

// tumblr
function tumblr(){
    console.log("Tumblr");
}


// add tweet functio and tumblr