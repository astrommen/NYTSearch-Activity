$(document).ready(function() {

    var semantic = "coronavirus";
    var queryURL = "http://api.nytimes.com/svc/semantic/vs/concept/name/nytd_des/" +
    semantic + ".json?fields=all&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";
    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        var results = response.data
    })
     console.log(response.data);

});