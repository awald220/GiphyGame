var topics = ["olaf", "nemo", "pascal", "sven", "genie", "gru","zazu", "snow white", "chicken little", "walle", "dory", "simba", "cinderella", "angry birds", "timon and pumbaa", "elsa", "iago", "minions", "kronk"]

function displayGif(){
$("#gifDisplay").empty();
var topic = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=3UrbvjjXIdCJBLf193bSUFx6flMcvxUC&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    for (var j = 0; j < response.data.length; j++) {
    var rating = $("<p>")
    rating.text(response.data[j].rating)

    var img = $("<img>");
    img.attr("src", response.data[j].images.fixed_height_still.url);
    img.attr("data-still", response.data[j].images.fixed_height_still.url);
    img.attr("data-animate", response.data[j].images.fixed_height.url);
    img.attr("data-state", "still");
    img.addClass("gif");
    $("#gifDisplay").append(rating, img);   
    } 

      // this fuction pauses and plays the gif upon being clicked 
      $(".gif").on("click", function(){

            
        var state = $(this).attr("data-state")

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else{
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

            console.log(state)
     })

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
        // this function add the user search to the topics array and displays it as a button, when the add character button is clicked
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

        

        // this fuction pauses and plays the gif upon being clicked 
        $(".button").on("click", function(){

            
        var state = $(this).attr("data-state")

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else{
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

            console.log(state)
         })
