var topics = ["beaver", "cat", "bird", "koala", "panda", "rat", "rooster", "skunk", "otter", "pig", "flamingo", "yak", "shark", "rabbit", "cow"]

function displayGif(){
$("#gifDisplay").empty();
var topic = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=3UrbvjjXIdCJBLf193bSUFx6flMcvxUC&limit=1";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    for (var j = 0; j < response.data.length; j++) {
    var rating = $("<p>")
    var img = $("<img>")
    rating.text(response.data[j].rating)
    img.attr("src", response.data[j].source)
    $("#gifDisplay").append(rating, img)
    
        
    }
    
   
})
}
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
        addButton.addClass("button")
        addButton.attr("data-name", topics[i]);
         addButton.text(topics[i]);
         $("#buttons").append(addButton)
       
    }
    }

     $("#add-search").on("click", function(event){
            event.preventDefault()

            var userSearch = $("#search-input").val().trim();

            topics.push(userSearch)
            console.log('topics', topics)

            $("#search-input").val(" ")
            renderButtons();
        })
        
        $(document).on("click", ".button", displayGif);

        renderButtons();

