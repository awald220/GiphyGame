var topics = ["beaver", "cat", "bird", "koala", "panda", "rat", "rooster", "skunk", "otter", "pig", "flamingo", "yak"]

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=3UrbvjjXIdCJBLf193bSUFx6flMcvxUC";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    for (var i = 0; i < topics.length; i++) {
        console.log(i) 
        var addButton = $("<button>")
        $("#buttons").append(addButton)
        addButton.text()
    }

  
   

});

