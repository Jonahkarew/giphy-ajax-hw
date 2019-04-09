// create array holding comedian names, this is where search terms will be added
var comedians = ["John Mulaney", "Pete Davidson", "Kate McKinnon", "Ali Wong", "Andy Samberg", "Kyle Kinane", "Eric Andre"];


// create function to display gifs, sourced from giphy
function displayComedianGifs() {
  $("#gifContainer").empty();
  var comedian = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q="+comedian+"&api_key=OOoRwBe4lN4ls7NhlvrzcVJYIt7UGCVL&limit=10";

  // make ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    var results = response.data
    for (var i = 0; i < results.length; i++){
      console.log(response)
      var comedianDiv = $("<div>");
      var gifImg = $("<img class='gif col-md-6'>").attr("src", results[i].images.fixed_height.url)
      comedianDiv.append(gifImg);
      $("#gifContainer").prepend(comedianDiv);
    }
    


  })


  // create img to hold gifs
  // create function to bootstrap the called gifs into cards
  //have gifs appear in still state
  //prepend new gifs above old gifs
};


//function for rendering buttons
function renderButtons() {
  $("#buttonDiv").empty();
  //delete previous buttons
  //generate buttons for items in array
  for (var i = 0; i < comedians.length; i++) {
    //for loop (var i = 0; i < comedians.length; i++)
    var a = $("<button>");
    //create var for button, var a = $("<button>")
    a.addClass("gif-button");
    //add class of gif-button
    a.attr("data-name", comedians[i]);
    //add data attribute a.attr("data-name", comedians[i])
    a.text(comedians[i])
    //add button text a.text(comedians[i])
    $("#buttonDiv").append(a);
    //add buttons to button div $("#buttonDiv").append(a)
  }
}

//add button from form to button div
$("#submitButton").on("click", function(event)
{
  event.preventDefault();

  var comedian = $("#userSearch").val().trim();
  comedians.push(comedian);
  renderButtons();
  $("#userSearch").val("").select();
})
//event.preventDefault()
//var for input submit var comedian = $("#searchForm").val().trim()
//add to array comedians.push(comedian)

//add event listener to all elements with a class of gif-button $("document").on("click", ".gifButton", displayComedianGifs)
$(document).on("click", ".gif-button", displayComedianGifs);

//renderButtons() to display initial buttons
renderButtons();