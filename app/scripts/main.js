$(document).ready(function(){
    console.log('Loaded main.js!');

    $('#generate').on('click', function(){
        // Function to fetch the quote when button clicked
        $.ajax({
            type: 'POST',
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
            headers: {
                "X-Mashape-Key": "P7SzoGf5HWmshu3NYRC3l627SRJEp1NddF6jsnvGYBqiCEVQ9l",
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }).done(function(){
            $('#quote').text('Quote changed!');
        });
    });
});
