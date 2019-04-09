// create array holding comedian names, this is where search terms will be added
var comedians = ["John Mulaney", "Pete Davidson", "Kate McKinnon", "Ali Wong", "Andy Samberg", "Kyle Kinane", "Eric Andre"];


// create function to display gifs, sourced from giphy
function displayComedianGifs() {

  var comedian = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=OOoRwBe4lN4ls7NhlvrzcVJYIt7UGCVL&limit=10";

  // make ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (data) {
    console.log(data);
    var gifImg = $("<img class='gif'>").attr("src");
    $(".right-column").prepend(gifImg);


  })


  // create img to hold gifs
  // create function to bootstrap the called gifs into cards
  //have gifs appear in still state
  //prepend new gifs above old gifs
};
displayComedianGifs()

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