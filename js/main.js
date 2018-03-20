
var $colors=$(['#3A4B5B','#9B5094','#99C436', '#2562A8','#84221D','#33EDF7', '#93821F','6A605C','#B9EABA' ]);
$(document).ready(function() {
    loadQuote();
});
 function loadQuote(){
   var randomColor=Math.floor((Math.random() * 10) + 1);
   for(var i=0; i<$colors.length;i++){
       
   }
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

$("#new_quote").click(function(){loadQuote()});
