var topics = ["beaver", "cat", "bird", "koala", "panda", "rat", "rooster", "skunk", "otter", "pig", "flamingo", "yak", "shark", "rabbit", "cow"]

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3UrbvjjXIdCJBLf193bSUFx6flMcvxUC&rating=&limit=&q=";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)

   

    // Gives buttons an on click event
    $("#buttons").on("click", function(){
        console.log("work dang it!!!")
    })
   
    // adds new buttons when user uses search bar
    function renderButtons() {
        $("#buttons").empty()
         // This loops throught the topic array and makes a button for each index
    for (var i = 0; i < topics.length; i++) {
        var addButton = $("<button>")
        $("#buttons").append(addButton)
        addButton.text(topics[i]);
    }
    }

     $("#add-search").on("click", function(event){
            event.preventDefault()

            var userSearch = $("#search-input").val()

            topics.push(userSearch)
            console.log('topics', topics)

            $("#search-input").val(" ")
            renderButtons();
        })
     

})