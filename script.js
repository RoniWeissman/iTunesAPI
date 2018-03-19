$(document).ready(function() {

    $('#button').on('click', function() {

        var artistName = $('#chooseArtist option:selected').val();
        var number = $('#limit option:selected').text();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artistName + "&limit=" + number,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                myFunction(result.results);
            },
            error: function() { alert('Failed!'); }
        });
    });
});



function myFunction(result) {
    console.log(result);
    for(var i = 0; i < result.length; i++) {
        $("#table").append("<tr>");
        $('#table').append('<td><audio controls="true" src="'+ result[i].previewUrl+'" id="audio" type="audio/m4a"></audio></td>');
        $('#table').append('<td><img controls="true" src="'+ result[i].artworkUrl60+'" id="img" type="img"></img></td>');
        $('#table').append('<td>' + result[i].trackName + '</td>');
        $('#table').append('<td>' + result[i].collectionName + '</td>');
        $('#table').append('<td><button id="' + result[i].trackId + '" onclick="displayMoreInfo(\'' + result[i].collectionExplicitness + ' \', \' ' + result[i].trackPrice + '\')">More Information</button></td>')
        $("#table").append("</tr>");
    }
}

function displayMoreInfo(explicit, price) {
console.log(explicit);
    $('#moreInfo').append("This track is " + explicit);
    $('#moreInfo').append("Price for Track: " + price);

}