var topics = ["beaver", "cat", "bird", "koala", "panda", "rat", "rooster", "skunk", "otter", "pig", "flamingo", "yak", "shark", "rabbit", "cow"]

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3UrbvjjXIdCJBLf193bSUFx6flMcvxUC";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)

    for (var i = 0; i < topics.length; i++) {
        var addButton = $("<button>")
        $("#buttons").append(addButton)
        addButton.text(topics[i]);
    }

  
   

});

