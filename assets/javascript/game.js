var topics = ["beaver", "cat", "bird", "koala", "panda", "rat", "rooster", "skunk", "otter", "pig", "flamingo", "yak", "shark", "rabbit", "cow"]

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3UrbvjjXIdCJBLf193bSUFx6flMcvxUC&rating=&limit=&q=";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)

    // This loops throught the topic array and makes a button for each index
    for (var i = 0; i < topics.length; i++) {
        var addButton = $("<button>")
        $("#buttons").append(addButton)
        addButton.text(topics[i]);
    }

    // Gives buttons an on click event
    $("#buttons").on("click", function(){
        console.log("work dang it!!!")
    })
   
    function addNewButton() {
        $("#mySearch").on("click", function() {
            var animal = $("#topicInput").val().trim();
            if (animal == ""){
                return false;//no blank buttons
            }
            topic.push(animal);
    
            displayGifButtons();
            return false;
            });
    }

});

