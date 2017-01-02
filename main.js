/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/
$(document).ready(function() {
// click submit

$('#submit').click(function() {
        // search request

        var title = $('#title').val();
    })
    // HTTP request
var $xhr = $.getJSON('https://www.omdbapi.com/?t=' + title);

$xhr.done(function(data) {

    if ($xhr.status !== 200)

        return;
})
console.log(data)

if (data.Error === "")

    $('#result').html('');
$('#result').append("<span>" + data.Error + "</span>");

} else {



}

});

})
